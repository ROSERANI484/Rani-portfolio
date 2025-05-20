// === Navigation Toggle ===
//function mymenuFunction() {
  //var menuBth = document.getElementById('mynavmenu');

  //if (menuBth.className === "nav-menu") {
    //menuBth.className += " responsive";
  //} else {
   // menuBth.className = "nav-menu";
 // }
//}
  function mymenuFunction() {
    const menu = document.getElementById('mynavmenu');
    menu.classList.toggle("responsive");
  }

  function closeNavIfMobile() {
    const menu = document.getElementById('mynavmenu');
    if (window.innerWidth <= 768) {
      menu.classList.remove("responsive");
    }
  }





// === Dark Mode Toggle ===
//const body = document.querySelector('body'),
 // toggleSwitch = document.getElementById("toggle-Switch");

//toggleSwitch.addEventListener("click", () => {
  //body.classList.toggle("dark");
//});

// === Typing Effect (run after DOM is ready) ===
document.addEventListener("DOMContentLoaded", function () {
  var TypingEffect = new Typed('.typedText', {
    strings: ['web','Developer'],
    loop: true,
    typeSpeed: 100,
    backDelay: 1000
  });
});

/*-----scroll animation---*/
// ScrollReveal Animations
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right", // fixed origin
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".about-info", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });


// Active link scroll effect
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                ?.classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                ?.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);