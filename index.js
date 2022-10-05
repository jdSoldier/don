"use strict";

//instanciando los objetos app y BrowserWindow
const { app, BrowserWindow, dialog } = require("electron");

//imprimiendo un mensaje en la consola antes de salir
app.on("before-quit", () => {
  console.log("saliendo");
});

//ejecutando ordenes cuando la aplicacion esta lista
app.on("ready", () => {
  //creando una ventana
  let win = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration:true
    },
    // width: 500,
    // minWidth: 500,
    // maxWidth: 500,
    // height: 510,
    // minHeight: 510,
    // maxHeight: 510,
    resizable: false,
    title: "Hola Mundo!",
    center: true,
    maximizable: false,
  });

  // let child = new BrowserWindow({
  //   show: false,
  //   resizable: false,
  //   parent: win,
  //   modal: true,
  //   // width: 500,
  //   // minWidth: 500,
  //   // maxWidth: 500,
  //   // height: 510,
  //   // minHeight: 510,
  //   // maxHeight: 510,  
  // })

  

  
  
  win.once("ready-to-show", () => {
    win.show();
  });

  // child.once('ready-to-show', () => {
  //   child.show();
  // });

  //child.loadURL(`file://${__dirname}/modal.html`);
  //child.setMenu(null);

  //detectando la posicion del movimiento de la ventana
  //   win.on("move", () => {
  //     const position = win.getPosition();
  //     console.log(`la posicion es ${position}`);
  //   });

  //detectando el cierre de la ventana para cerrar el aplicativo
  win.on("closed", () => {
    win = null;
    app.quit();
  });

  win.loadURL(`file://${__dirname}/index.html`);

  win.webContents.on("did-finish-load",()=>{
    dialog.showSaveDialog({
      title: 'Save file as',
      filters: [{
        name:"Spreadsheets",
        extensions: extensions
      }]
    });
  })

  // win.setMenu(null);
});


