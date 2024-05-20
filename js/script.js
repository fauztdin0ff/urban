//-----------------БУРГЕР МЕНЮ---------------------------
let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

document.addEventListener('click', (event) => {
   if (!event.target.closest('.menu__body') && !event.target.closest('.menu__icon')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
   }
});

// Добавляем обработчики событий для ссылок внутри меню
let menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
   menuLinks.forEach(link => {
      link.addEventListener('click', function () {
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
      });
   });
}

/*------------------------------Перенос блока---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   var homeForm = document.querySelector('.home__form');
   var originalParent = homeForm.parentElement;
   var formMobileBody = document.querySelector('.form-mobile__body');

   function moveForm() {
      var windowWidth = window.innerWidth;

      if (windowWidth < 900) {
         if (formMobileBody && homeForm && !formMobileBody.contains(homeForm)) {
            formMobileBody.appendChild(homeForm);
         }
      } else {
         if (originalParent && homeForm && !originalParent.contains(homeForm)) {
            originalParent.appendChild(homeForm);
         }
      }
   }

   moveForm();

   window.addEventListener('resize', moveForm);
});



/*------------------------------инпут телефона---------------------------*/
const phoneInputField = document.querySelector("#phone");

window.intlTelInput(phoneInputField, {
   utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
   autoInsertDialCode: true,
   separateDialCode: true,
   initialCountry: "auto",
   geoIpLookup: callback => {
      fetch("https://ipapi.co/json")
         .then(res => res.json())
         .then(data => callback(data.country_code))
         .catch(() => callback("us"));
   }
}).promise.then(() => {
   document.querySelector('.iti__country-list').querySelectorAll('li').forEach(country => {
      country.classList.add('country-list-item-custom-styles')
   })
});
