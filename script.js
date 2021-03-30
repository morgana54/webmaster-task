const checkLabel = document.getElementById('check');
const headerList = document.querySelector('.hero__navbar__list');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

window.addEventListener('click', () => {
    if(checkLabel.checked) {
        headerList.style.left = '0';    
    } else {
        headerList.style.left = '-100%';
    }
})
