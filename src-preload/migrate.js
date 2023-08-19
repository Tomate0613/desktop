const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('MigratePreload', {
  getStrings: () => ipcRenderer.sendSync('get-strings'),
  setMicrophone: (microphone) => ipcRenderer.invoke('set-microphone', microphone),
  setCamera: (camera) => ipcRenderer.invoke('set-camera', camera),
  done: () => ipcRenderer.invoke('done')
});