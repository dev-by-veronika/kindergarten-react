
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
      // $(".navbar").slideDown("slow"); // добавляем анимацию
    } else {
      $(".navbar").removeClass("navbar-scrolled");
      $(".navbar").removeClass('navbar-show');
      $(".nav-link").removeClass('nav-link-scrolled');
      $(".person").removeClass("person-scrolled")
      // $(".navbar").removeClass('navbar-hide');
      // $(".navbar").slideUp("slow"); // добавляем анимацию
    }
  });

  $(document).ready(function() {
    var textarea = $("#inputMessage");
    var charsLeft = $("#charsLeft");
  
    textarea.on("input", function() {
      var remainingChars = 1000 - textarea.val().length;
      charsLeft.text( remainingChars + " characters left");
    });
  });
  
  