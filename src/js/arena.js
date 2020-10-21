const elements = {
    themeImage: document.querySelector('.theme-image'),
    contentCover: document.querySelector('.content-cover'),
    content: document.querySelector('.content'),
    navigationMenu: document.querySelector('.navigation-menu'),
    header: document.querySelector('.header'),
    startButton: document.querySelector('.start-button'),
    resetButton: document.querySelector('.reset-button'),
    submitButton: document.querySelector('.submit-button'),
    gameArena: document.querySelector('.game-arena'),
    gameForm: document.querySelector('.gameForm'),
    gameInputFormList: document.querySelector('.game-input-form-list'),
}

let currLevel = 3;

const slideFromLeft = (el, el_margin=0) =>{
    el.style.marginLeft = el_margin;
}

const slideFromRight = (el, el_margin=0) =>{
    el.style.marginRight = el_margin;
}

const appear = el => {
    el.style.opacity = "1";
}

const displayThemeImage = el => {
    slideFromRight(elements.themeImage);
}

const displaycontentCover = () => {
    // slideFromRight(elements.mainPageContent);
    appear(elements.contentCover);
    appear(elements.navigationMenu);
    slideFromLeft(elements.header);
}

const init = () => {
    console.log('init');
    displayThemeImage();
    displaycontentCover();
}

const initGameArena = level => {

    currLevel = level;

    for(let i=1; i<=level; ++i){
        const markup = `<li id="game-input-${i}"><input class="game-input" type="text" placeholder='X'></li>`;

        elements.gameInputFormList.insertAdjacentHTML('beforeend',markup)
    }
}

const setUpGameArena = level => {
    // display game-arena
    elements.gameArena.classList.remove('hide');
    elements.gameArena.classList.add('display');

    // hide start button
    elements.startButton.classList.remove('display');
    elements.startButton.classList.add('hide');

    // display reset button, submit button
    elements.resetButton.classList.remove('hide');
    elements.resetButton.classList.add('display');

    elements.submitButton.classList.remove('hide');
    elements.submitButton.classList.add('display');

    initGameArena(level);

}

const getGameFormValues = () => {
    let values = []

    const els = Array.from(document.querySelectorAll('.game-input'));
    
    els.forEach((el, index) => {
        const v = parseInt(el.value);
        if(parseInt(v))
            values.push(v);
        else 
            return -1;
    });
    // console.log(values);
    return values;
}

const addingEventListners = () => {
    elements.startButton.addEventListener('click', ()=>{
        console.log("start");
        // hide content
        elements.content.classList.remove('display');
        elements.content.classList.add('hide');

        // set up arena
        setUpGameArena(3);
        
    });

    elements.resetButton.addEventListener('click', () => {
        elements.gameForm.reset();
    });

    elements.submitButton.addEventListener('click', () => {
        console.log('submit');
        // get input values
        const values = getGameFormValues();

        if(values.length < currLevel){
            alert("Invalid Values. Try Again.");
        }
        else{
            console.log(values);
        }

        // pass to judge, get result

        // display result status if won/lose

        // display hint
    });
}

addingEventListners();
init();

