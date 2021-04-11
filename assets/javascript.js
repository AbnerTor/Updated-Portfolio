
$(document).scroll(function () {
    var y = $(this).scrollTop();
     if (y > 750) {
        $('#sideSection').fadeIn();
    } else {
        $('#sideSection').fadeOut();
    }
});
