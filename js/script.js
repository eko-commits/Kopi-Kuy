const baris = document.querySelector('.baris');
document.querySelector('#hamburger-menu').onclick = () => {
    baris.classList.toggle('active');
}

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !baris.contains(e.target)) {
        baris.classList.remove('active');
    }
})