import { app, BrowserWindow } from "electron";
import * as path from "path";
const AdmZip = require('adm-zip');
const axios = require('axios');
const exec = require('child_process').exec;
const fs = require('fs');
const crypto = require("crypto");
const setupEvents = require('./installers/setupEvents')

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
  }

  // Constants
  const BINARIES_LINUX_DIR_NAME = "xcash-cli-linux-2.0.0"
  const BINARIES_MAC_OS_DIR_NAME = "xcash-cli-osx-2.0.0"
  const BINARIES_WINDOWS_DIR_NAME = "xcash-cli-windows-2.0.0"

  const DATABASE:string = '{"wallet_data": [],"contact_data": [],"wallet_settings": {"autolock": 10,"remote_node": "us1.xcash.foundation:18281"}}';
  const DIR = `${process.env.HOME}/xcash-official/`;
  const RPC_FILE:string = `${DIR}useragent.txt`;
  const DATABASE_FILE:string = `${DIR}database.txt`;

  const downloadBinaries = async (url: string): Promise<void> => {
    const pathToSave = path.resolve(__dirname, 'downloads', 'xcash-2.0.zip')

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
    fs.mkdirSync("./downloads");

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

    await downloadBinaries(`https://github.com/X-CASH-official/xcash-core/releases/download/2.0.0/${binariesDir}.zip`);

    var zip = new AdmZip(`${__dirname}/downloads/xcash-2.0.zip`);
    zip.extractAllTo(`${__dirname}/downloads`, true);


    if (process.platform === "win32") {
      fs.copyFileSync(`./downloads/${binariesDir}/xcash-wallet-rpc.exe`, `${DIR}xcash-wallet-rpc.exe`)
    } else {
      exec(`chmod -R 755 ./downloads`);

      // looks like adm-zip works differently on different platforms
      if (process.platform === "linux") {
        fs.copyFileSync(`${__dirname}/downloads/xcash-wallet-rpc`, `${DIR}xcash-wallet-rpc`);
      } else {
        fs.copyFileSync(`${__dirname}/downloads/${binariesDir}/xcash-wallet-rpc`, `${DIR}xcash-wallet-rpc`);
      }

      exec(`chmod +x ${DIR}/xcash-wallet-rpc`)
    }

    fs.rmdirSync("./downloads", { recursive: true });
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
  let rpcUserAgent:string = crypto.randomBytes(100).toString('hex');
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
