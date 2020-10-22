const elements = {
    themeImage: document.querySelector('.theme-image'),
    contentCover: document.querySelector('.content-cover'),
    content: document.querySelector('.content'),
    navigationMenu: document.querySelector('.navigation-menu'),
    header: document.querySelector('.header'),
    startButton: document.querySelector('.start-button'),
    resetButton: document.querySelector('.reset-button'),
    playAgainButton: document.querySelector('.play-again-button'),
    submitButton: document.querySelector('.submit-button'),
    gameArena: document.querySelector('.game-arena'),
    gameForm: document.querySelector('.gameForm'),
    gameInputFormList: document.querySelector('.game-input-form-list'),
    correctAns: document.querySelector('.correct-ans')
}

const gameStats = {
    gameLevel:1,
    gameScore:0,
    gameChance:0,
}
let gameCode = [];
let limit = 6;

const remove = el => {
    el.style.display = 'none';
}
const show = (el, display='inline-block') => {
    el.style.display = display;
}
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
    displayThemeImage();
    displaycontentCover();
    remove(elements.playAgainButton);
}

const updateStats = () => {
    
    // const gameNum = document.querySelector('.num');
    const gameScore = document.querySelector('.score');
    const gameLevel = document.querySelector('.level');
    const gameChance = document.querySelector('.chance');

    // gameNum.textContent = gameStats.gameNum;
    gameScore.textContent = gameStats.gameScore;
    gameLevel.textContent = gameStats.gameLevel;
    gameChance.textContent = gameStats.gameChance;

}

const showCorrectAns = () => {
    
    elements.correctAns.innerHTML = '';

    for(let i=1; i<=limit - gameStats.gameLevel; ++i){
        const markup = `<li>${gameCode[i-1]}</li>`;

        elements.correctAns.insertAdjacentHTML('beforeend',markup);
    }
}
const initGameArena = () => {

    elements.gameInputFormList.innerHTML = '';

    if(gameStats.gameLevel > limit-1){
        alert("You have completed all levels! Share this game with you friends and let them enjoy too!");
        window.location = "index.html"
    }
    for(let i=1; i<=limit - gameStats.gameLevel; ++i){
        const markup = `<li id="game-input-${i}"><input maxlength=1 class="game-input" type="text" placeholder='X'></li>`;

        elements.gameInputFormList.insertAdjacentHTML('beforeend',markup)

        if(i == 1){
            document.querySelector('.game-input').focus();
        }

    }
    updateStats();

}



const setUpGameArena = () => {
    // display game-arena
    elements.gameArena.classList.remove('hide');
    elements.gameArena.classList.add('display');

    initGameArena();

}

const getGameFormValues = () => {
    let values = []

    const els = Array.from(document.querySelectorAll('.game-input'));
    
    els.forEach((el, index) => {
        const v = parseInt(el.value);
        if(v >= 0 && v <= 9)
            values.push(v);
        else 
            return -1;
    });

    return values;
}

const generateCode = () => {
    gameCode = [];

    while(gameCode.length < limit - gameStats.gameLevel){
        const code = parseInt(Math.random()*(9)+0);
        const temp = gameCode.find(el => el == code);
        if(!temp){
            gameCode.push(code);
        }
    }

    // display message
    setTimeout(()=>alert("Code has been generated. You shall begin!"), 500);
}

const validateGameInput = gameInput => {
    const result = []

    let i=0;

    gameInput.forEach((el, index) => {
        if(el === gameCode[index]){
            result.push(1);
            i++;
        }
        else if(gameCode.find(num => num === el)){
            result.push(-1);
        }
        else result.push(0);
    });

    
    if(i == gameCode.length) result.push(100);

    return result;
}

const displayHints = result => {
    result.forEach((el, index) => {
        const element = document.querySelector(`#game-input-${index+1}`);
        
        element.classList.remove(...element.classList);

        if(el === 0){
            element.classList.add('incorrect');    
        }
        else if(el === 1){
            element.classList.add('correct');    
        }
        else{
            element.classList.add('partially-correct');    
        }
    });
}

const submitEvent = () => {

        // get input values
        const values = getGameFormValues();

        gameStats.gameChance += 1;
        
        updateStats();

        if(values.length < limit - gameStats.gameLevel){
            if(gameStats.gameChance == limit - gameStats.gameLevel){
                alert("You are not the one! YET."); 
                gameStats.gameScore = 0;
                gameStats.gameLevel = 1;
                gameStats.gameChance = 0;
                initGameArena();
            }
            else
                alert("Invalid Values. Try Again.");
        }
        else{
            const result = validateGameInput(values);
        
            if(result.length > gameCode.length){
                // display win message
                alert("You won!");
                gameStats.gameChance = 0;
                gameStats.gameLevel += 1;
                gameStats.gameScore += 10;
                initGameArena();

                generateCode();
                console.log(gameCode);
            }
            else{
                if(gameStats.gameChance == limit - gameStats.gameLevel){
                    alert("You are not the one! YET.");
                    gameStats.gameChance = 0;
        
                    remove(elements.resetButton);
                    remove(elements.submitButton);
                    show(elements.playAgainButton);

                    // display correct ans
                    showCorrectAns();
                }
                else{
                    alert("Try Again.");

                    // display hints
                    displayHints(result);
                }
                    
            }
    
        }

        // pass to judge, get result

        // display result status if won/lose

        // display hint

        // initGameArena();
}

const playAgainEvent = () =>{
    generateCode();
        initGameArena();
        remove(elements.playAgainButton);
        show(elements.submitButton);
        show(elements.resetButton);
        remove(elements.correctAns);
}
const addingEventListners = () => {
    
    elements.startButton.addEventListener('click', ()=>{
        // console.log("start");
        // hide content
        elements.content.classList.remove('display');
        elements.content.classList.add('hide');

        // set up arena
        setUpGameArena();

        // generateCode
        generateCode();
        console.log(`code: `)
        console.log(gameCode);
    });

    elements.resetButton.addEventListener('click', () => {
        elements.gameForm.reset();
    });

    elements.submitButton.addEventListener('click', () => {
       submitEvent();
    });

    elements.playAgainButton.addEventListener('click', () => {
        playAgainEvent();
    });

    document.addEventListener('keypress', (event)=>{ 
        if(event.code === 'Enter'){
            if (window.getComputedStyle(elements.playAgainButton, null).getPropertyValue("display") === 'none'){
                submitEvent();
            }
            else playAgainEvent();
        }
    }); 
}

addingEventListners();
init();

