let short2=document.getElementById("short2");
let gender=document.getElementById("gender");
let price=document.getElementById("price");
let short1c=document.getElementById("short1c");
let condition=document.getElementById("condition");
// let kid=document.getElementById("kid");
// kid.addEventListener("click",()=>{
//     console.log(kid.id)
// })
    

// short1c.addEventListener("click",function(){
//     console.log("123456");
//     console.log("value",short1c.id)
// });
// let men=document.getElementById("men");
// men.addEventListener("click",function(){
//     console.log("MENS",men.id)
// })

async function toget(){
    
    try {
        let res=await fetch(`http://localhost:3000/products`);

        let data=await res.json();
        console.log("data",data)
        
        Append(data);
    } catch (err) {
        console.log("err",err)
    }
   
};
toget();


function Append(data){
    
    short2.innerHTML=null;

    data.forEach(function(el){
       // console.log("el",el);
       
       // console.log("123",el)
        let card=document.createElement("div");
        card.style.border="0px solid red";
        card.style.padding="10px";
        card.style.boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
        card.style.borderRadius="30px";
        

        let image=document.createElement("img");
        image.src=el.image_url;
        image.style.width="80%";
        image.style.height="330px";
        image.style.marginLeft="10%";
        image.style.borderRadius="30px";
        image.style.paddingTop="20px";
        

        let brand=document.createElement("h3");
        brand.innerText=el.brand;
        brand.style.fontFamily=" system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        brand.style.textAlign="center";
        brand.style.fontWeight="500";

        

        let dis=document.createElement("p");
        dis.innerText=el.para;
        dis.style.width="280px"
        dis.style.height = "20px";
        dis.style.textAlign="center"
        dis.style.fontFamily=" system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
        dis.style.color="gray";
        dis.style.overflow = "hidden";
        dis.style.marginTop="-10px"

        let price_div=document.createElement("div");
        price_div.style.display="flex";
        price_div.style.width="100%";
        price_div.style.marginLeft="17%";
        price_div.style.marginTop="-15px"
        price_div.style.marginBottom="-10px"
        // price_div.style.justifyContent="spaceBetween"

        let off=document.createElement("p");
        off.innerText=`₹ ${el.price} (${el.offer}% OFF)`;
        off.style.color="red";
        off.style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
        off.style.fontWeight="500";

        let finalPrice=document.createElement("p");
        finalPrice.innerText="-"+"₹"+Math.ceil(el.price-(el.price)*el.offer/100);
        finalPrice.style.fontSize="24px";
        finalPrice.style.marginTop="13px";
        finalPrice.style.marginLeft="5px"
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
        addToCart.style.marginLeft="33%";
        addToCart.style.backgroundColor="white";
        addToCart.style.padding="10px";
        addToCart.style.border="0.5px solid";
        addToCart.style.borderRadius="10px"
        addToCart.onmouseover=()=>{
            addToCart.style.backgroundColor="black";
            addToCart.style.border="0.5px solid white";
            addToCart.style.color="white";
            addToCart.style.cursor="pointer"
        };
        addToCart.onmouseleave=()=>{
            addToCart.style.backgroundColor="white";
            addToCart.style.border="0.5px solid black";
            addToCart.style.color="black";
        };

        addToCart.addEventListener("click",function(){
            
            console.log("ele",el);
            addProductToCart(el);
        })

        
        price_div.append(off,finalPrice)
        card.append(image,brand,dis,price_div,addToCart,store);
        short2.append(card)
       
    })
};
        // ADD PRODUCT TO CART PAGE;- 
  async function addProductToCart(de){
     
     try {
       // console.log("de",de);

        let post_request =  fetch("http://localhost:3000/cart",{
			method : "POST",
			headers : {
				"Content-Type": "application/json",
               // Authorization: `Bearer ${sessionStorage.getItem("access_token")}`
			},
			body : JSON.stringify(de)
		})
        
        
    } catch (errr) {
        alert(err);
    }
    

}

