const burgerBtn = document.querySelector('.burger');
const popupHeader = document.querySelector('.header__right');
const closeBtn = document.querySelector('.close');

burgerBtn.addEventListener('click', () => {
    popupHeader.style.display = 'flex';
    closeBtn.style.display = 'block';
    burgerBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    popupHeader.style.display = 'none';
    closeBtn.style.display = 'none';
    burgerBtn.style.display = 'inline-block';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 670) {
        popupHeader.style.display = 'flex';
        closeBtn.style.display = 'none';
        burgerBtn.style.display = 'none';
    } else {
        popupHeader.style.display = 'none';
        closeBtn.style.display = 'none';
        burgerBtn.style.display = 'inline-block';
    }
});