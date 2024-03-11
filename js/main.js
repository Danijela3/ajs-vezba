
/*DISHES SLICK SLIDER*/

// $(document).ready(function(){
//     $('.dishes').slick(
// {
//         dots: true,
//         arrows: false,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
  //       ]
  //   }
  //   );
  // });




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









// In your Javascript (external .js resource or <script> tag)

// $(document).ready()
// $(document).ready(function() {
//   $('.interested-in').select2();
// });









  //HEART COUNTER ----------------------------------------------------------------------------------------------------------------//



  // Variables

// const likeBtn = document.querySelectorAll('.heart');
// const numberOfLikesElement = document.querySelector('.number-of-likes');

// console.log(likeBtn);

// // let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
// let isLiked = false;

// // Functions

// const likeClick = (likeBtn) => {
//   if (!isLiked) {
//     likeBtn.classList.add('isLiked');
  
//     let numberOfLikes = Number.parseInt(likeBtn.nextElementSibling.textContent);
//      numberOfLikes++;
//     console.log(numberOfLikes);
//     isLiked = !isLiked;
//     likeBtn.nextElementSibling.textContent = numberOfLikes;
//   }else {
//         likeBtn.classList.remove('isLiked');
//         let numberOfLikes = Number.parseInt(likeBtn.nextElementSibling.textContent);
//         numberOfLikes--;
//         isLiked = !isLiked;
//         likeBtn.nextElementSibling.textContent = numberOfLikes;
//       }
//     };

//   likeBtn.forEach((element) => 
//   {
    
//     element.addEventListener('click', function(){
//       likeClick(element);
// console.log('click');
//     }
//     );
//   }
//   );





//     isLiked = !isLiked;
//   } else {
//     likeBtn.classList.remove('isLiked');
//     numberOfLikes--;
//     numberOfLikesElement.textContent = numberOfLikes;
//     isLiked = !isLiked;
//   }
// };


// Event Listeners

// likeBtn.addEventListener('click', likeClick);





//HEART COLOR CHANGE---------------------------------------------------------------------------------------------------------------//





  /*BACK TO TOP ARROW*/
  // document.addEventListener('scroll',(e)=>{
  
  //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   if(scrollTop > 100) document.querySelector('.scroll').style.display = "block";
  //   else document.querySelector('.scroll').style.display = "none";
  // })
  // function animateToTop(e) {
  //     e.preventDefault();
  //     let scrollToTop = window.setInterval(function() {
  //         let pos = window.pageYOffset;
  //         if ( pos > 0 && pageYOffset >= 10) {
  //             window.scrollTo(0, pos - 20);
  //             document.querySelector('.scrolimg').style.visibility = 'visible';
  //         } else {
  //             window.clearInterval(scrollToTop);
  //             document.querySelector('.scrolimg').style.visibility = 'visible';
  //         }
  //     }, 
  //     9
  //     )
  // } //END back totop


  // VIEW ALL MENU BUTTON---------------------------------------------------------------------------------------//

  // const buttonViewAll = document.getElementById("view-all");

  // buttonViewAll.addEventListener("click", () => {
  //   let hiddenMenu = document.getElementById("hidden-menu");
  //   // hiddenMenu.style.display = "grid";
  //   // element.classList.add("my-class");
  //   hiddenMenu.classList.remove("hidden");
  // });



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






   



//STICKY NAVIGATION*-----------------------------------------------------------------/

// window.onscroll = function() {myFunction()};

// var stickyHeader = document.getElementById("sticky-header");
// var hero = document.getElementById("hero");

// function myFunction() {
//   if (window.scrollY >= 500) {
//     stickyHeader.classList.add("sticky");
//     hero.classList.add("margin-top");

//   } else {
//     stickyHeader.classList.remove("sticky");
//     hero.classList.remove("margin-top");
//   }
// }



//ADD ACTIVE CLASS TO NAVBAR ELEMENT WHEN CLICKED

// const links = document.querySelectorAll('#nav-links a');
    
// if (links.length) {
//   links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       links.forEach((link) => {
//           link.classList.remove('active');
//       });
  
//       link.classList.add('active');
//     });
//   });
// }