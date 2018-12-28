(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 5000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict


$(window).on('scroll',function(){
  if($(window).scrollTop()){
    $('.status').addClass('black');
  }
  else{
    $('.status').removeClass('black');
  }
});



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";

    } else {
        document.getElementById("myBtn").style.display = "none";
    }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 5000, 'swing', function() { 
     
    });
}
// for displaying content of list motor
var laoding = $('.container1').html();
var loady = $('.container2').html();
var loadyz = $('.container3').html();
var loadyfour = $('.container4').html();
var loadyfive = $('.container5').html();
var loadysix = $('.container6').html();
var loadyseven = $('.container7').html();
var loadyeight = $('.container8').html();

var loadNext1=$('.added').html();
var loadNext2=$('.added2').html();
var  ribbons= document.getElementsByClassName('ribbonz');
var btn = document.getElementById('mydivs');
var btn2 = document.getElementById('mydivsBack');
var add = document.getElementsByClassName('added');

$("#df").on('click',function(){
  
  $(".contentcontainer").empty();
  $('.contentcontainer').append('.row');
  $(".contentcontainer").html(laoding);
});


$("#dh125").on('click',function(){
  $(".contentcontainer").empty();
  // $('.contentcontainer').append('.row');
  $(".contentcontainer").html(loady);
 


});


$("#dh150").on('click',function(){
 
  $(".contentcontainer").empty();
  $('.contentcontainer').append('.row');
  $(".contentcontainer").html(loadyz);

});


$("#eg150").on('click',function(){
 
  $(".contentcontainer").empty();
  $('.contentcontainer').append('.row');
  $(".contentcontainer").html(loadyfour);

});



$("#egl125").on('click',function(){
 
  $(".contentcontainer").empty();
  $('.contentcontainer').append('.row');
  $(".contentcontainer").html(loadyfive);

});



$("#ka150").on('click',function(){
 
  $(".contentcontainer").empty();
  $('.contentcontainer').append('.row');
  $(".contentcontainer").html(loadysix);

});



$("#tf150").on('click',function(){
 
  $(".contentcontainer").empty();
  $('.contentcontainer').append('.row');
  $(".contentcontainer").html(loadyseven);

});



$("#tr150s").on('click',function(){
 
  $(".contentcontainer").empty();
  $('.contentcontainer').append('.row');
  $(".contentcontainer").html(loadyeight);

});



//  for container 1
function nextlink(){
  $(".contentcontainer").empty();
  $(".contentcontainer").html(loadNext1);
};


function prevlink(){
  $(".contentcontainer").empty();
  $('.contentcontainer').append('.row');
  $(".contentcontainer").html(laoding);
};


// for containersix
function nextlinky(){
  $(".contentcontainer").empty();
  $(".contentcontainer").html(loadNext2);
};


function prevlinky(){
  $(".contentcontainer").empty();
  $('.contentcontainer').append('.row');
  $(".contentcontainer").html(loadysix);
};
// addd active calsses
function active(){

  $('#dh150').removeClass('active');
  $('#eg150').removeClass('active');
  $('#egl125').removeClass('active');
  $('#ka150').removeClass('active');
  $('#tf150').removeClass('active');
  $('#tr150s').removeClass('active');
  $('#dh125').removeClass('active');
  $('#df').addClass('active');
};

function active2(){
 
  $('#df').removeClass('active');
  $('#eg150').removeClass('active');
  $('#egl125').removeClass('active');
  $('#ka150').removeClass('active');
  $('#tf150').removeClass('active');
  $('#tr150s').removeClass('active');
  $('#dh150').removeClass('active');
  $('#dh125').addClass('active');
};
function active3(){
  $('#dh125').removeClass('active');
  $('#df').removeClass('active');
  $('#eg150').removeClass('active');
  $('#egl125').removeClass('active');
  $('#ka150').removeClass('active');
  $('#tf150').removeClass('active');
  $('#tr150s').removeClass('active');
  $('#dh150').addClass('active');
};
function active4(){
  $('#dh125').removeClass('active');
  $('#df').removeClass('active');
  $('#egl125').removeClass('active');
  $('#ka150').removeClass('active');
  $('#tf150').removeClass('active');
  $('#tr150s').removeClass('active');
  $('#dh150').removeClass('active');
  $('#eg150').addClass('active');
};
function active5(){
  $('#dh125').removeClass('active');
  $('#df').removeClass('active');
  $('#eg150').removeClass('active');
  $('#ka150').removeClass('active');
  $('#tf150').removeClass('active');
  $('#tr150s').removeClass('active');
  $('#dh150').removeClass('active');
  $('#egl125').addClass('active');
};
function active6(){
  $('#dh125').removeClass('active');
  $('#df').removeClass('active');
  $('#eg150').removeClass('active');
  $('#egl125').removeClass('active');
  $('#tf150').removeClass('active');
  $('#tr150s').removeClass('active');
  $('#dh150').removeClass('active');
  $('#ka150').addClass('active');
};
function active7(){
  $('#dh125').removeClass('active');
  $('#df').removeClass('active');
  $('#eg150').removeClass('active');
  $('#egl125').removeClass('active');
  $('#ka150').removeClass('active');
  $('#tr150s').removeClass('active');
  $('#dh150').removeClass('active');
  $('#tf150').addClass('active');
};
function active8(){
  $('#dh125').removeClass('active');
  $('#df').removeClass('active');
  $('#eg150').removeClass('active');
  $('#egl125').removeClass('active');
  $('#ka150').removeClass('active');
  $('#tf150').removeClass('active');
  $('#dh150').removeClass('active');
  $('#tr150s').addClass('active');
};



// onclick to view image content model
const MyImg=()=>{
  var modal = document.getElementById('myModal');
  modal.style.display="block";
  var closing = document.getElementById('closed');
    closing.onclick = ()=>{
    modal.style.display="none";
    window.onclick =()=>{
      if(event.target ==  modal){
        modal.style.display = "none;"
      }
    }

  }
}
