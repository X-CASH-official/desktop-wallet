import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as AdmZip from 'adm-zip';
import axios from 'axios';
import { exec } from 'child_process'
import * as fs from 'fs';
import * as crypto from "crypto";
import * as setupEvents from './installers/setupEvents'

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
  }

  // Constants
  const BINARIES_LINUX_DIR_NAME = "xcash-cli-linux-2.0.1"
  const BINARIES_MAC_OS_DIR_NAME = "xcash-cli-osx-2.0.1"
  const BINARIES_WINDOWS_DIR_NAME = "xcash-cli-windows-2.0.1"

  const DATABASE = '{"wallet_data": [],"contact_data": [],"wallet_settings": {"autolock": 10,"remote_node": "us1.xcash.foundation:18281"}}';
  const DIR = process.platform !== "win32" ? `${process.env.HOME}/xcash-official/` : (`${process.env.USERPROFILE}\\xcash-official\\`).replace(/\\/g,"\\\\");
  const RPC_FILE = `${DIR}useragent.txt`;
  const DATABASE_FILE = `${DIR}database.txt`;
  const WALLET_RPC_LOG = `${DIR}xcash-wallet-rpc.log`;

  const downloadBinaries = async (url: string): Promise<void> => {
    const pathToSave = path.resolve(`${DIR}downloads`, 'xcash-2.0.zip')

    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream'
    })

    response.data.pipe(fs.createWriteStream(pathToSave))

    return new Promise((resolve, reject) => {
      response.data.on('end', () => {
        resolve();
      })
      response.data.on('error', () => reject())
    })
  }

  const prepareWorkingDir = async (): Promise<void> => {
    fs.mkdirSync(DIR);
    fs.mkdirSync(`${DIR}downloads`);

    let binariesDir: string
    switch (process.platform) {
      case "darwin":
        binariesDir = BINARIES_MAC_OS_DIR_NAME;
        break;
      case "win32":
        binariesDir = BINARIES_WINDOWS_DIR_NAME;
        break;
      default:
        binariesDir = BINARIES_LINUX_DIR_NAME;
        break;
    }

    await downloadBinaries(`https://github.com/X-CASH-official/xcash-core/releases/download/2.0.1/${binariesDir}.zip`);

    const zip = new AdmZip(`${DIR}downloads/xcash-2.0.zip`);
    zip.extractAllTo(`${DIR}downloads`, true);

    switch (process.platform) {
      case "darwin":
        exec(`chmod -R 755 ${DIR}downloads`);
        fs.copyFileSync(`${DIR}downloads/bin/xcash-wallet-rpc`, `${DIR}xcash-wallet-rpc`);
        exec(`chmod +x ${DIR}xcash-wallet-rpc`)
        break;
      case "win32":
        fs.copyFileSync(`${DIR}downloads/bin/xcash-wallet-rpc.exe`, `${DIR}xcash-wallet-rpc.exe`)
        break;
      default:
        exec(`chmod -R 755 ${DIR}downloads`);
        fs.copyFileSync(`${DIR}downloads/bin/xcash-wallet-rpc`, `${DIR}xcash-wallet-rpc`);
        exec(`chmod +x ${DIR}xcash-wallet-rpc`)
        break;
    }

    fs.rmdirSync(`${DIR}downloads`, { recursive: true });
  }

  // create the directory if it does not exist, and download and copy the xcash-wallet-rpc binary to it
  if (!fs.existsSync(DIR)) {
    (async () => {
      await prepareWorkingDir();
    })();
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({ webPreferences: {nodeIntegration: true}, icon: path.join(__dirname, '/src/favicon.ico') });

  // make the window full screen
  mainWindow.maximize();

  // create and set the user agent
  const rpcUserAgent = crypto.randomBytes(100).toString('hex');
  fs.writeFileSync(RPC_FILE, rpcUserAgent);
  mainWindow.webContents.userAgent = rpcUserAgent;

  // load the dist folder from Angular
  mainWindow.loadFile(path.join(__dirname, "/dist/index.html"));

  // load the dev tools for debugging
  //mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => mainWindow = null);

  // check if the start DB is created
  if (!fs.existsSync(DATABASE_FILE))
  {
    fs.writeFileSync(DATABASE_FILE, DATABASE);
  }
  
  // delete any xcash rpc log
  if (fs.existsSync(WALLET_RPC_LOG))
  {
    fs.unlinkSync(WALLET_RPC_LOG);
  }
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    // close the xcash-wallet-rpc
    process.platform === "win32" ? exec("taskkill /f /im xcash-wallet-rpc*") : exec("killall -9 'xcash-wallet-rpc'");
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
