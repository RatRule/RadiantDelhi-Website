document.addEventListener('DOMContentLoaded', function() {
    const app = firebase.app();
    const db = firebase.firestore();
    const storage = firebase.storage();

    let productList = [];
    let filteredProducts = [];
    let categoryList = [];

    function addProduct(product){
        db.collection('products').doc().set(product).then(()=>{
            alert('product added');
        }).catch((error)=>{
            alert(error);
            console.error(error);
        })
    }

    // addProduct({
    //     name: 'Loctite 498',
    //     price: 656,
    //     description: 'This is a best seller'
    // });
    
    
    
    fetchProductList()
    // fetchCategoryList();

    function fetchProductList(){
        db.collection('products').get().then((querySnapshot)=>{
            querySnapshot.forEach(doc => {
                var product = doc.data();
                product.id = doc.id;
                productList.push(product);
            });
            // showProductList();
            showProducts();
            showProductList();
        }).catch((error)=>{
            console.log(error);
        });
    }

    function fetchCategoryList(){
        productList.forEach(function(productData) {
            var fCategory = productData.category;
            if(!categoryList.includes(fCategory)) categoryList.push(fCategory);
        });
        return categoryList;
    }    

    function getProducts(category){
        filteredProducts=[];
       productList.forEach(function(product){
           if(product.category==category){
            filteredProducts.push(product);
           }
           
       })
       return filteredProducts;
       

    }

    function showProducts(){
        $.get("index/productsMenu.html", data =>{
               categoryList = fetchCategoryList();
               categoryList.forEach(function(category){
                    var productsMenu = $($.parseHTML(data)); 
                    productsMenu.find("#category").text(category);
                    var products = getProducts(category);
                    products.forEach(product=>{
                        productsMenu.find("#productList").append("<a><span>"+product.name+"</span> </a> <br>")
                    });
                    $("#opMenu").append(productsMenu); 
                });
        });
    }

    
    function showProductList(){
        $.get("index/searchContainer.html", data =>{
            console.log(productList);
            productList.forEach((product)=>{
                console.log(product.name);
                var products = $($.parseHTML(data));
                
                products.find("#productName").append(product.name);
                console.log(products.html());
                $("#searchItem").append(products);    
            });
        

        });
    }
});