//SORTING FOR MALE AND WOMEN

// gender.addEventListener("change",function(){
//     if(gender.value==""){
//         toget();
//     }else if(gender.value=="male"){
//         shorting_gender();
//     }
// })

// async function shorting_gender(){
//     try {
//         let res=await fetch(`http://localhost:3000/products?_sort=price`);
//         console.log("sort",res);
//         let data=await res.json();
//         console.log("sort_data",data)
//     } catch (err) {
//         alert(err)
//     }
// }

// SORTING BY PRICE

price.addEventListener("change",function(){
        if(price.value==""){
            toget();
        }else if(price.value=="HTL"){
            shorting_priceHTL();
        }else if(price.value=="LTH"){
            shorting_priceLTH()
        }
    })
    
    async function shorting_priceHTL(){
        try {
            let res=await fetch(`http://localhost:3000/products?_sort=price&_order=desc`);
            console.log("sort",res);
            let data=await res.json();
            console.log("sort_data",data);
            Append(data)
        } catch (err) {
            alert(err)
        }
    };

    async function shorting_priceLTH(){
        try {
            let res=await fetch(`http://localhost:3000/products?_sort=price&_order=asc`);
            console.log("sort",res);
            let data=await res.json();
            console.log("sort_data",data);
            Append(data)
        } catch (err) {
            alert(err)
        }
    }
    
    //  SORTING BY OFFER:-
    
    condition.addEventListener("change",function(){
        if(condition.value==""){
            toget();
        }else if(condition.value=="OHTL"){
            shorting_offerHTL();
        }else if(condition.value=="OLTH"){
            shorting_offerLTH()
        }
    });

    async function shorting_offerHTL(){
        try {
            let res=await fetch(`http://localhost:3000/products?_sort=offer&_order=desc`);
            console.log("sort",res);
            let data=await res.json();
            console.log("sort_data",data);
            Append(data)
        } catch (err) {
            alert(err)
        }
    };

    async function shorting_offerLTH(){
        try {
            let res=await fetch(`http://localhost:3000/products?_sort=offer&_order=asc`);
            console.log("sort",res);
            let data=await res.json();
            console.log("sort_data",data);
            Append(data)
        } catch (err) {
            alert(err)
        }
    }
    

    //REST IN PEACE

     gender.addEventListener("change",function(){
            if(gender.value==""){
                toget();
            }else if(gender.value=="male"){
                shorting_gender();
            }else if(gender.value=="women"){
                shorting_gender_women();
            }
        })

    async function shorting_gender(){
        try {
            let res=await fetch(`http://localhost:3000/products`);
           // console.log("mil",res);
            let data=await res.json();
            //console.log("milData",data);
            var arr=[];
            for(let i of data){
                if(i.category=="men"){
                    arr.push(i);
                   // console.log(i)
                }
            }
            console.log("arr",arr);
            Append(arr)
            
        } catch (err) {
            console.log("err",err)
        }
    } ;

    async function shorting_gender_women(){
        try {
            let res=await fetch(`http://localhost:3000/products`);
            let data=await res.json();
            //console.log("milData",data);
            var arr_female=[];
            for(let i of data){
                if(i.category=="women"){
                    arr_female.push(i);
                } 
            }
            // console.log("arr_fe",arr_female);
            Append(arr_female)
            
        } catch (err) {
            console.log("err",err)
        }
    } ;
    
    // To get id of products company;-

    let men=document.getElementById("men");
    let grooming=document.getElementById("grooming");
    let GUCCI=document.getElementById("GUCCI");
    let Anouk=document.getElementById("Anouk");
    let Chevron=document.getElementById("Chevron");
    let MFB=document.getElementById("MFB");
    let Nayo=document.getElementById("Nayo");
    let Yash_gallery=document.getElementById("Yash gallery");
    let Juniper=document.getElementById("Juniper");
    let Sngria=document.getElementById("Sngria");
    let Arrabi=document.getElementById("Arrabi");
    let US_Polo_Assn=document.getElementById("U.S. Polo Assn.");
    let Roadster=document.getElementById("men");
    let KLOTTHE=document.getElementById("KLOTTHE");
    let MastHarbour=document.getElementById("Mast & Harbour");
    let PUMA=document.getElementById("PUMA");
    let WROGN=document.getElementById("WROGN");                                         //DIOR
    let HRXbyHrithikRoshan=document.getElementById("HRX by Hrithik Roshan");
    let LAMER=document.getElementById("LA MER");
    let KIEHSINCE1851=document.getElementById("KIEHL'S SINCE 1851");
    let STAUD=document.getElementById("STAUD");
    let SAINTLAURENT=document.getElementById("SAINT LAURENT");
    let MARCJACOBS=document.getElementById("MARC JACOBS");
    let ALEXANDERWANG=document.getElementById("ALEXANDER WANG");
    let CLINIQUE=document.getElementById("CLINIQUE");
    let JACKBLACK=document.getElementById("JACK BLACK");
    let DIOR=document.getElementById("DIOR");
    let BURBERRY=document.getElementById("BURBERRY");
    let BAOBAOISSEYMIYAKE=document.getElementById("BAO BAO ISSEY MIYAKE");
    
