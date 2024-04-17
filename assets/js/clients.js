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


 


'use strict';

/* ADDING EVENT ON ELEMENTS */

const addEventOnelem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
    lastTabCard.classList.remove("active");
    this.classList.add("active");
    lastTabCard = this;
}

addEventOnelem(tabCard, "click", navigateTab);