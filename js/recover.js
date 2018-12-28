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
        }, 1000, "easeInOutExpo");
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




function Open(){
  console.log("hey mn");

}
const data = {
  df: [{
    image: "../images/df/a.JPG",
    desc: "Big Motor"
  },{
    image: "../images/df/a (2).JPG",
    desc: "Medium Motor"
  },
  {
    image: "../images/df/a (3).JPG",
    desc: "Faster"
  }  ],
  dh125: [{
    image: "../images/dh/_MGL7148.JPG",
    desc: "Value125 one"
  },{
    image: "../images/dh/_MGL7490.JPG",
    desc: "Value125 two"
  },
  {
    image: "../images/dh/_MGL7518.JPG",
    desc: "Value125 three"
  }] 

}

function createJsElm(id) {
  return document.getElementById(id);
}
function handleBtnClick(e) {
  const step = parseInt(e.dataset.step || 0);
  const finale = step + 3;
  
  if(!data[e.dataset.el][finale -3]) {
    renderDataRow(step, finale, e.dataset.el);
    const row = createJsElm(`row${2}`);
    const p = createJsElm(`para${2}`);
    const img = createJsElm(`image${2}`);
    
      row.style.display = "none";
      p.style.display = "none";
      img.style.display = "none"; 
  }else if(!data[e.dataset.el][finale -1]) {
    const row = createJsElm(`row${3}`);
    const p = createJsElm(`para${3}`);
    const img = createJsElm(`image${3}`);
  
    row.style.display = "none";
    p.style.display = "none";
    img.style.display = "none"; 
  }

}
function renderDataRow(start, end, el) {
  const list = data[el];
  
  (list.slice(start, end)).map((d, index) => {
    const row = createJsElm(`row${index+1}`);
    const p = createJsElm(`para${index+1}`);
    const img = createJsElm(`image${index+1}`);
    if(d) {
    // debugger
    p.innerText = d.desc;
    img.setAttribute('src', d.image);
    const btn = createJsElm('next');
    btn.dataset.step = end;
    btn.dataset.el = el;
    row.style.display = "block";
    p.style.display = "block";
    img.style.display = "block";
    }else {
      row.style.display = "none";
      p.style.display = "none";
      img.style.display = "none"; 
    }
  })
}
function handleClick(e) {
  const btn = createJsElm('next');
  const step = parseInt(0); 
  debugger
  renderDataRow(step, step+3, e.getAttribute("name"))
  
  const container =  createJsElm('ulElm');
  const children = container.childNodes;
  debugger
  for(let child of children) {
    let classVal =child.getAttribute('class');
    if(classVal.includes('active')) {
      const index = classVal.indexOf("active");
      classVal += classVal.slice(0, index);
      child.setAttribute("class", classVal)
    }
  }
  e.setAttribute('class', e.getAttribute('class') + " " +"active");
}


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

$("#df").on('click',function(){
  
  $(".contentcontainer").empty();
  $(".contentcontainer").append("It is Tuesday");
})

$("#dh125").on('click',function(){
 
  $(".contentcontainer").empty();
  $(".contentcontainer").innerHTML="I am good";
  
  $(".contentcontainer").append("It is monday");
})



