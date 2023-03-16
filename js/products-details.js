

let product = null;
window.onload = function(){
    product  = localStorage.Product;
    if(product){
        product = JSON.parse(product);
        LoadProduct();
    }
}


function LoadProduct(){
    document.getElementById('titleli').innerHTML = product.ProductTitle;
    document.getElementById('titletop').innerHTML = product.ProductTitle;
    document.getElementById('catlink').innerHTML = product.Category;
    document.getElementById('bigimg').src = product.LinksOfImagesArray[0];
    document.getElementById('title').innerHTML = product.ProductTitle;
    document.getElementById('price').innerHTML = 'Ksh. ' + product.Price;
    document.getElementById('description').innerHTML = product.Description;

    if(product.Stock < 1)document.getElementById('btnDiv').innerHTML = '<h3 class="text-warning">Out of Stock</h3>';
    GenLi();
    GenImgs();
}

function GenLi(){
   product.Points.forEach(html => {
    if(html.length > 1){
        var li = document.createElement('li');
        li.innerHTML = html;
        document.getElementById('points').append(li);

    }
    });
}

function GenImgs(){
    let i = 1;
    let html = '';
    product.LinksOfImagesArray.forEach(imglink => {
        let img = document.createElement('img');
        img.src = imglink;
        img.classList.add("smimgs", "mr-2","mb-2");
        img.id = 'im'+ (i++);
        img.addEventListener('click', ChangeBigImg);
        document.getElementById('smlimgsDiv').append(img);


    });  
}
function ChangeBigImg(event){
    let elem = document.getElementById(event.target.id);
    document.getElementById('bigimg').src = elem.src;
}