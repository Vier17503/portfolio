var typed = new Typed('.typing-1', {
    strings: ['Freelancer', 'Designer', ],
    smartBackspace: true,
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    loopCount: Infinity // Default value
});
var typed = new Typed('.typing-2', {
    strings: ['Freelancer', 'Designer', ],
    smartBackspace: true,
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    loopCount: Infinity // Default value
});

let text = document.getElementById('text');
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text.style.transform = `translateX(-${value*3}px)`
});