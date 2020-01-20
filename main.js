"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var exec = require('child_process').exec;
var fs = require('fs');
var crypto = require("crypto");
var mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({ webPreferences: { nodeIntegration: true }, icon: path.join(__dirname, '/src/assets/images/xcash_logo.png') });
    // make the window full screen
    mainWindow.maximize();
    // create and set the user agent
    var rpcUserAgent = crypto.randomBytes(100).toString('hex');
    fs.writeFileSync("useragent.txt", rpcUserAgent);
    mainWindow.webContents.setUserAgent(rpcUserAgent);
    // load the dist folder from Angular
    mainWindow.loadFile(path.join(__dirname, "/dist/index.html"));
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", function () { return mainWindow = null; });
}
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed.
electron_1.app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        // close the xcash-wallet-rpc
        if (process.platform === "win32") {
            exec("taskkill /f /im xcash-wallet-rpc*");
        }
        else {
            exec("killall -9 'xcash-wallet-rpc'");
        }
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
