function main() {
  console.log("Que comiencen los juegos de JavaScript");

  var boton = document.getElementById('boton')

  boton.onclick = () => {
    console.log("Click");

    var display = document.getElementById('display');
    var displaybien = display.innerHTML.replace("0","")
    var displayseguido = displaybien.concat("","1");
    display.innerHTML = displayseguido;
  }
  boton2.onclick = () => {

    var display = document.getElementById('display');
    var displaybien = display.innerHTML.replace("0","")
    var displayseguido = displaybien.concat("","2");
    display.innerHTML = displayseguido;

  }
}
