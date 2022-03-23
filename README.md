## Starbucks Coffee Korea
![스타벅스 이미지](https://chjhhh.github.io/Starbucks-Coffee-Korea/images/logo.png)

## Favicon(파비콘, favorites icon)
웹페이지를 나타내는 아이콘으로 웹페이지의 로고를 설정한다.
```html
<link rel="shortcut icon" href="favicon.ico" /> 
<link rel="icon" href="./favicon.png" />
```
favicon.ico 64 x 64, 32 x 32, 16 x 16(px)   
favicon.png 500 x 500(px)

## 구글 meterial icon
해당 링크를 연결해 구글의 meterial icon을 사용할 수 있다.
```css
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## gsap
gsap으로 애니메이션을 제어할 수 있다.   
스타벅스를 들어가면 메인 화면에서 차례로 이미지가 보여질 때 사용하였고 scroll이 긴 홈페이지에서 top 버튼을 사용할 때 부드럽게 올라가도록 제어해줄 수 있다.   
```css
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
>ex javascript
```javascript
// main section 순차적 등장
const fadeEl = document.querySelectorAll('.main-section .fade-in');
fadeEl.forEach(function(fadeEl, index){
    // gsap문법 -> gsap.to(요소, 지속시간초단위, 옵션)
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
        opacity : 1
    })
});
```

## Scroll Magic
상하좌우에서 나타나는 애니메이션을 Scroll Magic으로 제어할 수 있다.   
감지할 부분, 움직이는 부분에 class, id 등 부여해주고 아래와 같이 css와 javascript로 제어한다.
```css
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
>ex css
```css
/* spy */
.back-to-position{
    opacity: 0;
    transition: 1s;
}
.back-to-position.to-right{
    transform: translateX(-100px);
}
.back-to-position.to-left{
    transform: translateX(100px);
}
.show .back-to-position{
    opacity: 1;
    transform: translateX(0);
}
```
>ex javascript
```javascript
// Magic Scroll--------
const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function(spyEl){
    new ScrollMagic.Scene({ // ScrollMagic 객체 생성
        triggerElement : spyEl, //보여질 부분 감지할 요소 지정
        triggerHook : 0.7, // 0.7초동안 실행
    })
    // 토글할 요소
    // .setClassToggle(토글할 요소, class이름 생성)
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
```

## Swiper Slider
터치가 가능한 슬라이드이다.
>css
```css
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```
>html
```html
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```
>swiper option
```javascript
new Swiper('변경 .swiper', {
    direction: 'horizontal', // 방향
    loop: true, //무한반복
    autoplay : true, // 자동시작
    slidesPerView: 5, // 한 번에 보여지는 슬라이드 개수
    spaceBetween: 30, // 슬라이드와 슬라이드 간격
    navigation : {
        prevEl : "변경 .swiper-prev",
        nextEl : "변경 .swiper-next"
    },
    breakpoints: { //반응형 조건 속성
    320: { // 320 이상일 경우
      slidesPerView: 1, //레이아웃 1열
    },
    768: {
      slidesPerView: 3, //레이아웃 3열
    },
    1024: {
      slidesPerView: 4, //레이아웃 4열
    },
  }
});
```
