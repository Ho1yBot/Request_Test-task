let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Function to show a specific slide
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark its corresponding dot as active
  
  slides[slideIndex - 1].style.display = "flex";
  slides[slideIndex - 1].style.justifyContent = "center";
  slides[slideIndex - 1].style.flexWrap = "wrap";
  // slides[slideIndex - 1].style.height = "100%";
  dots[slideIndex - 1].className += " active";
  
}

// Function to advance to the next slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Automatically advance to the next slide every 3 seconds (3000 milliseconds)
// setInterval(function () {
//   plusSlides(1);
// }, 50000);

showSlides(slideIndex);


const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu-container');

menuButton.addEventListener('mouseover', () => {
    menu.style.display = 'flex';
    menuContainer.style.backgroundColor = "white";
    menuContainer.style.boxShadow = "0px 1px 8px 0px rgba(34, 60, 80, 0.2)";
});

menu.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
    menuContainer.style.backgroundColor = "transparent";
    menuContainer.style.boxShadow = "none";
});

let humanName = 'Мария';
const accountName = document.querySelector('.header_account_name');
const menuAcc = document.querySelector('.menu_acc');
const human = document.createElement('p');
const humanMenu = document.createElement('p');
human.textContent = humanName;
humanMenu.textContent = humanName;
accountName.append(human);
menuAcc.insertAdjacentElement('afterend', humanMenu);