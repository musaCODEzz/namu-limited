// Initaializing all the variables
var Files = [];
var FileReaders = [];
var ImageLinksArray = [];

const imgdiv = document.getElementById("imagesDiv");
const selBtn = document.getElementById("selimgsbtn");
const addBtn = document.getElementById("addprodbtn");
const proglab = document.getElementById("loadlab");

const name = document.getElementById("nameinp");
const category = document.getElementById("catinp");
const description = document.getElementById("desarea");
const price = document.getElementById("priceinp");
const stock = document.getElementById("stockinp");

const p1 = document.getElementById("p1inp");
const p2 = document.getElementById("p2inp");
const p3 = document.getElementById("p3inp");
const p4 = document.getElementById("p4inp");


function OpenFileDialog() {
   
    let inp  = document.createElement("input");
    inp.type = "file";
    inp.multiple = "multiple";

    inp.onchange = (e) => {
        AssignImgsToFilesArray(e.target.files);
        CreateImgTags();
    }
    inp.click();
}


function AssignImgsToFilesArray(thefiles) {
    let num = Files.length + thefiles.length;
    let looplim = (num <=10) ? thefiles.length : (10 - Files.length);

    for (let i = 0; i < looplim; i++) {
        Files.push(thefiles[i]);
    }

    if(num > 10) {
        alert("You can only upload 10 images at a time.");
    }
}

function CreateImgTags() {
    imgdiv.innerHTML = "";
    imgdiv.classList.add('imagesDivStyle');

    for (let i = 0; i < Files.length; i++) {
    FileReaders[i] = new FileReader();
        FileReaders[i].onload = function() {
            var img = document.createElement("img");
            img.id = "imgNo" + i;
            img.classList.add("imgs");
            img.src = FileReaders[i].result;
            imgdiv.appendChild(img);
        }

        FileReaders[i].readAsDataURL(Files[i]);
    }

    let lab = document.createElement("label");
    lab.innerHTML = 'Clear images';
    lab.style = 'cursor: pointer; display:block; color: navy; font-size:12px';
    lab.addEventListener("click", ClearImages);
    imgdiv.append(lab);
}

function ClearImages() {
    Files = [];
    FileReaders = [];
    imgdiv.innerHTML = "";
    imgdiv.classList.remove('imagesDivStyle');
}

function getShortTitle(){
    let namey = name.value.substring(0, 50);
    return namey.replace(/[^a-zA-Z0-9 ]/g, "");
}


function GetImgUploadProgress(){
    return 'Images Uploaded ' + ImageLinksArray.length + ' of ' + Files.length;
}

function isAllImagesUploaded(){
    return (ImageLinksArray.length == Files.length);
}

function GetPoints(){
    let points = [];
    if(p1.value.length > 0) points.push(p1.value);
    if(p2.value.length > 0) points.push(p2.value);
    if(p3.value.length > 0) points.push(p3.value);
    if(p4.value.length > 0) points.push(p4.value);
    return points;
}


function RestoreBack(){
    selBtn.disabled = false;
    addBtn.disabled = false;
    
}
selBtn.addEventListener("click", OpenFileDialog);
addBtn.addEventListener("click", UploadAllImages);


//Uploading Images to the Firebase Storage
function UploadAllImages(){
    selBtn.disabled = true;
    addBtn.disabled = true;
    ImageLinksArray = [];

    for (let i = 0; i < Files.length; i++) {
        UploadAnImage(Files[i], i);
    }
}

function UploadAnImage(imgToUpload, ImgNo){
    const metadata = {
        contentType: imgToUpload.type
    };

    const storage = getStorage(app);

    const ImageAddress = "Images/" + getShortTitle() + "/img#" + (ImgNo + 1);
    const storageRef = sRef(storage, ImageAddress);
    const UploadTask = uploadBytesResumable(storageRef, imgToUpload, metadata);

    UploadTask.on('state_changed', (snapshot) => {
        proglab.innerHTML = GetImgUploadProgress();

    },
    (error) => {
        alert("An error occured while uploading the images.");
    },
    () => {
        getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
            ImageLinksArray.push(downloadURL);
            if(isAllImagesUploaded()){
                proglab.innerHTML = "Images Uploaded Successfully";
            UploadAProduct();
                
            }
        });
    }
    );
}


//Firebase Config

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

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

 import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";


// Firebase Realtime Database

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const realdb = getDatabase(app);



/// Upload a product to the database

    function UploadAProduct(){
        set(ref(realdb, 'TheProductRealdb/' + getShortTitle()), {
            ProductTitle: name.value,
            Category: category.value,
            Description: description.value,
            Price: price.value,
            Stock: stock.value,
            Points: GetPoints(),
            LinksOfImagesArray: ImageLinksArray

        });

        alert("Product Uploaded Successfully");
        RestoreBack();
        
    }



    //reset after upload
    function ResetAll(){
        name.value = "";
        category.value = "";
        description.value = "";
        price.value = "";
        stock.value = "";
        p1.value = "";
        p2.value = "";
        p3.value = "";
        p4.value = "";
        imgdiv.innerHTML = "";
        imgdiv.classList.remove('imagesDivStyle');
        proglab.innerHTML = "";
        Files = [];
        FileReaders = [];
        ImageLinksArray = [];
    }

    //get all products
    
