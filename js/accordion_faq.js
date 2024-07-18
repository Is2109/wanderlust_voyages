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
