/*----NAV BAR FUNCTION----*/
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }   else {
        menuBtn.className = "nav-menu";
    }
}


/*----ADD SHADOW NAV BAR WHILE SCROLLING----*/
 window.onscroll = function() {headerShadow()}

 function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = " 0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px"; 
        navHeader.style.blineHeight = "90px";

    }
 }


/*----TYPING EFFECT----*/
 var typingEffect = new Typed(".typedText",{
    strings : ["Photographer","Videographer","Retoucher"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 70,
    backDelay : 2000
 })


/*----SCROLL ANIMATION----*/
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
 })


/*--HOME--*/
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/*--PROJECT BOX--*/
sr.reveal('.project-box',{interval: 200})


/*--HEADING--*/
sr.reveal('.top-header',{})



/*----SCROLL REVEAL LEFT_RIGHT ANIMATION----*/

/*---ABOUT INFO & CONTACT INFO---*/
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px', 
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})


/*--ABOUT SKILLS & FORM BOX--*/
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})


/*----CHANGE ACTIVE LINK----*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        
        } else {
         
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }  
    })
}

window.addEventListener('scroll', scrollActive);



 
/*----CONTACT FORM-----*/
const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = `Enter ${input.placeholder}`;
      formHeading.style.opacity = "1";
    },300);
  });

  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Get in touch";
      formHeading.style.opacity = "1";
    },300);
    });
});

/*---POPUP---*/
let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}

var submit_button = document.getElementById('form-submit-btn');
		
if (form-submit-btn){
        form-submit-btn.addEventListener('click',function(e){
		e.preventDefault()
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var subject = document.getElementById('subject').value;
		var message = document.getElementById('message').value;
		var body = 'name: '+name + '<br/> email: ' +email + '<br/> subject: ' +subject+ '<br/> message: '+message;


						Email.send({
				SecureToken : "9388e99d-5e02-4bf6-aa54-9da7768e13ad",
				To : 'kunenetshepo@gmail.com',
				From : "royaltyeraenquiries@gmail.com",
				Subject : "contact message",
				Body : body
			}).then(
			message => alert(message)
    ); 
	})
}

/*----VALIDATE FUNCTION FOR CONTACT FORM-----*/
function validateForm() {
  const name = document.forms["contact-form"]["name"].value;
  const email = document.forms["contact-form"]["email"].value;
  const subject = document.forms["contact-form"]["subject"].value;
  const message = document.forms["contact-form"]["message"].value;

  const isEmpty = (value) => value.trim() === "";

  if (isEmpty(name) || isEmpty(email) || isEmpty(subject) || isEmpty(message)) {
      alert("Kindly fill in all fields.");
      return false;
  } else {
      openPopup();
      return false; 
  }
}

function openPopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("open-popup");
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("open-popup");
  popup.style.display = "none";
}

