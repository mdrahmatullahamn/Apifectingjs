function dataFetching(){
    alert("working")
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => gettingProducts(res))

}
function gettingProducts(products){
    // console.log(products)
    var diFromHtml = document.getElementById('products');

    var allProducts = [];
    for( var i = 0; i < products.length; i++){
        allProducts +=  `<div><img src='${products[i].image}'/><h1>${products[i].title}</h1></div>`
    }

        diFromHtml.innerHTML=  allProducts;
}
