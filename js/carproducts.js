function getShortTitle(title){
    if(title.length > 49) title = title.substring(0,47) ;
    else return title;
    return title + '...';    
}


// Firebase Config


 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";


 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCc0i4PTao76lGF2Ijxbtt29Q82H9B14T4",
   authDomain: "namu-limited-admin.firebaseapp.com",
   databaseURL: "https://namu-limited-admin-default-rtdb.firebaseio.com",
   projectId: "namu-limited-admin",
   storageBucket: "namu-limited-admin.appspot.com",
   messagingSenderId: "392184257862",
   appId: "1:392184257862:web:2aa1803bb999d3483b5947"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Firebase Realtime Database

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const realdb = getDatabase(app);

var OuterDiv = document.getElementById('productsDiv');
var ArrayOfProducts = [];
window.addEventListener('load', GetAllProducts);


function GetAllProducts(){
    const dbRef = ref(realdb);
    get(child(dbRef, 'TheProductRealdb/'))
        .then((snapshot) => {
            snapshot.forEach(prod => {
                ArrayOfProducts.push(prod.val());
            });
            AddAllProducts();
        })
}

function AddAllProducts(){
    let i = 0;
    ArrayOfProducts.forEach(prod => {
        AddAProduct(prod, i++);
    });
    AssignAllEvents();
}

function AddAProduct(product, index){
    let html =
    `
        <img src="`+product. LinksOfImagesArray[0]+`" class="thumb mt-2" id="thumb-`+ index + `">
        <p class="title" id="title-`+ index + `">`+ getShortTitle(product.ProductTitle) +`</p>
        `+
        GetUl(product.Points)
        +
        GenerateStockLabel(product.Stock)
        +
        `

        <h5 class="price">Ksh. `+ product.Price +`</h5>
        <button class="detbtns btn" id="detbtn- `+index+`">View Details</button>
    `
    let newProd = document.createElement('div');
    newProd.classList.add('productcard');
    newProd.innerHTML = html;
    OuterDiv.append(newProd);
}
function GetUl(array){
    let ul = document.createElement('ul');
    ul.classList.add('points');
    array.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element;
        ul.append(li);
    });
    return ul.outerHTML;
}

function GenerateStockLabel(stock){
    let stocklabel = document.createElement('h5');
    stocklabel.classList.add('stock');

    if(stock > 0){
        stocklabel.innerHTML = 'IN STOCK';
        stocklabel.classList.add('text-success');
    }
    else{
        stocklabel.innerHTML = 'OUT OF STOCK';
        stocklabel.classList.add('text-warning');
    }
    return stocklabel.outerHTML;
}

function GetProductIndex(id){
    var indstart = id.indexOf('-') + 1;
    var indend = id.length;
    return Number(id.substring(indstart, indend));
}

function GotoProductDetails(event){
    var index = GetProductIndex(event.target.id);
    localStorage.Product = JSON.stringify(ArrayOfProducts[index]);
    window.location.href = 'products-details.html';
}

function AssignAllEvents(){
    var btns = document.getElementsByClassName('detbtns');
    var titles = document.getElementsByClassName('title');
    var thumbs = document.getElementsByClassName('thumb');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', GotoProductDetails);
        titles[i].addEventListener('click', GotoProductDetails);
        thumbs[i].addEventListener('click', GotoProductDetails);
    }


}