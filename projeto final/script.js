function mostrarOcultarSenha(idIcone, idInput) {
  var icone = document.querySelector(`#${idIcone}`)
  var senha = document.getElementById(`${idInput}`);
  if (senha.type == "password") {
    senha.type = "text";
    icone.classList.replace("fa-eye", "fa-eye-slash")
  } else {
    senha.type = "password"
    icone.classList.replace("fa-eye-slash", "fa-eye")
  }
}


const glider = new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  // faz o loop
  rewind: true
});

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 1;

 function slide () {
   slideTimeout = setTimeout(
     function () {
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

// sliderAuto(glider, 5000)