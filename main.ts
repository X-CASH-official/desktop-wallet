import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ webPreferences: {nodeIntegration: true}, icon: path.join(__dirname, '/src/assets/images/xcash_logo.png') });

  // make the window full screen
  mainWindow.maximize();

  // load the dist folder from Angular
  mainWindow.loadFile(path.join(__dirname, "/dist/index.html"));

  mainWindow.on("closed", () => mainWindow = null);
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
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