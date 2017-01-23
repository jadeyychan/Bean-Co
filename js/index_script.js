logo_index = 0;
see_index = 6;
meet_index = 7;
greet_index = 12;

$( document ).ready(function() {

  consoleEasterEgg()

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

    /* Navbar background coloring */
    curIndex = $('div.active').index();
    if (curIndex < see_index) {
      nav_background_logo();
    }
    else if (curIndex == see_index) {
      nav_background_see();
    }
    else if (curIndex > see_index && curIndex <= meet_index) {
      nav_background_meet();
    }
    else if (curIndex == greet_index) {
      nav_background_greet();
    }
  });

  // if(screen.height > screen.width){
  //   alert("please rotate your screen for a better effect!");
  // }
  
});

/* Toolbar background coloring functions */

/* Navbar background color */
function nav_background_logo() {
  $('.nav-meet').removeClass('navbar-background-meet');
  $('.nav-greet').removeClass('navbar-background-greet');
  $('.nav-see').removeClass('navbar-background-see');
}

function nav_background_see() {
  $('.nav-meet').removeClass('navbar-background-meet');
  $('.nav-greet').removeClass('navbar-background-greet');
  $('.nav-see').addClass('navbar-background navbar-background-see');
}
function nav_background_meet() {
  $('.nav-see').removeClass('navbar-background-see');
  $('.nav-greet').removeClass('navbar-background-greet');
  $('.nav-meet').addClass('navbar-background navbar-background-meet');
}
function nav_background_greet() {
  $('.nav-see').removeClass('navbar-background-see');
  $('.nav-meet').removeClass('navbar-background-meet');
  $('.nav-greet').addClass('navbar-background navbar-background-greet');
}

/* Navbar to slide */
function nav_logo() {
  nav_background_logo();
  goToSlide(logo_index);
  return;
}
function nav_see() {
  nav_background_see();
  goToSlide(see_index);
  return;
}

function nav_meet() {
  nav_background_meet();
  goToSlide(meet_index);
  return;
}

function nav_greet() {
  nav_background_greet();
  goToSlide(greet_index);
  return;
}

function goToSlide(number) {
  $("#myCarousel").carousel(number);
}

/* Easter Egg */
function consoleEasterEgg() {

}