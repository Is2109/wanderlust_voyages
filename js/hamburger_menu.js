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