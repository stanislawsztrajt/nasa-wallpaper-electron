// import { BrowserWindow, ipcMain } from 'electron';
// import { download } from 'electron-dl';

const { BrowserWindow, ipcMain } = window.require('electron')
const { download } = window.require('electron-dl')

export const setWallpaperByUrl = (url: string) => {
  ipcMain.on('download-image', async () => {
    const win = BrowserWindow.getFocusedWindow()
    console.log(await download(win as any, url))
  })
  console.log(url)
}