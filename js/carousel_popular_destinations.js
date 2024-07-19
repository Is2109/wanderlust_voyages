// Al principio creé un solo archivo Javascript para mi proyecto pero al final decidi tener un documento Javascript para cada "modulo".
// Esto porque index.html es la única página que usa todos los "modulos" de JS. Las demás páginas solo usan el menu hamburguesa y tenía 
// errores en la consola que decían que algunos elementos no se podían leer porque no existían.

// Cada "módulo" de mi javascript está dentro de una función anónima auto ejecutable IIFE
// Esto hará que la página sea más eficiente.




// CAROUSEL POPULAR DESTINATIONS

    // Cuando hago click en .Main-carouselDot (cada punto)
        // Conocer la posición del punto
        // .Main.carouselContainer hace un translateX
        // REMOVE la clase .isClicked a todos los puntos
        // ADD la clase .isClicked al punto que esta "clicado"


        (() => {

          const carouselMain = document.querySelector('.Main-carousel')
          const carouselDot = carouselMain.querySelectorAll('.Main-carouselDot')
          const carouselContainer =carouselMain.querySelector('.Main-carouselContainer')
          
          if(carouselDot){
          
              carouselDot.forEach(( _ , index) =>{
                  carouselDot[index].addEventListener('click' , ()=>{
              
                      let counter = index
                      // let operation = counter * -50
                      let operation
          
                      if( window.innerWidth >= 1000 ){
                        // Ordenador
                        operation = counter * -50
                      }else if( window.innerWidth >= 640 && window.innerWidth < 1000){
                        // Tablet
                       operation = counter * -33.333
                      }else{
                        // Móvil
                        operation = counter * -16.666
                      }
              
                      console.log({ counter , operation })
                      
                      carouselContainer.style.transform = `translateX(${operation}%)`
              
                      carouselDot.forEach(( _ , index ) =>{
                          carouselDot[index].classList.remove('isClicked')
                      })
              
                      carouselDot[index].classList.add('isClicked')
              
                  })
              })
          }
          })();

          // Nota: en este "módulo" la unica optimización que hice fue crear una constante para la contenedora y luego seleccionar 
          // los elementos dentro de la contenedora. Como este código es más complejo preferí no cambiarlo y dejarlo así para que funcione.