//add event listner
men.addEventListener("click",()=>{findout(men.id)});
grooming.addEventListener("click",()=>{findout(Anouk.id)});
GUCCI.addEventListener("click",()=>{findout(GUCCI.id)});
Anouk.addEventListener("click",()=>{findout(Anouk.id)});
Chevron.addEventListener("click",()=>{findout(Chevron.id)});
MFB.addEventListener("click",()=>{findout(MFB.id)});
Nayo.addEventListener("click",()=>{findout(Nayo.id)});
Yash_gallery.addEventListener("click",()=>{findout(Yash_gallery.id)});
Juniper.addEventListener("click",()=>{findout(Juniper.id)});
Sngria.addEventListener("click",()=>{findout(Sngria.id)});
Arrabi.addEventListener("click",()=>{findout(Arrabi.id)});
US_Polo_Assn.addEventListener("click",()=>{findout(US_Polo_Assn.id)});
Roadster.addEventListener("click",()=>{findout(Roadster.id)});
KLOTTHE.addEventListener("click",()=>{findout(KLOTTHE.id)});
MastHarbour.addEventListener("click",()=>{findout(MastHarbour.id)});
PUMA.addEventListener("click",()=>{findout(PUMA.id)});
WROGN.addEventListener("click",()=>{findout(WROGN.id)});
HRXbyHrithikRoshan.addEventListener("click",()=>{findout(HRXbyHrithikRoshan.id)});
LAMER.addEventListener("click",()=>{findout(LAMER.id)});
KIEHSINCE1851.addEventListener("click",()=>{findout(KIEHSINCE1851.id)});
STAUD.addEventListener("click",()=>{findout(STAUD.id)});
SAINTLAURENT.addEventListener("click",()=>{findout(SAINTLAURENT.id)});
MARCJACOBS.addEventListener("click",()=>{findout(MARCJACOBS.id)});
ALEXANDERWANG.addEventListener("click",()=>{findout(ALEXANDERWANG.id)});
CLINIQUE.addEventListener("click",()=>{findout(CLINIQUE.id)});
JACKBLACK.addEventListener("click",()=>{findout(JACKBLACK.id)});
BURBERRY.addEventListener("click",()=>{findout(BURBERRY.id)});
BAOBAOISSEYMIYAKE.addEventListener("click",()=>{findout(BAOBAOISSEYMIYAKE.id)});
DIOR.addEventListener("click",()=>{findout(DIOR.id)});

    async function findout(look){
        try{
            let res=await fetch(`http://localhost:3000/products?q=${look}`);
           // console.log("ser",res);
            let data=await res.json();
            console.log("aat",data);
            Append(data)
        }
        catch(err){
            alert(err)
        }
    }
    
    