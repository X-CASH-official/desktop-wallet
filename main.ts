import { app, BrowserWindow } from "electron";
import * as path from "path";
const exec = require('child_process').exec;
const fs = require('fs');
const crypto = require("crypto");

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ webPreferences: {nodeIntegration: true}, icon: path.join(__dirname, '/src/assets/images/xcash_logo.png') });

  // make the window full screen
  mainWindow.maximize();

  // create and set the user agent
  let rpcUserAgent:string = crypto.randomBytes(100).toString('hex');
  fs.writeFileSync("useragent.txt", rpcUserAgent);
  mainWindow.webContents.setUserAgent(rpcUserAgent);

  // load the dist folder from Angular
  mainWindow.loadFile(path.join(__dirname, "/dist/index.html"));

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => mainWindow = null);
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