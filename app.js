// preloader 
const wrapper = document.getElementById('loader-wrapper');

setTimeout(() => {
    handleLoaded();
    handleLoaderDisplay();
}, 3000)

const handleLoaded = () => {
    wrapper.style.opacity = '0';
}

const handleLoaderDisplay = () => {
        setTimeout(() => {
            wrapper.style.display = 'none';
        }, 500)
    }
    // end of preloader




var typed = new Typed('.typing-1', {
    strings: ['Freelancer', 'Designer', ],
    smartBackspace: true,
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    loopCount: Infinity // Default value
});


let text = document.getElementById('text');
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text.style.transform = `translateX(-${value*3}px)`
});