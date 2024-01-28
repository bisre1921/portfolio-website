const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".nav-bar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");

}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active-class");
                document.querySelector(".header nav a[href*="+ id + "]").classList.add("active-class");
            });
        };
    });

    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100); 

}

navLinks.forEach(navlink => {
    navlink.onclick = () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    }
})


ScrollReveal({ 
    reset: true , 
    distance : "80px" , 
    duration : 2000 , 
    delay : 200
 });
 ScrollReveal().reveal(".home-content , .heading" , {origin : "top"});
 ScrollReveal().reveal(".home-img , .skills-container , .portfolio-box , .contact form" , {origin : "bottom"});
 ScrollReveal().reveal(".home-content h1 , .about-img" , {origin : "left"});
 ScrollReveal().reveal(".home-content p , .about-content" , {origin : "right"});


const typed = new Typed(".multiple-text" , {
    strings : ["Front-end Developer" , "Computer-science Student"] , 
    typeSpeed : 100 , 
    backSpeed : 100 , 
    backDelay : 1000 , 
    loop : true
});



const changeColor = document.querySelector(".change-color");

// Define two sets of colors


const colorSet1 = {
    '--bg-color': '#D4CAA3',
    '--second-bg-color': '#FFFEF2',
    '--text-color': 'black',
    '--main-color': '#a67546',
};

const colorSet2 = {
    '--bg-color': '#1f242d',
    '--second-bg-color': '#323946',
    '--text-color': '#fff',
    '--main-color': '#0ef',
};

let isColorSet1 = true;

changeColor.onclick = () => {
    // Toggle between color sets
    if (isColorSet1) {
        applyColors(colorSet2);
    } else {
        applyColors(colorSet1);
    }

    isColorSet1 = !isColorSet1;
};

// Function to apply colors to the root
function applyColors(colors) {
    for (const key in colors) {
        if (colors.hasOwnProperty(key)) {
            document.documentElement.style.setProperty(key, colors[key]);
        }
    }
}


