# PORTPOLIO
wellcome my world!

## MOBILE, TAB화면 스크롤에 따른 MENU 나타나는 기능
Lodash와 Gsap을 이용하여 문서의 어느 위치 점을 스크롤이 지나면 메뉴가 나타납니다.
#### Lodash
array, collection, date 등 데이터의 필수적인 구조를    
쉽게 다룰 수 있게끔 하는데에 사용됩니다.    
ㅡ.(변수)으로 작성되며 lodash wrapper로 변수를 감싸게 되면서    
해당 변수에 대한 chaining을 시작합니다.    
>_.Throttle와 _.Debounce는 자주 사용되는 이벤트나 함수들이 실행되는 빈도를 줄여서,    
성능상의 유리함을 가져오기 위해 사용됩니다.    
_.Throttle는 입력 주기를 방해하지 않고, 일정시간동안의 입력을 모아서 한번씩 출력을 제한합니다.    
_.Debounce는 입력주기가 끝나면 출력됩니다.

[lodash CDN 확인하기](https://cdnjs.com/libraries/lodash.js)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
[Throttle 개념 알아보기](https://pks2974.medium.com/throttle-%EC%99%80-debounce-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-2335a9c426ff)


#### Gsap
복잡한 애니메이션을 구현할 때 사용합니다.    
[gsap CDN 확인하기](https://cdnjs.com/libraries/lodash.js)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

gsap.to(대상, 속성)함수로 애니메이션을 작성하였습니다.    
[gsap의 더 많은 프로퍼티 확인하기](https://greensock.com/docs/v3/GSAP/gsap.to())


## PC의 닷 메뉴와 스크롤 이동
forEach문을 이용하여 전체의 section에 이벤트를 부여하고 window의 스크롤 이벤트를 발생시켰습니다.
>forEach    
배열의 길이만큼 함수를 반복합니다.    
배열.forEach(function(item, index, arr){})

### 스크롤 구현
scroll이벤트를 통해 현재의 위치가 어느 인덱스에 위치하는지 알아냅니다.    
해당 section의 offsetTop보다 크며 그 다음의 section의 offsetTop보다 작으면 해당 닷메뉴의 부분에 클래스가 부여됩니다.
```javascript
if(window.scrollY >= sectionPart[index].offsetTop && window.scrollY < sectionPart[index+1].offsetTop){
    menuSectionMove[index].classList.add('active');
}else{
    menuSectionMove[index].classList.remove('active');
}
```
이렇게 하면 적용이 잘 되지만 마지막 section은 다음 section이 없기 때문에 해당 함수를 사용할 수 없습니다.     
```javascript
//index가 마지막 section top보다 클 때
if(window.scrollY >= sectionPart[index].offsetTop){
    menuSectionMove[index].classList.add('active');
}else{
    menuSectionMove[index].classList.remove('active');
}
```
마지막 section과 전체 section에 각각 해당하는 함수를 실행하기 위해 조건문을 추가했습니다.
```javascript
window.addEventListener('scroll',()=>{
    // index가 마지막일 때 (==9 일 때)
    if(index == sectionPart.length-1){
        /index가 마지막 section top보다 클 때
        if(window.scrollY >= sectionPart[index].offsetTop){
            enuSectionMove[index].classList.add('active');
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
})
```
### 클릭하면 해당 section으로 이동
스크롤이 이동하면 닷 메뉴가 활성화 되었으니    
window.scrollTo(x,y)를 통해 간단하게 구현하였습니다.
```javascript
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
```


## intro부분의 string animation
두 개의 변수를 만들어서 하나는 텍스트를 출력할 공간을 변수로 만들었고 하나는 출력할 텍스트를 담아 둘 변수를 만들었습니다.    
함수를 하나 만들어서 입력된 텍스트가 하나씩 나타날 수 있도록 만들었습니다.
```javascript
const textShowFnc = (item, text, time) => {
    setTimeout(() => {
        item.innerHTML += text;
    }, 100 * time);
};
```
item자리에는 텍스트를 출력할 공간이며 text에는 출력한 텍스트가 한글자씩 들어갈 것이며 time에는 지연시간을 늘려 글자가 순차적으로 나오는 기능을 할 것입니다.    
출력할 텍스트는 배열 내에 string으로 존재하며 각각 [0], [1]이 차례로 출력되어야 합니다.    
for( props in arr)함수를 이용하였습니다.    
```javascript
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
```
string은 배열로써도 작동할 수 있습니다. 예를 들어 texts[0][0]은 'H'라는 값을 가지고 있습니다.    
texts[0]의 먼저 작동하여 내용을 모두 출력하면 texts[1]이 작동하여 내용물을 출력하게 됩니다.



## intro부분의 button이벤트
button을 hover하면 다양한 효과가 나타납니다. hover하면 버튼에는 'active'라는 클래스가 주어지고 'active'라는 클래스 값이 정말로 포함이 되어있는지 확인 후 이벤트가 나타나게 됩니다.    
이벤트는 setTimeout의 시간 지연을 통해 각각 'active'클래스가 주어지며 이벤트가 발생하게 됩니다. animation은 keyframes로 구현하였습니다.
```css
@keyframes move{
    0%{top: -80%; left: 30%; width: 0px;}
    50%{top: -40%; left: -10%; width: 150px; transform: skew(20deg);}
    100%{}
}
```

## Responsive부분의 tab, pc일때 호버 이벤트
hover라는 것은 PC에만 해당하지만 PC에서 화면을 줄였을 때도 작동해야 하므로 tab의 환경에서도 작동하도록 적용하였습니다.    
div안에 이미지가 있으며 overflow : hidden의 상태이기에 div의 높이만큼만 현재 이미지가 보여지고 있습니다.
```html
<div><img src=""></div>
```
forEach문을 활용하여 PC형 페이지에 순차적으로 모두 같은 이벤트가 적용되게 하였습니다.    
또한 이미지의 상단은 div의 상단과 일치해야 하므로 값을 초기화 하였습니다.
```javascript
item.style.top = 0;
```

이미지의 높이가 각각 다르기 때문에 이미지의 하단까지 도달하려면 각각의 이미지의 높이를 가져와서 활용했습니다.    
이미지의 높이에서 div높이를 제외한다면 hidden된 높이가 나오며 그 값만큼 위로 이동하면 각각의 이미지의 하단까지 볼 수 있습니다.
```javascript
item.style.top = divImage[index].offsetHeight-item.offsetHeight + 'px';
```
top의 값이 -이기 때문에 이미지는 위로 올라가게 됩니다. 호버하자마자 맨 하단까지 이동하지 않고 천천히 이동시키기 위해서 duration 속성을 이용하였습니다.
```javascript
item.style.transitionDuration = 30 + 's';
```
leave가 되면 top값이 0이 되게 하면 duration의 효과로 천천히 아래로 내려가게 됩니다.
```javascript
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
```


## Scrollmagic이라는 플러그인을 사용하여 스크롤에 따라 contents의 내용이 자연스럽게 나타나게 하였습니다.
#### Scrollmagic
스크롤에 따른 애니메이션을 구현할 때 사용합니다.    
[scrollmagic CDN 확인하기](https://scrollmagic.io/)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"
integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

```javascript
new ScrollMagic.Scene({
triggerElement : 요소, //스크롤 애니메이션 시작 지점 설정
}) 
.addTo(new ScrollMagic.Controller());
```