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





const images = [...document.querySelectorAll('img.image')];

// Popup

const popup = document.querySelector('.popup'); 
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    });
});




const updateImage = (i) => {
    let path = images[i].src;
    largeImage.src = path;
    imageName.innerHTML = images[i].alt;
    imageIndex.innerHTML = `0${i + 1}`;
    index = i;
}

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})





/*----OVERLAY----*/
document.querySelectorAll('.gallery-grid img').forEach((img, index) => {
    img.addEventListener('click', () => {
        const popup = document.querySelector('.popup');
        const overlay = document.querySelector('.overlay');
        const largeImage = document.querySelector('.large-image');

        largeImage.src = img.src;
        popup.classList.add('active');
        overlay.classList.add('active');
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay');

    popup.classList.remove('active');
    overlay.classList.remove('active');
});
