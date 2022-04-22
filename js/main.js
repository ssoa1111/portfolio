////////////////////모바일 탭 메뉴 클릭 이벤트
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

////////////////////모바일 탭 메뉴가 스크롤 내려야 보임
window.addEventListener('scroll',
    _.throttle(function(){
        if(window.scrollY > 150){
            gsap.to(menuButton, 0.1, {
            opacity : 1,
            display : 'block'
    });
        }else{
            gsap.to(menuButton, 0.1, {
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


////////////////////pc dot menu click, scroll
const menuSectionMove = document.querySelectorAll('.section_move');
const sectionPart = document.querySelectorAll('section');
menuSectionMove.forEach(function(item, index){
    item.addEventListener('click',()=>{

        // 스크롤 제어 없을 때 쓰면 됨
        // //클릭하면 전체 클래스 초기화
        // for(let k in menuSectionMove){
        //     menuSectionMove[k].classList.remove('active');
        // }
        // //클릭하면 해당 영역에 active 부여
        // menuSectionMove[index].classList.add('active');
        window.scrollTo(0,sectionPart[index].offsetTop);
    });

    window.addEventListener('scroll',()=>{
            // index가 마지막일 때 (==9 일 때)
            if(index == sectionPart.length-1){
                //index가 마지막 section top보다 클 때
                if(window.scrollY >= sectionPart[index].offsetTop){
                    menuSectionMove[index].classList.add('active');
                }else{
                    menuSectionMove[index].classList.remove('active');
                }
            }// index가 마지막이 아닐 때 범위를 section 위 아래로 top지정
            else{ 
                if(window.scrollY >= sectionPart[index].offsetTop && window.scrollY < sectionPart[index+1].offsetTop){
                    menuSectionMove[index].classList.add('active');
                }else{
                    menuSectionMove[index].classList.remove('active');
                }
            }
        }
    )
});
////////////////////mobile, tab 메뉴 클릭하면 해당 section 이동 // 모바일이라 메뉴가 5개임 //
const mobileMenuList = document.querySelectorAll('.menu .menu__contents ul li');
console.log(mobileMenuList);
mobileMenuList[0].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[0].offsetTop);
});
mobileMenuList[1].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[1].offsetTop);
});
mobileMenuList[2].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[3].offsetTop);
});
mobileMenuList[3].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[6].offsetTop);
});
mobileMenuList[4].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[9].offsetTop);
});




///////////////////pc hover page scroll
const pcImage = document.querySelectorAll('section .contents .contents__image .tab');
const divImage = document.querySelectorAll('section .contents .contents__image div');


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


///////////////////profile contact me modal
const openModal = document.querySelector('.profile .profile__site .open');
const closeModal1 = document.querySelector('.profile .contact__modal .modal__contents h5');
const closeModal2 = document.querySelector('.profile .contact__modal .modal__bg');
const modal = document.querySelector('.profile .contact__modal');
console.log(modal)
openModal.addEventListener('click', ()=>{
    modal.classList.remove('hidden');
});
closeModal1.addEventListener('click',()=>{
    modal.classList.add('hidden');
});
closeModal2.addEventListener('click',()=>{
    modal.classList.add('hidden');
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
