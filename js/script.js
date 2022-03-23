// search 버튼 제어
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchInputEl.setAttribute("placeholder", '통합검색');
});
searchInputEl.addEventListener('blur',function(){
    searchInputEl.setAttribute("placeholder", '');
});

// main section 순차적 등장
const fadeEl = document.querySelectorAll('.main-section .fade-in');
fadeEl.forEach(function(fadeEl, index){
    // gsap문법 -> gsap.to(요소, 지속시간초단위, 옵션)
    gsap.to(fadeEl, 1, {
        delay : (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
        opacity : 1
    })
});

// 공지사항 swiper slider
new Swiper('.notice .swiper', {
    direction: 'vertical',
    loop: true,
    autoplay : true
});

//------------------promoiton swiper slider---------------------
new Swiper('.promotion-slide .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 5000
    },
    pagination : {
        el : ".promotion-slide .swiper-pagination",
        clickable : true
    },
    navigation : {
        prevEl : ".promotion-slide .swiper-button-prev",
        nextEl : ".promotion-slide .swiper-button-next"
    },
    slidesPerView : 3, //한 번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides : true //1번 슬라이드가 가운데 보이기
});

//promoiton toggle btn--------
const promotionEl = document.querySelector('.promotion-slide'); //슬라이드 영역 요소 검색
const promotionToggleBtn = document.querySelector('.promotion-btn'); //슬라이드영역을 토글할 버튼 검색

//슬라이드 영역 숨김 여부에 관한 기본값 설정
let isHidePromotion = false;

//토글버튼을 클릭하면 
promotionToggleBtn.addEventListener('click', function(){
    //슬라이드 영역 숨기 여부를 반대값
    isHidePromotion = !isHidePromotion; // 부정!을 써서 현재 isHidePromotion -> 참

    if(isHidePromotion){
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});

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

// 올해 연도 구하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();