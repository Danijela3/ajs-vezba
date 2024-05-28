

  /*OFFICE SPACE SLIDER*/

  $(document).ready(function(){
  $('.office-space__gallery').slick(
    {
      dots: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<span class="my-arrow my-arrow__next"><img src="image/arrows/arrow-right.svg"></span>',
      prevArrow: '<span class="my-arrow my-arrow__prev"><img src="image/arrows/arrow-left.svg"></span>',
      infinite: false
    }
  )
  });


  /*OUR SPACES SLIDER*/



  $(document).ready(function(){
    $('.our-spaces__spaces-gallery').slick(
      {
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<span class="my-arrow my-arrow__next"><img src="image/arrows/arrow-right.svg"></span>',
        prevArrow: '<span class="my-arrow my-arrow__prev"><img src="image/arrows/arrow-left.svg"></span>',
        infinite: false
      }
    )
    });


    /*OUR CLIENTS SLIDER*/

    $(document).ready(function(){
      $('.our-clients__grid').slick(
        {
          dots: true,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: '<span class="my-arrow my-arrow__next"><img src="image/arrows/arrow-right-grey.svg"></span>',
          prevArrow: '<span class="my-arrow my-arrow__prev"><img src="image/arrows/arrow-left-grey.svg"></span>',
          infinite: false,
          responsive: [
                   
          {
           breakpoint: 480,
           settings: {
            slidesToShow: 1,
            slidesToScroll: 1
                        }
              }
                     
                  ]
        }
      )
      });





    /*FAQ ACCORDION------------------------------------------------------------------------------------------*/

    const accordion = document.querySelectorAll('.faq__accordion-item');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}




// HAMBURGER BUTTON----------------------------------------------------------------------------------------------//

const hamburgerBtn = document.getElementById("hamburger-button");

let html = document.getElementsByTagName('html')[0];

hamburgerBtn.addEventListener("click", () => {
  
  document.getElementById("navigation").classList.add("change");
  html.classList.add("no-scroll");
} );


const closeBtn = document.getElementById("close-button");

closeBtn.addEventListener("click", () => {
  
  document.getElementById("navigation").classList.remove("change");
  html.classList.remove("no-scroll");
} );






const scrollListener = () => {
  if (window.scrollY >= 10) {
    hamburgerBtn.classList.add("transparent");
    
     
 
   } else {
     hamburgerBtn.classList.remove("transparent");
    
     
   }
};

window.addEventListener('scroll', scrollListener);



window.onscroll = function() {myFunction()};

var stickyHeader = document.getElementById("sticky-header");


function myFunction() {
  if (window.scrollY >= 10) {
    stickyHeader.classList.add("sticky");
    

  } else {
    stickyHeader.classList.remove("sticky");
    
  }
}

