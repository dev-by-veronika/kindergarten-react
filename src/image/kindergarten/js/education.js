$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navbar").addClass('navbar-hide');
    } else {
      $(".navbar").removeClass('navbar-hide');
    }
    if (scroll >= 60) { 
      $(".navbar").addClass("navbar-scrolled");
      $(".nav-link").addClass("nav-link-scrolled")
      $(".navbar").addClass('navbar-show');
      $(".person").addClass("person-scrolled")
      $(".navbar").removeClass('navbar-hide');
    } else {
      $(".navbar").removeClass("navbar-scrolled");
      $(".navbar").removeClass('navbar-show');
      $(".nav-link").removeClass('nav-link-scrolled');
      $(".person").removeClass("person-scrolled")
    }
  });

  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const itemCount = items.length;
  const nextBtn = document.querySelector('.carousel-button-next');
  const prevBtn = document.querySelector('.carousel-button-prev');
  let currentIndex = 0;
  
  function showNext() {
    currentIndex++;
    if (currentIndex > itemCount - 1) {
      currentIndex = 0;
    }
    scrollTo(currentIndex);
  }
  
  // function showPrev() {
  //   currentIndex--;
  //   if (currentIndex < 0) {
  //     currentIndex = itemCount - 1;
  //   }
  //   scrollTo(currentIndex);
  // }
  
  // function scrollTo(index) {
  //   items[index].scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'nearest'
  //   });
  // }
  
  // nextBtn.addEventListener('click', showNext);
  // prevBtn.addEventListener('click', showPrev);
  
  