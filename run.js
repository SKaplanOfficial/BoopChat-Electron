const {app, BrowserWindow, Menu} = require('electron')

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 400, height: 600, frame: true, icon: "favicon.png"})

    // and load the index.html of the app.
    win.loadFile('index.html')
  }

  app.on('ready', createWindow)