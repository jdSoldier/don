"use strict";

//instanciando los objetos app y BrowserWindow
const { app, BrowserWindow } = require("electron");

//imprimiendo un mensaje en la consola antes de salir
app.on("before-quit", () => {
  console.log("saliendo");
});

//ejecutando ordenes cuando la aplicacion esta lista
app.on("ready", () => {
  //creando una ventana
  let win = new BrowserWindow({
    show: false,
    // width: 500,
    // minWidth: 500,
    // maxWidth: 500,
    // height: 400,
    // minHeight: 400,
    // maxHeight: 400,
    resizable: false,
    title: "Hola Mundo!",
    center: true,
    maximizable: false,
  });

  win.once("ready-to-show", () => {
    win.show();
  });

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

  //   win.setMenu(null);
});
