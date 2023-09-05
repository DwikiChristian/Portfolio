// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Auto Type
var typed = new Typed(".auto-input", {
    strings: ["Web Dev", "Front End Dev"],
    typeSpeed : 100,
    backSpeed: 100,
    loop : true
})

//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed'); // Tambahkan tanda kutip pada nama kelas
    }
}

function sendMail(){
    const params = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };

    const serviceID ="service_y916aeh";
    const templateID ="template_p9cz5b8"

    emailjs
    .send(serviceID,templateID,params)
    .then((res) =>{
        document.getElementById("name").value = "" ;
        document.getElementById("email").value = "" ;
        document.getElementById("message").value = "" ;
        console.log(res);
        location.reload();
    })
.catch(error=>console.log(error));
}


