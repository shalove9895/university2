$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top +'px'
        }, 2000);
        return false;
      }
    }
  });
});

document.addEventListener('scroll', function() {
  if(scrollY > 200) {
      document.getElementById('goToTopBtn').classList.add('active');
  } else {
      document.getElementById('goToTopBtn').classList.remove('active');
  }
});


function openSlideMenu(){
  document.getElementById('menu').style.width ='200px';
  document.getElementById('contant').style.marginLeft ='200px';
}

function closeSlideMenu(){
  document.getElementById('menu').style.width ='0';
  document.getElementById('contant').style.marginLeft ='0';
}