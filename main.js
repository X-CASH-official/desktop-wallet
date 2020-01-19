"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow({ webPreferences: { nodeIntegration: true }, icon: path.join(__dirname, '/src/assets/images/xcash_logo.png') });
    // make the window full screen
    mainWindow.maximize();
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
