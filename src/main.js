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
          <!-- Popup -->
          <!-- Modal toggle -->
          <button data-modal-target="defaultModal2" data-modal-toggle="defaultModal2"
            class="p-2 text-xl font-bold border rounded-xl bg-vert text-blanc hover:bg-blanc hover:text-vert w-fit"
            type="button">
            Voir Plus !
          </button>

          <!-- Main modal -->
          <div id="defaultModal2" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t bg-bleu/70">
                  <h3 class="text-3xl font-semibold text-white dark:text-white">
                    Valeurs :
                  </h3>
                  <button type="button"
                    class="p-4 text-2xl font-bold border rounded-xl text-blanc hover:bg-blanc hover:text-vert w-fit"
                    data-modal-hide="defaultModal2">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 bg-bleu/70">
                  <p class="text-xl leading-relaxed text-white dark:text-gray-400">
                    Chez Santé Plus, nous croyons en des valeurs fondamentales qui guident notre entreprise. Nous sommes
                    attachés à la qualité, l'intégrité et l'innovation. Nous sommes fiers de proposer des produits de
                    haute qualité à des prix compétitifs et de mettre l'accent sur la satisfaction de la clientèle à
                    chaque étape du processus.
                  </p>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b bg-bleu/70">
                  <button data-modal-hide="defaultModal2" type="button"
                    class="p-4 text-2xl font-bold border rounded-xl bg-vert text-blanc hover:bg-blanc hover:text-vert w-fit">Fermer</button>
                </div>
              </div>
            </div>
          </div>
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

// animation scloll

// const callback = function (entries) {
//   entries.forEach((entry) => {
//     console.log(entry);

//     if (entry.isIntersecting) {
//       entry.target.classList.add("animate-fadeIn");
//     } else {
//       entry.target.classList.remove("animate-fadeIn");
//     }
//   });
// };
// const observer = new IntersectionObserver(callback);
// const targets = document.querySelectorAll(".js-show-on-scroll");
// targets.forEach(function (target) {
//   target.classList.add("opacity-0");
//   observer.observe(target);
// });
