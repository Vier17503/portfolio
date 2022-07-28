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

$('.iconM-testimonials').on('click', function() {
    $("#colorscreen").removeClass("fadeInUpBig").addClass("fadeInUpBig");
    $('.fadeInUpBig').css('background-color', 'rgba(164, 196, 0, 0.2)');
    $(".tile-group.main").css({ marginLeft: "-40px", width: "1080px" }).load("musability-musictherapy-company-overview.html");


});


$('.iconM-referrals').on('click', function() {
    $("#colorscreen").removeClass("fadeInUpBig").addClass("fadeInUpBig");
    $('.fadeInUpBig').css('background-color', 'rgba(183, 192, 26, 0.8)');
    $(".tile-group.main").css({ marginLeft: "-40px", width: "1080px" }).load("musability-musictherapy-company-overview.html");


});