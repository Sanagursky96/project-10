const goTopBtn = document.querySelector('.go-top');

goTopBtn.addEventListener("click", goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (offset > coords) {
        goTopBtn.classList.add("go-top--active");
    } else {
        goTopBtn.classList.remove("go-top--active");
    }
}


function goTop () {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -95);
        setTimeout(goTop, 0); 
    }
}
