function realFecthing(){
    alert("working")
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res => res.json())
    .then(json => amaanAmn(json))
}
function amaanAmn(products){
    // console.log(products)
    var divAmaan = document.getElementById("pro");
    

    var allProducts = [];
    for(var i=0;i<products.length;i++){
        allProducts += `<div><h1>${products[i].title}</h1></div>`
//     }
    divAmaan.innerHTML= allProducts
}
}

