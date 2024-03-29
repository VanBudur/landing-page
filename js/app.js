/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// عناصر النافيقيشن المهمه
// Define Global element
const navigation= document.getElementById("navbar__list");
//  عناصر السكاشن المهمه
// Define Global sections
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// document.querySelectorAll('section');
// document.querySelectorAll('nav ul li a');
// const options ={
//     root: null,
//     rootMargin: 'Opx',
//     threshold: 0.5 

// };
// const observer= new IntersectionObserver(function (entrise, observer){
//     entrise.forEach(entry=>{
//         if (entry.isIntersecting){
//             const activeSection = entry.target.id;
//             navLinks.forEach(link=>{
//                 link.classList.remove('active');
//                 if (link.getAttribute('href') === '#${activeSection}'){
//                     link.classList.add('active');
//                 }
//             });
//         }
//     });
// }, options);
    

// build the nav

const navBuilder=()=> {
    let navUI = '';
    // عشان نسوي لوب لكل السكاشن
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    // عشان نلحق العناصر بالنافيقيشن
    navigation.innerHTML = navUI;

}
navBuilder();
// Add class 'active' to section when near top of viewport
// in ts function i want to add get the possition and size
// 
const offset = (section)=>{
    return Math.floor(section.getBoundingClientRect().top);

};
// function to c if i want to remove or add the active class
// فنكشن عشان اذا نضيف او نحذف
// firts to remove actv class
const removeActive =(section)=>{
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";

};

// ------------------------------------------------

const removeActiveNavLink = (section)=>{
  
    const links = document.querySelectorAll(".menu__link");

    links.forEach((link)=>{
        if (link.href.split("#")[1] == section.id) {
            link.classList.remove('active');
        }
    });
}
// --------------------------------------------------
const addActiveNavLink = (conditional, section)=>{
    if (conditional) {
        const links = document.querySelectorAll(".menu__link");
    
        links.forEach((link)=>{
            if (link.href.split("#")[1] == section.id) {
                link.classList.add('active');
            }

        });
    }
}


// second to add active class
const addActive =(conditional, section)=>{
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: pink;";
    };
};
//implementating the actual function
// تنفيذ الفنكشن

const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;
        // ----------------------------------------------------------------
        removeActive(section);
        removeActiveNavLink(section);
        addActive(inviewport(),section);
        addActiveNavLink(inviewport(), section);
    });
};

window.addEventListener('scroll' ,sectionActivation);



// Scroll to anchor ID using scrollTO event


const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();


let mybutton = document.getElementById("goToTheTop");

// يعني بعد ماينزل ب 15 بكسل يظهر له الزر
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// عشان لما اليوزر يضغط توجيه لفوووق
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

