const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'xcash-desktop-wallet-app-windows/'),
    authors: 'X-CASH',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'xcash-desktop-wallet-app.exe',
    setupExe: 'xcash-desktop-wallet-app-installer.exe'
  })
}