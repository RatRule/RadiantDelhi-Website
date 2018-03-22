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


// _________________SEARCH________________________________

var filterList=document.getElementById('searchBar');
filterList.addEventListener('keyup',filterProducts);


function filterProducts(){
    var count=0;
    searchInput=document.getElementById('searchBar').value.toUpperCase();
    console.log(searchInput);

    var products=document.getElementsByClassName('productList');
    for(i=0;i<products.length;i++){
        product=products[i].textContent.toLowerCase();
        searchString=searchInput.toLowerCase();
        if(product.includes(searchString)){
            products[i].style.display='block';
            count++;
        }else
            products[i].style.display='none';
    }
    if(count===0){
        console.log('failed')
        document.getElementById('searchFailed').style.display='block';
    }
    else if(count!=0){
        document.getElementById('searchFailed').style.display='none';
    }


}

$("#searchBar").keyup(function() {

    // .position() uses position relative to the offset parent, 
    // so it supports position: relative parent elements
    var pos = $(this).position();
    // .outerWidth() takes into account border and padding.
    var width = $(this).outerWidth();
    var height= $(this).outerHeight();
    $("#searchContainer").css({
        position: "absolute",
        top: (pos.top + height)+ "px",
        left: pos.left  + "px"
    });

    //show the menu directly over the placeholder
    if( $("#searchBar").val()=="") {
        $("#searchContainer").slideUp();
    }else{
        $("#searchContainer").slideDown();
    }
});



$(document).click(function(e) {  
    if( this.id != 'searchContainer') {
      $("#searchContainer").slideUp();
    }
  });
