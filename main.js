const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
  console.log('ready!');
  
  const mainWindow = new BrowserWindow({
    width: 652,
    height: 502,
    frame: false,
    transparent: true
  });

  mainWindow.loadFile('index.html');
});