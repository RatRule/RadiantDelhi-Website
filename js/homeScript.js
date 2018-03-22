AOS.init() 

// <_____________LOGOS SLIDER_______________________
$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
  });
 


var slideIndex = 0;
showSlides();



function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 1500); // Change image every 2 seconds
}





// $(function(){  // $(document).ready shorthand
//   $('.monster').fadeIn('slow');
// });

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});



//     var productsLink=document.getElementById("ourProductsNav");
//     productsLink.addEventListener("mouseenter", function(){
        
//         $('#opHoverId').slideDown();
           
//     });
//     productsLink.addEventListener("mouseleave", function(){
//         document.getElementById("opHoverId").style.display="none";
       
//     });

//     var productsBlock=document.getElementById("opHoverId");
//     productsBlock.addEventListener("mouseenter", function(){
//         document.getElementById("opHoverId").style.display="block";
       
//     });
//     productsBlock.addEventListener("mouseleave", function(){
       
//         $('#opHoverId').slideUp();
        
//     });

//     function showProducts(){
      
//     }

//     function hideProducts(){
//         $('#opHoverId').fadeOut('fast', function(){
//             $('#opHoverId').css('display', 'none');
//         });  
//     }


//     // _________________SEARCH________________________________

//     var filterList=document.getElementById('searchBar');
//     filterList.addEventListener('keyup',filterProducts);


//     function filterProducts(){
//         var count=0;
//         searchInput=document.getElementById('searchBar').value.toUpperCase();
//         console.log(searchInput);

//         var products=document.getElementsByClassName('productList');
//         for(i=0;i<products.length;i++){
//             product=products[i].textContent.toLowerCase();
//             searchString=searchInput.toLowerCase();
//             if(product.includes(searchString)){
//                 products[i].style.display='block';
//                 count++;
//             }else
//                 products[i].style.display='none';
//         }
//         if(count===0){
//             console.log('failed')
//             document.getElementById('searchFailed').style.display='block';
//         }
//         else if(count!=0){
//             document.getElementById('searchFailed').style.display='none';
//         }


// }

// $("#searchBar").keyup(function() {
    
 
//     var pos = $(this).position();


   
//     var width = $(this).outerWidth();

//     var height= $(this).outerHeight();

    
//     $("#searchContainer").css({
        
//         position: "absolute",
//         top: (pos.top + height)+ "px",
//         left: pos.left  + "px"
//     }).slideDown();
   
// });

// $("#searchContainer").keypress(function(){
//     if( $("#searchContainer").text("")) {
//         $("#searchContainer").css({
//             display:"none"
//         })
//     }
// })


// $(document).click(function(e) {  
//     if( this.id != 'searchContainer') {
//       $("#searchContainer").slideUp();
//     }
//   });

