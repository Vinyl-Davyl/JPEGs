//Animate Smooth Scroll
$('#view-work').on('click', function(){
    const images = $('#images').position().top;

  $('html, body').animate(
      {
          scrollTop: images
      },
      900
  );     
});

//Top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

