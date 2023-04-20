$(document).ready(function() {

    
document.getElementById("submit").addEventListener('click', async (event) => {
  //Empecher une reactualisation de la page
  event.preventDefault()
  //Recuperer le formulaire
  const form = document.forms["newsletters"]
  //Passer le formulaire a notre fonction sendMail
  let response = await sendEmail(form)

})
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

async function sendEmail(form){
  //Recuperer les valeurs du formulaire
  var data = {
    nom: form["lastName"].value,
    prenom: form["firstName"].value,
    email: form["email"].value,
  }
  console.log(data)
  //Envoyer notre requete
  await fetch('/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return false;
}