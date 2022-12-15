
let carousel_div=document.getElementById("carousel");
let carou=document.getElementById("carou");

function carousel(){
    let images=[ "https://cdn.modesens.com/banner/20221212-modesens-MONCLER-1140x400-F_1670816985.jpg",
    "https://cdn.modesens.com/banner/20221206-modesens-HolidayGifts-1140x400-F_1670296818.jpg",
    "https://cdn.modesens.com/banner/20221123-modesens-LJ-holiday-1140x400_1669184089.jpg",
    "https://cdn.modesens.com/banner/20221212-modesens-HolidaySale-1140x400-EN_1670831157.jpg",
    "https://cdn.modesens.com/banner/20221214-modesens-Prada-1140x400-F-EN.jpg",
    "https://cdn.modesens.com/banner/20221212-modesens-Lululemon-1140x400-F-EN.jpg",
    "https://cdn.modesens.com/banner/20221213-modesens-Coltorti-1140x400-F-EN.jpg" ];

    let imgElement=document.createElement("img");
    imgElement.style.width="100%";

    let i=1;
    setInterval(function(){
        if(i==images.length){
            i=0;
        }
        imgElement.src=images[i];
        carousel_div.append(imgElement);
        i++ ;

    },3000);
}
carousel();

function carousel1(){
    let images=[ "https://i.ibb.co/F38mr6Q/1.jpg",
    "https://i.ibb.co/GVnYCL0/2.jpg",
    "https://i.ibb.co/2j4Df0P/3.jpg" ];

    let imgElement=document.createElement("img");
    imgElement.style.width="100%";

    let i=1;
    setInterval(function(){
        if(i==images.length){
            i=0;
        }
        imgElement.src=images[i];
        carou.append(imgElement);
        i++ ;

    },5000);
}
carousel1();







/*
let display=document.getElementById("display");
console.log(" i am here");

async function show(){
    try{
        let res=await fetch(`http://localhost:3000/products`);
        console.log("err",res);

        let data=await res.json();
        console.log("data",data);
        dom(data);
    }
    catch(err){
        console.log("err",err);
    }
};
show();

function dom(data){
    display.innerHTML=null

    data.forEach(function(el){
        let card=document.createElement("div");

        let image=document.createElement("img");
       image.src=el.image_url;

       let brand=document.createElement("h3");
       brand.innerText=el.brand;

       let category=document.createElement("h3");
       category.innerText="CATEGORY:-"+" "+el.category;

       let id=document.createElement("h3");
       id.innerText="ID:-"+" "+el.id;

       card.append(image,brand,category,id);
       display.append(card);
    })
}

*/