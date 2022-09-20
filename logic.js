import { personal, dias, meses, startTime, theDate } from "./utils.js";

// window.addEventListener("load", function(event){

// })
startTime();
theDate();

const headerFecha = document.querySelector(".header-fecha");
const headerHora = document.querySelector(".header-hora");

const controlFormDni = document.querySelector(".control-form-dni");
const controlFormNombres = document.querySelector(".control-form-nombres");
const controlFormApellidos = document.querySelector(".control-form-apellidos");
const controlFormTipo = document.querySelector(".control-form-tipo");
const controlFormSubmit = document.querySelector(".control-form-submit");
const viewanswer = document.querySelector(".view-answer");

controlFormDni.addEventListener("change", completeForm);
controlFormSubmit.addEventListener("click", guardar);

function completeForm(e) {
  console.log(e.target.value);
  for (let i = 0; i < personal.length; i++) {
    if (e.target.value == personal[i].dni) {
      controlFormNombres.value = personal[i].nombres;
      controlFormApellidos.value = personal[i].apellidos;
    }
    if (e.target.value == "") {
      controlFormNombres.value = "";
      controlFormApellidos.value = "";
    }
  }
}

function guardar() {
  const resp = {
    dni: controlFormDni.value,
    nombres: controlFormNombres.value,
    apellidos: controlFormApellidos.value,
    tipo: controlFormTipo.value,
    fecha: headerFecha.innerText,
    hora: headerHora.innerText,
  };

  const arrayRegistros = [];
  if (!localStorage.getItem("a")) {
    localStorage.setItem("a", JSON.stringify(resp));
  } else {
    arrayRegistros.push(JSON.parse(localStorage.getItem("a")));
    arrayRegistros.push(resp);
    localStorage.setItem("a", JSON.stringify(arrayRegistros.flat()));
  }
}

//document.getElementById(dni).addEventListener(onselect,)
