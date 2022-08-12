// slider
$('.slider').slick({
  arrows: true,
  dots: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 415,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }
  ]
});
//=================
//Menu
let burger = document.querySelector('#icon-menu');
let overlay = document.querySelector('#overlay');
let mobileMenu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelectorAll('.nav--mob  a');
burger.addEventListener('click', function () {
  this.classList.toggle('_active');
  document.querySelector('body').classList.toggle('_lock');
  overlay.classList.toggle('_active');
  mobileMenu.classList.toggle('_active');

  if (overlay.classList.contains('_active')) {
    overlay.addEventListener('click', function () {
      this.classList.remove('_active');
      document.querySelector('body').classList.remove('_lock');
      burger.classList.remove('_active');
      mobileMenu.classList.remove('_active');

    })
  }

  if (burger.classList.contains('_active')) {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        overlay.classList.remove('_active');
        document.querySelector('body').classList.remove('_lock');
        burger.classList.remove('_active');
        mobileMenu.classList.remove('_active');
      })
    })
  }
})
//=================
// form
let form = document.querySelector('.form');
let inputs = document.querySelectorAll('.js-input');
let checkboxes = document.querySelectorAll('.js-input-checkbox');
let popup = document.querySelector('.thanks');
let close = document.querySelector('.close');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let emptyInputs = Array.from(inputs).filter(input => input.value === '');
  inputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error');

    } else {
      input.classList.remove('error');

    }
  });
  if (emptyInputs.length !== 0) {
    console.log('');
  } else {
    inputs.forEach(function (input) {
      console.log(input.value);
    })
    let chk = '';
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) { chk += checkboxes[i].value + ', '; }
    }
    console.log(chk);
    popup.classList.add('_active');
    popupBody.classList.add('_active');
    document.querySelector('body').classList.add('_lock');
  }
})

popup.addEventListener('click', function () {
  this.classList.remove('_active');
  document.querySelector('body').classList.remove('_lock');
  form.reset();
})

close.addEventListener('click', function () {
  popup.classList.remove('_active');
  document.querySelector('body').classList.remove('_lock');
  form.reset();
})
//=================

//focus
$('.js-input').each(function (input) {
  $(this).focus(function (el) {
    $(this).prev('.form__label').addClass('_active')
  });
  $(this).blur(function (el) {
    $(this).prev('.form__label').removeClass('_active')
  });
})

