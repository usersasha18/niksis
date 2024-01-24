document.addEventListener('DOMContentLoaded' , function() {

    const sliderButtonsContaier = document.querySelector('.sliderButtons');
    const sliderButtons = sliderButtonsContaier.querySelectorAll('[data-id]');


     sliderButtons.forEach((element) =>{
        element.addEventListener('click', (event) => {
            
            const sliderRow = document.querySelector('.slider-row');
            const slides = sliderRow.querySelectorAll('.slide');
            let data;
            for(data of slides) {
                if (event.target.dataset.id === data.dataset.id) {
                    data.classList.add('active');
                }
                else {
                    data.classList.remove('active');
                }
            }
        })
     });

});