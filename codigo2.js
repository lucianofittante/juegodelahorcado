
var juego = false; 
var indice = 0;

//var palabrasorteada = palabras[indice];

var palabras = [
    'ESCUELA',
    'ESTUDIAR',
    'ALURA',
    'ORACLE',
    'PROGRAMAR'
  ]

var dibujo = document.querySelector('canvas');
var contextdibujo = dibujo.getContext('2d');


var comenzar = document.querySelector('.btnC');
var terminar = document.querySelector('.btnT');


contextdibujo.fillStyle = "red";
contextdibujo.fillRect(200,50,50,50);  
  
   function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min)) + min;
    }

    indice = getRandomInt(0,4);
    console.log(palabras[indice]);

   // Manejo de Botones

    comenzar.addEventListener('click', function(event){
      event.preventDefault();

      console.log("apreto comenzar");
      juego= true;

    });

    terminar.addEventListener('click', function(event){
      event.preventDefault();

      console.log("apreto terminar");
      juego=false;
      
    });
   
    /*
    while (juego == true){

        window.onkeypress = function adivinarLetra(e) {
        var letra = e.key
        letra = letra.toUpperCase()

        console.log(letra);

}



    }

    */