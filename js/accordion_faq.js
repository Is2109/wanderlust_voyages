/* FAQ ACCORDION */

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



// console.log(block)
// console.log(answer)
// console.log(icon)

// Cuando hago CLICK en .Main-accordionBlock
    // REMOVE todas las clases .isClicked a .Main-accordionIcon
    // REMOVE todas las clases .isVisible a .Main-pSection--left
    // ADD la clase .isClicked a .Main-accordionIcon (de acuerdo con su index) - esto hace que el icono hace un rotate de 180deg
    // ADD la clase .isVisible a .Main-pSection--left (de acuerdo con su index) - esto hace que se vea la respuesta



// block.forEach(( _ , index ) =>{
//     block[index].addEventListener('click' , () => {

//         icon[index].classList.toggle('isClicked')
//         answer[index].classList.toggle('isVisible')
//     })  
// })

// block.forEach((_ , index) => {
//     block[index].addEventListener('click' , () => {
    
//     icon.forEach((_ , index) => {
//         icon[index].classList.remove('isClicked')
//     })

//     answer.forEach((_ , index) => {
//         answer[index].classList.remove('isVisible')
//     })

//     icon[index].classList.add('isClicked')
//     answer[index].classList.add('isVisible')

//     })
// })


