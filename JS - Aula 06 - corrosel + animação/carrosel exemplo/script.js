new Glider(document.querySelector('.glider'), {
    slidesToShow: 2,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    // faz o loop
    rewind: true 
  });