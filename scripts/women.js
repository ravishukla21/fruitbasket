
let carousel_div=document.getElementById("carousel");
let carou=document.getElementById("carou");
let newToSale=document.getElementById("newToSale");
let trending_More=document.getElementById("trending_More");

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

// Fetch data to show on new to sale space
// http://localhost:3000/products?_page=2&&_limit=4

async function newtosale(page){
    try {
        let res= await fetch(`http://localhost:3000/products?_page=${page}&&_limit=4`);        /* ?_limit=4 */
        //console.log("res",res)
        let data=await res.json();
        console.log("wo",data)
            newtosaleAppend(data);
        
    } catch (error) {
        console.log("err",error)
    }
};
newtosale(1);





function newtosaleAppend(data){
    
    newToSale.innerHTML=null;

    data.forEach(function(el){
       // console.log("el",el);
       if(el.category=="women"){
        console.log("123",el)
        let card=document.createElement("div");

        let image=document.createElement("img");
        image.src=el.image_url;
        image.style.width="230px";

        let brand=document.createElement("h3");
        brand.innerText=el.brand;
        brand.style.fontFamily=" system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        brand.style.textAlign="center";
        brand.style.fontWeight="500";
        

        let dis=document.createElement("p");
        dis.innerText=el.para;
        dis.style.width="240px"
        dis.style.height = "20px";
        dis.style.fontFamily=" system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        dis.style.color="gray";
        dis.style.overflow = "hidden";
        dis.style.marginTop="-10px"

        let price_div=document.createElement("div");
        price_div.style.display="flex";
        price_div.style.width="100%";
        price_div.style.marginLeft="15%";
        price_div.style.marginTop="-15px"
        // price_div.style.justifyContent="spaceBetween"

        let off=document.createElement("p");
        off.innerText=`₹ ${el.price} (${el.offer}% OFF)`;
        off.style.color="red";
        off.style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
        off.style.fontWeight="500";

        let finalPrice=document.createElement("p");
        finalPrice.innerText="-"+"₹"+Math.ceil(el.price-(el.price)*el.offer/100);
        finalPrice.style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        finalPrice.style.fontWeight="500";
        //let finalPrice=Math.ceil((el.price)*el.offer/100);

        let store=document.createElement("p");
        store.innerText="COMPARE 15 STORES";
        store.style.color="gray";
        store.style.textAlign="center";
        // store.style.marginTop="0px";
        store.style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

        let addToCart=document.createElement("button");
        addToCart.innerText="ADD TO CART";
        addToCart.style.marginLeft="25%";
        addToCart.style.backgroundColor="white";
        addToCart.style.padding="10px";
        addToCart.style.border="0.5px solid";
        addToCart.onmouseover=()=>{
            addToCart.style.backgroundColor="black";
            addToCart.style.border="0.5px solid white";
            addToCart.style.color="white";
        };
        addToCart.onmouseleave=()=>{
            addToCart.style.backgroundColor="white";
            addToCart.style.border="0.5px solid black";
            addToCart.style.color="black";
        }

        
        price_div.append(off,finalPrice)
        card.append(image,brand,dis,price_div,addToCart,store);
        newToSale.append(card)
       }
    })
}



let count=1;
let lessthan=document.getElementById("lessthan");
let greaterthan=document.getElementById("greaterthan")

lessthan.addEventListener("click",function(){
    addup()
});

function addup(){
    if(count==5){
        return
    }else{
        count++ ;
    }
    newtosale(count)
}

greaterthan.addEventListener("click",function(){
    subup();
});
function subup(){
    if(count==1){
        return ;
    }else{
        count-- ;
    }
    
    newtosale(count)
}

//TRENDING MORE SECTION

async function trendingMore(page){
    try {
        let res= await fetch(`http://localhost:3000/products?_page=${page}&&_limit=4`);        /* ?_limit=4 */
        //console.log("res",res)
        let data=await res.json();
        console.log("woi1",data)
        trndingMoreAppend(data);
        
    } catch (error) {
        console.log("err",error)
    }
};
trendingMore(12);

function trndingMoreAppend(data){
    
    trending_More.innerHTML=null;

    data.forEach(function(el){
        console.log("elio",el);
       if( el.subcategory=="grooming"){
        console.log("123",el)
        let card=document.createElement("div");

        let image=document.createElement("img");
        image.src=el.image_url;
        image.style.width="230px";
        image.style.height="300px"

        let brand=document.createElement("h3");
        brand.innerText=el.brand;
        brand.style.fontFamily=" system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        brand.style.textAlign="center";
        brand.style.fontWeight="500";
        

        let dis=document.createElement("p");
        dis.innerText=el.para;
        dis.style.width="240px"
        dis.style.height = "20px";
        dis.style.fontFamily=" system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        dis.style.color="gray";
        dis.style.overflow = "hidden";
        dis.style.marginTop="-10px"

        let price_div=document.createElement("div");
        price_div.style.display="flex";
        price_div.style.width="100%";
        price_div.style.marginLeft="15%";
        price_div.style.marginTop="-15px"
        // price_div.style.justifyContent="spaceBetween"

        let off=document.createElement("p");
        off.innerText=`₹ ${el.price} (${el.offer}% OFF)`;
        off.style.color="red";
        off.style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
        off.style.fontWeight="500";

        let finalPrice=document.createElement("p");
        finalPrice.innerText="-"+"₹"+Math.ceil(el.price-(el.price)*el.offer/100);
        finalPrice.style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        finalPrice.style.fontWeight="500";
        //let finalPrice=Math.ceil((el.price)*el.offer/100);

        let store=document.createElement("p");
        store.innerText="COMPARE 15 STORES";
        store.style.color="gray";
        store.style.textAlign="center";
        // store.style.marginTop="0px";
        store.style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

        let addToCart=document.createElement("button");
        addToCart.innerText="ADD TO CART";
        addToCart.style.marginLeft="25%";
        addToCart.style.backgroundColor="white";
        addToCart.style.padding="10px";
        addToCart.style.border="0.5px solid";
        addToCart.onmouseover=()=>{
            addToCart.style.backgroundColor="black";
            addToCart.style.border="0.5px solid white";
            addToCart.style.color="white";
        };
        addToCart.onmouseleave=()=>{
            addToCart.style.backgroundColor="white";
            addToCart.style.border="0.5px solid black";
            addToCart.style.color="black";
        }

        
        price_div.append(off,finalPrice)
        card.append(image,brand,dis,price_div,addToCart,store);
        trending_More.append(card)
       }
    })
}

let sount=12;
let trendingless=document.getElementById("trendingless");
let trendinggreater=document.getElementById("trendinggreater")

trendingless.addEventListener("click",function(){
    adup()
});

function adup(){
    if(sount==15){
        return
    }else{
        sount++ ;
    }
    trendingMore(sount)
}

trendinggreater.addEventListener("click",function(){
    subbup();
});
function subbup(){
    if(sount==12){
        return ;
    }else{
        sount-- ;
    }
    
    trendingMore(sount)
}

