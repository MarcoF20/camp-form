function habilitar() {
    var ciudad = document.getElementById('ciudad');
    var transporte = document.getElementById('transporte');
    if (ciudad.selectedIndex != 1 ) {
      transporte.disabled = true;
    }else {
      transporte.disabled = false;
    }
}
  
function mostrar() {
    var select = document.getElementById('camisa');
    var form = document.getElementById('formulario');
    var tr = document.querySelectorAll("tr:nth-child(13), tr:nth-child(14)");
    var talla = document.getElementById('talla');
    if (select.selectedIndex == 1) {
      tr[0].classList.remove('ocultar');
      tr[1].classList.remove('ocultar');
      form.style.height = '570px';
      form.style.transition='height ease 90ms';
      talla.required = true;
    }else{
      tr[0].classList.add('ocultar');
      tr[1].classList.add('ocultar')
      form.style.height = '500px';
      form.style.transition='height ease 1s';
    }
}

const comentarios = document.getElementById('comentarios')
const caracteresRestantes = document.getElementById('caracteres-restantes');
const LIMITE = 200;

comentarios.addEventListener('input', () => {
    const restantes = LIMITE - comentarios.value.length;
  
    caracteresRestantes.textContent =  `${restantes} Caracteres Restantes`;

    if(restantes <11){
        caracteresRestantes.style.color = "red";
    }else{
        caracteresRestantes.style.color="black"
    }
});
