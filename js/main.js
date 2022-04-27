// js의 자세한 내용은 readme.md에 작성이 되어 있습니다.

////////////////////모바일 탭 메뉴 클릭 이벤트
// 클릭할 메뉴버튼
const menuButton = document.querySelector('.menu ');
// 클릭하면 메뉴버튼의 이미지를 변경시키기 위함
const menuButtonImg = document.querySelectorAll('.menu .menu__button > img');
// 클릭하면 메뉴 리스크 보임
const menuContents = document.querySelector('.menu .menu__contents');
let toggle = false;
menuButton.addEventListener('click',()=>{
    toggle = !toggle;
    if(toggle){
        menuButtonImg[1].classList.remove('hidden');
        menuButtonImg[0].classList.add('hidden');
        // 0번이미지 숨기고 1번이미지 보이게
        menuContents.classList.add('active');
        // 메뉴리스트 보이게
    }else{
        menuButtonImg[0].classList.remove('hidden');
        menuButtonImg[1].classList.add('hidden');
        // 1번이미지 숨기고 0번이미지 보이게
        menuContents.classList.remove('active');
        // 메뉴리스트 안 보이게
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
        // 일정 시간 지나면 item HTML자리에 text가 들어갈 것임
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
// im ready 버튼
const clickEvent = document.querySelector('.text_second');
// ufo 이미지
const ufoImage = document.querySelector('.ufo_img');
// light 이미지
const ufoLight = document.querySelector('.intro .ufo_img .light');
// person 이미지
const ufoPerson = document.querySelector('.intro .ufo_img .person');
// 하단 스크롤 용 icon
const arrow = document.querySelector('.intro .material-icons');

// 버튼 호버
clickEvent.addEventListener('mouseenter',()=>{
    // 버튼에 active 부여
    ufoImage.classList.add('active');
    // 버튼에 active가 잘 부여되었는지 확인
    if(ufoImage.classList.contains('active')){
        // 순차적으로 클래스 지정하여 css에서 애니메이션 처리
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
// 닷 메뉴 다 받음
const menuSectionMove = document.querySelectorAll('.section_move');
// 전체 section 다 받음
const sectionPart = document.querySelectorAll('section');
// for each문으로 닷 메뉴 모두 이벤트 적용
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
// home으로 이동
mobileMenuList[0].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[0].offsetTop);
});
// react로 이동
mobileMenuList[1].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[1].offsetTop);
});
// javscript로 이동
mobileMenuList[2].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[3].offsetTop);
});
// web으로 이동
mobileMenuList[3].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[6].offsetTop);
});
// profile로 이동
mobileMenuList[4].addEventListener('click',()=>{
    window.scrollTo(0,sectionPart[9].offsetTop);
});




///////////////////pc hover page scroll
// 실제 이미지
const pcImage = document.querySelectorAll('section .contents .contents__image .tab');
// overflow : hidden속성 가진 div
const divImage = document.querySelectorAll('section .contents .contents__image div');

pcImage.forEach((item, index) => {
    // 모든 이미지의 top 초기화
    item.style.top = 0;
    item.addEventListener('mouseenter',()=>{
        // 현재의 div높이(이미지가 보여지는 부분) - 이미지의 전체 높이 = 이미지가 overflow:hidden된 높이
        item.style.top = divImage[index].offsetHeight-item.offsetHeight + 'px';
        // 없으면 바로 아래까지 이동함, 천천히 이동하기 위함
        item.style.transitionDuration = 30 + 's';
    });
    item.addEventListener('mouseleave',()=>{
        item.style.top = 0;
        item.style.transitionDuration = 10 + 's';
    });
});


///////////////////profile contact me modal
// contact me 버튼
const openModal = document.querySelector('.profile .profile__site .open');
// 팝업창 h5 텍스트 (닫기버튼은 아님)
const closeModal1 = document.querySelector('.profile .contact__modal .modal__contents h5');
// 팝업창 배경
const closeModal2 = document.querySelector('.profile .contact__modal .modal__bg');
// 팝업창
const modal = document.querySelector('.profile .contact__modal');

// ontact me 버튼 누르면 팝업창 보임
openModal.addEventListener('click', ()=>{
    modal.classList.remove('hidden');
});
// 팝업창 배경, h5 텍스트를 누르면 팝업창 닫힘
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
