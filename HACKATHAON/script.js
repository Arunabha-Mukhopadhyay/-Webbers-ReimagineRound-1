document.addEventListener("DOMContentLoaded", function() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        scroll.scrollTo(target);
      }
    });
  });

  var tl = gsap.timeline();

  tl.from("nav", {
    x: 10,
    y: 20,
    opacity: 0,
    duration: 0.7
  });

  tl.from("#images img", {
    x: -7,
    y: -15,
    opacity: 0,
    duration: 1
  }, "<");

  tl.from("#buttons-sec .button-78 ", {
    y: 20,
    opacity: 0,
    duration: 1
  }, "<");

  tl.from("#buttons-sec h4 ", {
    x:-10,
    y: 20,
    opacity: 0,
    duration: 1
  }, "<");

  tl.from("#center-text h1 span", {
    x: -50,
    y: 20,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    delay: -0.9
  }, ">");

  tl.from("#center-text p", {
    x: 10,
    y: 15,
    opacity: 0,
    duration: 0.8
  }, "<");


  const divy = document.querySelector("#images");
  const image1 = document.querySelector(".st-image");
  const image2 = document.querySelector(".hover-image");

  divy.addEventListener("mouseenter", function() {
    image1.style.opacity = 0;
    image2.style.opacity = 1;
  });


  divy.addEventListener("mouseleave", function() {
    image1.style.opacity = 1;
    image2.style.opacity = 0;
  });


  const searchIcon = document.querySelector(".search");
  const searchInput = document.querySelector("input[type='text']");

  searchIcon.addEventListener("click", function() {
    const isVisible = searchInput.style.display !== "none";
    if (!isVisible) {
      searchInput.style.display = "inline-block";
      gsap.to(searchInput, { opacity: 1, right: `calc(-${searchInput.offsetWidth}px + 20px)`, duration: 0.5 });
    } else {
      gsap.to(searchInput, { opacity: 0, duration: 0.5, onComplete: () => {
        searchInput.style.display = "none";
      }});
    }
  });

  searchIcon.style.cursor = "pointer"; 
});


const observer = new IntersectionObserver ((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((el)=> observer.observe(el));



document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anni');
        observer.unobserve(entry.target); 
      }
    });
  });

  const elementsToAnimate = document.querySelectorAll('.media-container');
  elementsToAnimate.forEach((el) => observer.observe(el));
});



document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anni');
        observer.unobserve(entry.target); 
      }
    });
  });

  const contentWrapper = document.querySelector('.content-wrapper');
  observer.observe(contentWrapper);
});
