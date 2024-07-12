// Creé un solo archivo javascript para mi proyecto. 
// Cada "módulo" de mi javascript está dentro de una función anónima auto ejecutable, 
// por lo que puedo agrupar cada "módulo" por separado y javascript solo ejecutará el código si ese "modulo" existe. 
// Esto hará que la página sea más eficiente.

// MENU HAMBURGUESA RESPONSIVE

    // Cuando hago CLICK en .Header-button
        // Al .Header-nav le hace un TOGGLE de la clase isVisible

        (() => {

        const headerButton = document.querySelector('.Header-button')
        const headerNav = document.querySelector('.Header-nav')

        headerButton.addEventListener('click' , () => {
            headerNav.classList.toggle('isVisible')
        })

        })();
        
        

// CAROUSEL POPULAR DESTINATIONS

    // Cuando hago click en .Main-carouselDot (cada punto)
        // Conocer la posición del punto
        // .Main.carouselContainer hace un translateX
        // REMOVE la clase .isClicked a todos los puntos
        // ADD la clase .isClicked al punto que esta "clicado"
        
        (()=>{

        const carouselDot = document.querySelectorAll('.Main-carouselDot')
        const carouselContainer = document.querySelector('.Main-carouselContainer')

        // Verificar si los elementos existen
        if(carouselDot){

            carouselDot.forEach(( _ , index) =>{
                carouselDot[index].addEventListener('click' , ()=>{
            
                    let counter = index
                    let operation = counter * -50
            
                    carouselContainer.style.transform = `translateX(${operation}%)`
            
                    carouselDot.forEach(( _ , index ) =>{
                        carouselDot[index].classList.remove('isClicked')
                    })
            
                    carouselDot[index].classList.add('isClicked')
            
                })
            })
        }
        })();

    
// CLIENT REVIEWS CAROUSEL

    // Cuando hago click en .Main-carouselReviewsDot (cada punto)
        // Conocer la posición del punto
        // .Main.carouselReviewsContainer hace un translateX
        // REMOVE la clase .isClicked a todos los puntos
        // ADD la clase .isClicked al punto que esta "clicado"

        (() => {

        const carouselReviewsDot = document.querySelectorAll('.Main-carouselReviewsDot')
        const carouselReviewsContainer = document.querySelector('.Main-carouselReviewsContainer')
        
        if(carouselReviewsContainer){

            carouselReviewsDot.forEach(( _ , index) =>{
                carouselReviewsDot[index].addEventListener('click' , ()=>{
            
                    let counter = index
                    let operation = counter * ( -100 / 3 )
            
                    carouselReviewsContainer.style.transform = `translateX(${operation}%)`
            
                    carouselReviewsDot.forEach(( _ , index ) =>{
                        carouselReviewsDot[index].classList.remove('isClicked')
                    })
            
                    carouselReviewsDot[index].classList.add('isClicked')
            
                })
            })
        }
        })();


// ACORDEON PREGUNTAS PRECUENTES

    // Cuando hago CLICK en .Main-accordionBlock
        // REMOVE todas las clases .isClicked a .Main-accordionIcon
        // REMOVE todas las clases .isVisible a .Main-p--accordion
        // ADD la clase .isClicked a .Main-accordionIcon (de acuerdo con su index) - esto hace que el icono hace un rotate de 180deg
        // ADD la clase .isVisible a .Main-p--accordion (de acuerdo con su index) - esto hace que se vea la respuesta


        (() => {

            const block = document.querySelectorAll('.Main-accordionBlock')
            const answer = document.querySelectorAll('.Main-p--accordion')
            const icon = document.querySelectorAll('.Main-accordionIcon')
        
            block.forEach(( _ , index ) =>{
                block[index].addEventListener('click' , () => {
            
                    if(answer[index].classList.contains('isVisible')){
                        answer[index].classList.remove('isVisible')
                    }else{
                        answer.forEach(( _ , index ) => {
                            answer[index].classList.remove('isVisible')
                        })
                        answer[index].classList.add('isVisible')
                    }
                    
                    icon[index].classList.toggle('isClicked')
                })
            })
        })();
            
    



        