// Al principio creé un solo archivo Javascript para mi proyecto pero al final decidi tener un documento Javascript para cada "modulo".
// Esto porque index.html es la única página que usa todos los "modulos" de JS. Las demás páginas solo usan el menu hamburguesa y tenía 
// errores en la consola que decían que algunos elementos no se podían leer porque no existían.

// Cada "módulo" de mi javascript está dentro de una función anónima auto ejecutable IIFE
// Esto hará que la página sea más eficiente.



// CLIENT REVIEWS CAROUSEL

    // Cuando hago click en .Main-carouselReviewsDot (cada punto)
        // Conocer la posición del punto
        // .Main.carouselReviewsContainer hace un translateX
        // REMOVE la clase .isClicked a todos los puntos
        // ADD la clase .isClicked al punto que esta "clicado"


        (() => {
            const carouselReviewsMain = document.querySelector('.Main-carouselReviews');
            const carouselReviewsDots = carouselReviewsMain.querySelectorAll('.Main-carouselReviewsDot');
            const carouselReviewsContainer = carouselReviewsMain.querySelector('.Main-carouselReviewsContainer');
        
            let dotClickHandler = (index) => {
                let operation = index * (-100 / 3);
                carouselReviewsContainer.style.transform = `translateX(${operation}%)`;
        
                carouselReviewsDots.forEach((dot) => dot.classList.remove('isClicked'));
                carouselReviewsDots[index].classList.add('isClicked');
            };
        
            if (carouselReviewsContainer) {
                carouselReviewsDots.forEach((dot, index) => {
                    dot.addEventListener('click', () => dotClickHandler(index));
                });
            }
        })();


    // ANTES DE LA OPTIMIZACIÓN
        // (() => {

        // const carouselReviewsMain = document.querySelector('.Main-carouselReviews')    
        // const carouselReviewsDot = carouselReviewsMain.querySelectorAll('.Main-carouselReviewsDot')
        // const carouselReviewsContainer = carouselReviewsMain.querySelector('.Main-carouselReviewsContainer')
            
        // if(carouselReviewsContainer){

        //     carouselReviewsDot.forEach(( _ , index) =>{
        //         carouselReviewsDot[index].addEventListener('click' , ()=>{
                
        //             let counter = index
        //             let operation = counter * ( -100 / 3 )
                
        //             carouselReviewsContainer.style.transform = `translateX(${operation}%)`
                
        //             carouselReviewsDot.forEach(( _ , index ) =>{
        //                 carouselReviewsDot[index].classList.remove('isClicked')
        //             })
                
        //             carouselReviewsDot[index].classList.add('isClicked')
                
        //         })
        //     })
        // }
        // })();


