// CAROUSEL POPULAR DESTINATIONS 3 CARDS (PANTALLAS GRANDES)

    // Cuando hago click en .Main-carouselDot (cada punto)
        // Conocer la posición del punto
        // .Main.carouselContainer hace un translateX
        // REMOVE la clase .isClicked a todos los puntos
        // ADD la clase .isClicked al punto que esta "clicado"

(() => {

const carouselDot = document.querySelectorAll('.Main-carouselDot')
const carouselContainer = document.querySelector('.Main-carouselContainer')

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

// CAROUSEL POPULAR DESTINATIONS 2 CARDS (TABLET)


(() => {

const carouselDot = document.querySelectorAll('.Main-carouselDot')
const carouselContainer = document.querySelector('.Main-carouselContainer')
const carouselDotTablet = document.querySelector('.Main-carouselDot Main-carouselDot--tablet')

    if(carouselDotTablet){

        carouselDot.forEach(( _ , index) =>{
            carouselDot[index].addEventListener('click' , ()=>{
        
                let counter = index
                let operation = counter * -33.3
        
                carouselContainer.style.transform = `translateX(${operation}%)`
        
                carouselDot.forEach(( _ , index ) =>{
                    carouselDot[index].classList.remove('isClicked')
                })
        
                carouselDot[index].classList.add('isClicked')
        
            })
        })
    
    }

})();

// CAROUSEL POPULAR DESTINATIONS 1 CARD (MOBILE)


(() => {

    const carouselDot = document.querySelectorAll('.Main-carouselDot')
    const carouselContainer = document.querySelector('.Main-carouselContainer')
    const carouselDotMobile = document.querySelector('.Main-carouselDot Main-carouselDot--mobile')
    
        if(carouselDotMobile){
    
            carouselDot.forEach(( _ , index) =>{
                carouselDot[index].addEventListener('click' , ()=>{
            
                    let counter = index
                    let operation = counter * -16.6
            
                    carouselContainer.style.transform = `translateX(${operation}%)`
            
                    carouselDot.forEach(( _ , index ) =>{
                        carouselDot[index].classList.remove('isClicked')
                    })
            
                    carouselDot[index].classList.add('isClicked')
            
                })
            })
        
        }
    
    })();




