$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 750) {
      $('#sideSection').fadeIn();
    } else {
      $('#sideSection').fadeOut();
    }
  });

  $("#project1").attr("href", "https://www.linkedin.com/in/abner-toribio-vazquez-726241127/")