const menuButton = document.querySelector('.menu ');
const menuButtonImg = document.querySelectorAll('.menu .menu__button > img');
const menuContents = document.querySelector('.menu .menu__contents');
let toggle = false;
menuButton.addEventListener('click',()=>{
    toggle = !toggle;
    if(toggle){
        menuButtonImg[1].classList.remove('hidden');
        menuButtonImg[0].classList.add('hidden');
        menuContents.classList.add('active');
    }else{
        menuButtonImg[0].classList.remove('hidden');
        menuButtonImg[1].classList.add('hidden');
        menuContents.classList.remove('active');
    }
});
window.addEventListener('scroll',
    _.throttle(function(){
        if(window.scrollY > 100){
            gsap.to(menuButton, 0.3, {
            opacity : 1,
            display : 'block'
    });
        }else{
            gsap.to(menuButton, 0.3, {
            opacity : 0,
            display : 'none'
    });
        }
    },300)
);



/////////////////////intro string move
const textShowFnc = (item, text, time) => {
    setTimeout(() => {
        item.innerHTML += text;
    }, 100 * time);
};

const items = document.querySelectorAll('.event-text');
// const texts = ['HELLO WORLD', 'do you ready to explore my world?', 'Im ready'];
const texts = ['HELLO WORLD', 'do you ready to explore my world?'];
let n = 0;
for(index in texts) {
    //for(index=0; index<text.length; index++)
    for(i in texts[index]) {
        //for(i=0; i<text[index].length; i++)
        textShowFnc(items[index], texts[index][i], n);
        n += 1;
    }
};

////////////////////intro image event
const clickEvent = document.querySelector('.text_second');
const ufoImage = document.querySelector('.ufo_img');
const ufoLight = document.querySelector('.intro .ufo_img .light');
const ufoPerson = document.querySelector('.intro .ufo_img .person');
const arrow = document.querySelector('.intro .material-icons');

clickEvent.addEventListener('mouseenter',()=>{
    ufoImage.classList.add('active');
    if(ufoImage.classList.contains('active')){
        setTimeout(() => {
            ufoLight.classList.add('active');
        }, 2500);
        setTimeout(() => {
            ufoPerson.classList.add('active');
        }, 3000);
        setTimeout(() => {
            arrow.style.display = "block";
        }, 5000);
    }
});


const menuSectionMove = document.querySelectorAll('.section_move');
const menuDivMove = document.querySelector('.div_move');
const sectionPart = document.querySelectorAll('section');
const divPart = document.querySelector('.intro');
menuSectionMove.forEach(function(item, index){
    item.addEventListener('click',()=>{
        for(let k = 0; k <menuSectionMove.length; k++){
            menuSectionMove[k].classList.remove('active');
        }
        menuDivMove.classList.remove('active');
        
        menuSectionMove[index].classList.add('active');
        window.scrollTo(0,sectionPart[index].offsetTop);
    });
});
menuDivMove.addEventListener('click', ()=>{
    for(let k = 0; k <menuSectionMove.length; k++){
        menuSectionMove[k].classList.remove('active');
    }
    menuDivMove.classList.add('active');
    window.scrollTo(0,divPart.offsetTop);
})



///////////////////pc hover page scroll
const pcImage = document.querySelectorAll('section .contents .contents__image .tab');
const divImage = document.querySelectorAll('section .contents .contents__image div');

const timeOut = (item, num, time)=>{
    setTimeout(()=>{
        item.style.top = num + 'px';
    },100*time)
}
pcImage.forEach((item, index) => {
    item.style.top = 0;
    item.addEventListener('mouseenter',()=>{
        item.style.top = divImage[index].offsetHeight-item.offsetHeight + 'px';
        item.style.transitionDuration = 30 + 's';
    });
    item.addEventListener('mouseleave',()=>{
        item.style.top = 0;
        item.style.transitionDuration = 10 + 's';
    });
});


//Masgic Scroll------------------------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
       triggerElement: spyEl,
        triggerHook: 0.8,
     })   
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
