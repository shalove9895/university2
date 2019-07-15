// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })

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


var updateSliderInterval;
var startInterval = false;

function updateSlider(id) {
  startInterval = false;
  if(id == 'nextBtn') {
    // logic for next button
    if($('.slider .images li:last-child').hasClass('active')) {
      $('.slider .images li.active').removeClass('active');
      $('.slider .images li:first-child').addClass('active');
    } else {
      $('.slider .images li.active + li').addClass('temp-active');
      $('.slider .images li.active').removeClass('active');

      $('.slider .images li.temp-active').addClass('active');
      $('.slider .images li.temp-active').removeClass('temp-active');
    }
  } else {
    // logic for prev button
    if($('.slider .images li:first-child').hasClass('active')) {
      $('.slider .images li.active').removeClass('active');
      $('.slider .images li:last-child').addClass('active');
    } else {
      $('.slider .images li.active').prev().addClass('temp-active');
      $('.slider .images li.active').removeClass('active');

      $('.slider .images li.temp-active').addClass('active');
      $('.slider .images li.temp-active').removeClass('temp-active');
    }
  }
}

$('#prevBtn, #nextBtn').click(function() {
  updateSlider(this.id)
})

function interval() {
  updateSliderInterval = setInterval(function() {
    updateSlider('nextBtn');
  }, 10000);
}
interval();

$('.slider').mouseenter(function() {
  console.log('stop');
  clearInterval(updateSliderInterval);
})
$('.slider').mouseout(function(e) {
  console.log('start');
  if(startInterval) {
    interval();
  }
  startInterval = true;
})

$('.slider').mousemove(function(e) {
  console.log();
  if(e.target.classList.contains('btn')) {
    startInterval = false;
  }
})
