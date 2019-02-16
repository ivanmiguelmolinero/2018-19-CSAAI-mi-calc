function main() {
  console.log("Que comiencen los juegos de JavaScript");

  var boton = document.getElementById('boton');
  var operacion = document.getElementById('operacion');
  var display = document.getElementById('display');
  var resultado = document.getElementById('resultado');

  boton7.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","7");
    display.innerHTML = displayseguido;

  }

  boton8.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","8");
    display.innerHTML = displayseguido;

  }

  boton9.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","9");
    display.innerHTML = displayseguido;

  }

  boton4.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","4");
    display.innerHTML = displayseguido;

  }

  boton5.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","5");
    display.innerHTML = displayseguido;

  }

  boton6.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","6");
    display.innerHTML = displayseguido;

  }

  boton1.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","1");
    display.innerHTML = displayseguido;

  }

  boton3.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","3");
    display.innerHTML = displayseguido;

  }

  boton0.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","0");
    display.innerHTML = displayseguido;

  }

  boton2.onclick = () => {

    var display = document.getElementById('display');
    var pos = display.innerHTML.indexOf("0");
    if (pos == 0) {
      var displaybien = display.innerHTML.replace("0","");
    } else {
      var displaybien = display.innerHTML;
    }
    var displayseguido = displaybien.concat("","2");
    display.innerHTML = displayseguido;

  }

  operacionmas.onclick = () => {

    resultado.innerHTML = Number(display.innerHTML);
    display.innerHTML = "0";
  }

  operacionigual.onclick = () => {

    var operador2 = Number(display.innerHTML);
    var suma = Number(resultado.innerHTML) + operador2;
    display.innerHTML = suma;
  }

}
