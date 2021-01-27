import { app, BrowserWindow } from "electron";
import * as path from "path";
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
  const DATABASE:string = '{"wallet_data": [],"contact_data": [],"wallet_settings": {"autolock": 10,"remote_node": "us1.xcash.foundation:18281"}}';
  const DIR = `${process.env.HOME}/xcash-official/`;
  const RPC_FILE:string = `${DIR}useragent.txt`;
  const DATABASE_FILE:string = `${DIR}database.txt`;

  // create the directory if it does not exist, and copy the xcash-wallet-rpc binary to it
  if (!fs.existsSync(DIR))
  {
    try
    {
      fs.mkdirSync(DIR);    
      process.platform === "win32" ? fs.copyFileSync("xcash-wallet-rpc.exe",`${DIR}/xcash-wallet-rpc.exe`) : fs.copyFileSync("xcash-wallet-rpc",`${DIR}/xcash-wallet-rpc`);
    }
    catch (error)
    {
    }    
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
