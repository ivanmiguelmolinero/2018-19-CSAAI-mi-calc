function añadir_dig(calc,dig)
{
  console.log("g");
  if (calc.estado == "init") {
    calc.gui.display.innerHTML = dig;
    calc.estado = "OP1"
  } else if (calc.estado == "OP1") {
    calc.gui.display.innerHTML += dig;
    console.log("h")
  }
}

function main () {
  console.log("Holi");

  var calc = {
    estado: "init",
    gui : {
      display: document.getElementById("display"),
      botondig7: document.getElementById("boton7"),
      botondig8: document.getElementById("boton8"),
      botondig9: document.getElementById("boton9"),
      botondig4: document.getElementById("boton4"),
      botondig5: document.getElementById("boton5"),
      botondig6: document.getElementById("boton6"),
      botondig1: document.getElementById("boton1"),
      botondig2: document.getElementById("boton2"),
      botondig3: document.getElementById("boton3"),
      botondig0: document.getElementById("boton0"),
      operacionmas: document.getElementById("operacionmas")
    }
  }
  calc.gui.botondig7.onclick = () => {
    display = añadir_dig(calc,7)
  }
  calc.gui.botondig8.onclick = () => {
    display = añadir_dig(calc,8)
  }
  calc.gui.botondig9.onclick = () => {
    display = añadir_dig(calc,9)
  }
  calc.gui.botondig4.onclick = () => {
    display = añadir_dig(calc,4)
  }
  calc.gui.botondig5.onclick = () => {
    display = añadir_dig(calc,5)
  }
  calc.gui.botondig6.onclick = () => {
    display = añadir_dig(calc,6)
  }
  calc.gui.botondig1.onclick = () => {
    display = añadir_dig(calc,1)
  }
  calc.gui.botondig2.onclick = () => {
    display = añadir_dig(calc,2)
  }
  calc.gui.botondig3.onclick = () => {
    display = añadir_dig(calc,3)
  }
  calc.gui.botondig0.onclick = () => {
    display = añadir_dig(calc,0)
  }
}
