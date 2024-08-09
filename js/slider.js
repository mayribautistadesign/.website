(function(){
    
    const sliders = [...document.querySelectorAll('.models__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentModels = document.querySelector('.models__body--show').dataset.id;
        value = Number(currentModels);
        value+= add;


        sliders[Number(currentModels)-1].classList.remove('models__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('models__body--show');

    }

})();