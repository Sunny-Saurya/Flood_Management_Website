$(document).ready(function() {
    $('a[href^="#"]').click(function(event) {
      var target = $(this.getAttribute('href'));
      if(target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
  