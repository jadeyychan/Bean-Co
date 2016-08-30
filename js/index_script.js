logo_index = 0;
see_index = 6;
meet_index = 7;
greet_index = 12;

$( document ).ready(function() {

  // Correctly showing / hiding carousel arrows 
  $('.carousel').carousel({
    wrap: false
  }).on('slid.bs.carousel', function () {
    curSlide = $('.active');

    /* Hiding first left arrow */
    if(curSlide.is( ':first-child' )) {
      $('.left').hide();
    } else {
      $('.left').show();   
    }

    /* Hiding last right arrow */
    if (curSlide.is( ':last-child' )) {
      $('.right').hide();
    } else {
      $('.right').show();      
    }
  });

  // if(screen.height > screen.width){
  //   alert("please rotate your screen for a better effect!");
  // }
  
});

/* Toolbar background coloring functions */
function nav_logo() {
  $('.nav-meet').removeClass('navbar-background-meet');
  $('.nav-greet').removeClass('navbar-background-greet');
  $('.nav-see').removeClass('navbar-background-see');
  goToSlide(logo_index);
  return;
}
function nav_see() {
  $('.nav-meet').removeClass('navbar-background-meet');
  $('.nav-greet').removeClass('navbar-background-greet');
  $('.nav-see').addClass('navbar-background navbar-background-see');
  goToSlide(see_index);
  return;
}

function nav_meet() {
  $('.nav-see').removeClass('navbar-background-see');
  $('.nav-greet').removeClass('navbar-background-greet');
  $('.nav-meet').addClass('navbar-background navbar-background-meet');
  goToSlide(meet_index);
  return;
}

function nav_greet() {
  $('.nav-see').removeClass('navbar-background-see');
  $('.nav-meet').removeClass('navbar-background-meet');
  $('.nav-greet').addClass('navbar-background navbar-background-greet');
  goToSlide(greet_index);
  return;
}

function goToSlide(number) {
  $("#myCarousel").carousel(number);
}