
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




    var productsLink=document.getElementById("ourProductsNav");
    productsLink.addEventListener("mouseenter", function(){
        // document.getElementById("opHoverId").style.display="block";
        // $('#opHoverId').css('display', 'block');
        $('#opHoverId').slideDown();
           
    });
    productsLink.addEventListener("mouseleave", function(){
        document.getElementById("opHoverId").style.display="none";
        // hideProducts();
    });

    var productsBlock=document.getElementById("opHoverId");
    productsBlock.addEventListener("mouseenter", function(){
        document.getElementById("opHoverId").style.display="block";
        // $('#opHoverId').css('display', 'block');      
        // $('#opHoverId').fadeIn(0);
    });
    productsBlock.addEventListener("mouseleave", function(){
        // document.getElementById("opHoverId").style.display="none";
        $('#opHoverId').slideUp();
        
    });

    function showProducts(){
      
    }

    function hideProducts(){
        $('#opHoverId').fadeOut('fast', function(){
            $('#opHoverId').css('display', 'none');
        });  
    }
