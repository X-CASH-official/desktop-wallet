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
  const DATABASE:string = '{"wallet_data": [],"contact_data": [],"wallet_settings": {"autolock": 10,"remote_node": "USSEED1.X-CASH.ORG:18281"}}';
  const RPC_FILE:string = process.platform !== "darwin" ? "useragent.txt" : process.env.HOME + "/useragent.txt";
  const DATABASE_FILE:string = process.platform !== "darwin" ? "database.txt" : process.env.HOME + "/database.txt";

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

  mainWindow.webContents.openDevTools();

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
    if (process.platform === "win32")
    {
      exec("taskkill /f /im xcash-wallet-rpc*");
    }
    else
    {
      exec("killall -9 'xcash-wallet-rpc'");
    }
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