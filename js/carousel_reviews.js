// CLIENT REVIEWS CAROUSEL

    // Cuando hago click en .Main-carouselReviewsDot (cada punto)
        // Conocer la posición del punto
        // .Main.carouselReviewsContainer hace un translateX
        // REMOVE la clase .isClicked a todos los puntos
        // ADD la clase .isClicked al punto que esta "clicado"

const carouselReviewsDot = document.querySelectorAll('.Main-carouselReviewsDot')
const carouselReviewsContainer = document.querySelector('.Main-carouselReviewsContainer')

console.log(carouselReviewsDot)
console.log(carouselReviewsContainer)

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

