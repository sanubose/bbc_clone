const cardWrapper = document.querySelector('.card-wrapper');
let offset = 0;

function slideRight() {
    const maxOffset = -(cardWrapper.scrollWidth - cardWrapper.parentElement.offsetWidth);
    if (offset > maxOffset) {
        offset -= 210;
        if (offset < maxOffset) offset = maxOffset;
        cardWrapper.style.transform = `translateX(${offset}px)`;
    }
}

function slideLeft() {
    if (offset < 0) {
        offset += 210;
        if (offset > 0) offset = 0;
        cardWrapper.style.transform = `translateX(${offset}px)`;
    }
}