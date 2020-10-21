console.log("js");

const elements = {
    themeImage: document.querySelector('.theme-image'),
    mainPageContent: document.querySelector('.content-cover'),
    navigationMenu: document.querySelector('.navigation-menu'),
    header: document.querySelector('.header'),
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
    slideFromLeft(elements.themeImage);
}

const displayMainPageContent = () => {
    // slideFromRight(elements.mainPageContent);
    appear(elements.mainPageContent);
    appear(elements.navigationMenu);
    slideFromRight(elements.header);
}
const init = () => {
    console.log('init');
    displayThemeImage();
    displayMainPageContent();
}

init();

