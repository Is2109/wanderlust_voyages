// Creé un solo archivo javascript para mi proyecto. 
// Cada "módulo" de mi javascript está dentro de una función anónima auto ejecutable, 
// por lo que puedo agrupar cada "módulo" por separado y javascript solo ejecutará el código si ese "modulo" existe. 
// Esto hará que la página sea más eficiente.



// MENU HAMBURGUESA RESPONSIVE

    // Cuando hago CLICK en .Header-button
        // Al .Header-nav le TOGGLE la clase isVisible
        
        (() => {
        
            const header = document.querySelector('.Header')
            const headerButton = header.querySelector('.Header-button')
            const headerNav = header.querySelector('.Header-nav')

            let menuToggleHandler = () => {
                headerNav.classList.toggle('isVisible')
            }
    
            headerButton.addEventListener('click' , menuToggleHandler); 
    
            })();

    
    // ANTES DE LA OPTIMIZACIÓN
        // (() => {
        
        // const headerButton = document.querySelector('.Header-button')
        // const headerNav = document.querySelector('.Header-nav')

        // headerButton.addEventListener('click' , () => {
        //     headerNav.classList.toggle('isVisible')
        // })

        // })();





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

        


// ACORDEON PREGUNTAS PRECUENTES

    // Cuando hago CLICK en .Main-accordionQuestion
        // REMOVE todas las clases .isClicked a .Main-accordionIcon
        // REMOVE todas las clases .isVisible a .Main-p--accordion
        // ADD la clase .isClicked a .Main-accordionIcon (de acuerdo con su index) - esto hace que el icono hace un rotate de 180deg
        // ADD la clase .isVisible a .Main-p--accordion (de acuerdo con su index) - esto hace que se vea la respuesta


        (() => {
            const accordionContainer = document.querySelector('.Main-accordionContainer')
            const questions = accordionContainer.querySelectorAll('.Main-accordionQuestion')
            const answers = accordionContainer.querySelectorAll('.Main-p--accordion');
            const icons = accordionContainer.querySelectorAll('.Main-accordionIcon');
        
            let questionsClickHandler = (index) => {
                if (answers[index].classList.contains('isVisible')) {
                    answers[index].classList.remove('isVisible');
                } else {
                    answers.forEach((answer) => answer.classList.remove('isVisible'));
                    answers[index].classList.add('isVisible');
                }
                icons[index].classList.toggle('isClicked');
            };
        
            questions.forEach((questions, index) => {
                questions.addEventListener('click', () => questionsClickHandler(index));
            });
        })();
        


    // ANTES DE LA OPTIMIZACIÓN
        // (() => {

        //     const block = document.querySelectorAll('.Main-accordionBlock')
        //     const answer = document.querySelectorAll('.Main-p--accordion')
        //     const icon = document.querySelectorAll('.Main-accordionIcon')
        
        //     block.forEach(( _ , index ) =>{
        //         block[index].addEventListener('click' , () => {
            
        //             if(answer[index].classList.contains('isVisible')){
        //                 answer[index].classList.remove('isVisible')
        //             }else{
        //                 answer.forEach(( _ , index ) => {
        //                     answer[index].classList.remove('isVisible')
        //                 })
        //                 answer[index].classList.add('isVisible')
        //             }
                    
        //             icon[index].classList.toggle('isClicked')
        //         })
        //     })
        // })();




    
            
    



        