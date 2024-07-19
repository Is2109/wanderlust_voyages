// Al principio creé un solo archivo Javascript para mi proyecto pero al final decidi tener un documento Javascript para cada "modulo".
// Esto porque index.html es la única página que usa todos los "modulos" de JS. Las demás páginas solo usan el menu hamburguesa y tenía 
// errores en la consola que decían que algunos elementos no se podían leer porque no existían.

// Cada "módulo" de mi javascript está dentro de una función anónima auto ejecutable IIFE
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