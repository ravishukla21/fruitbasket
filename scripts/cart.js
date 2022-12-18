let pro_list=document.getElementById("pro_list");
let sub=document.getElementById("sub");
let top2=document.getElementById("top2");
let code=document.getElementById("code");
let lucky=document.getElementById("lucky");
let final_checkout=document.getElementById("final_checkout");

var xyz=0;

// LUCKY DRAW OPTION
var lucky_countdown=0;
lucky.addEventListener("click",()=>{
    code.innerText=null;
    lucky_countdown++;
    if(lucky_countdown>3){
        alert("Sorry lucky draw chance expire")
        return ;
     }
    console.log("countdown",lucky_countdown);

    function raj(){
        let x = Math.random() * 50;
        discount=Math.ceil(x);
        console.log("x",discount)
        code.append(`Get a discount of ${discount}% on Total Price`);
        // total_price(discount)
        xyz=discount;
        async function hello(){
            try {
                let res=await fetch(`http://localhost:3000/cart`);
                //console.log("00",res);
        
                let data=await res.json();
                //console.log("01",data);
                //append(data);
                total_price(data)
            }catch(er){

            }
        }
        hello()
       // total_price(data)
    }
    raj();

   
})

console.log("xyz",xyz)

async function getProductToCart(){
    try {
        let res=await fetch(`http://localhost:3000/cart`);
        //console.log("00",res);

        let data=await res.json();
        //console.log("01",data);
        append(data);
        total_price(data)
    } catch (er) {
        alert(er)
    }
};
getProductToCart();

function total_price(data){
    sub.innerHTML=null;
    top2.innerText=null
console.log("discount mil",xyz);

    let item=0;
    let count=0;
    data.forEach( (el)=>{
        //console.log("count",el);
        
         item++;
        
        count=count+Math.ceil(el.price-(el.price)*el.offer/100);
        count=count-Math.ceil((xyz/100)*count)
        let amount=[];
        amount.push(count);
        localStorage.setItem("amount", JSON.stringify(amount)); 
    })
    //console.log("final_p",count,item);
    top2.append(`Your Cart (${item} Items)`)
    sub.append(`Total Price:  ₹ ${count}`)
}

// console.log("var",pay);
function append(data){
    pro_list.innerHTML=null 
   
    data.forEach( (el)=>{
        let card=document.createElement("div");
        card.setAttribute("class","proCard");

        let image=document.createElement("img");
        image.src=el.image_url;

        let brand=document.createElement("h3");
        brand.innerText=el.brand;

        let discr=document.createElement("p");
        discr.setAttribute("class","dis");
        discr.innerText=el.para;

        // let off=document.createElement("p");
        // off.innerText=el.offer;

        let price=document.createElement("p");
        price.setAttribute("class","prc");
        price.innerText="₹"+" "+Math.ceil(el.price-(el.price)*el.offer/100);
        
        let quantity=document.createElement("p");
        quantity.setAttribute("class","quant");
        quantity.innerText="1";

       let dlt=document.createElement("p");
       dlt.setAttribute("id","delete");
       dlt.innerText="DELETE";
       dlt.addEventListener("click",function(){
        console.log(el.id);
        let newID=el.id
         DeleteBtn(newID);
       })

        card.append(image,brand,discr,price,quantity,dlt);
        pro_list.append(card)
    })

};

async function DeleteBtn(ID){
    //console.log("id",data)
    try {
        let res=await fetch(`http://localhost:3000/cart/${ID}`,{
            method : "DELETE",
           
        });
        console.log("ser",res)
    } catch (er) {
        alert(er);
    }
}

// CHECKOUT FINAL
final_checkout.onclick=()=>{
    //console.log("gooo");
    window.location.href="./payment.html"
}