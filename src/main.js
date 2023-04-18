$(document).ready(function() {

    async function sendEmail(){

        if(validate()){
          var data = {
            nom: form.nom.value,
            prenom: form.prenom.value,
            email: form.email.value,
          }
          await fetch('http://localhost:3000/newsletter', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        }
        else{
          console.log("")
        }
    }


//     const swiper = new Swiper('.swiper', {
//         // Optional parameters
//         direction: 'horizontal',
//         loop: false,
    
//         // If we need pagination
//         pagination: {
//             el: '.swiper-pagination',
//         },
    
//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });    
// });

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/* animation scloll

 const callback = function (entries) {
   entries.forEach((entry) => {
     console.log(entry);

     if (entry.isIntersecting) {
       entry.target.classList.add("animate-fadeIn");
     } else {
       entry.target.classList.remove("animate-fadeIn");
     }
   });
 };
 const observer = new IntersectionObserver(callback);
 const targets = document.querySelectorAll(".js-show-on-scroll");
 targets.forEach(function (target) {
   target.classList.add("opacity-0");
   observer.observe(target); */
 });