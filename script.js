let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

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

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// setInterval(function () {
//   plusSlides(1);
// }, 50000);

showSlides(slideIndex);

// Меню/аккаунт
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

// Бургер меню
const burgerButton = document.getElementById('burger-button');
const burgerContent = document.getElementById('burger-content');

burgerButton.addEventListener('click', () => {
    if (burgerContent.style.display === 'flex') {
        burgerContent.style.display = 'none';
    } else {
        burgerContent.style.display = 'flex';
    }
});

// Закрываем burger-content при клике вне меню
document.addEventListener('click', (event) => {
    if (!burgerContent.contains(event.target) && event.target !== burgerButton) {
        burgerContent.style.display = 'none';
    }
});

// Закрываем burger-content при изменении размера окна
window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        burgerContent.style.display = 'none';
    }
});