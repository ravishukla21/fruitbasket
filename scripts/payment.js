let amount=JSON.parse(localStorage.getItem("amount"));
let amount_to_show=document.getElementById("amount_to_show");
let backBtn=document.getElementById("backBtn");
let payButton=document.getElementById("payButton");

function amount_local(){
    amount_to_show.innerText=`AMOUNT : ₹ ${amount}/-`;
};
amount_local()


backBtn.onclick=()=>{
    window.location.href="./cart.html";
}

//final payment click
payButton.onclick=async()=>{
try {
    let res=await fetch(`http://localhost:3000/cart`);
    let data=await res.json();
    remove(data);
    
} catch (er) {
    alert(er)
}

    
}



console.log("am",amount)

function remove(data){
   // console.log("new",data);
     for(let i=0; i<=data.length-1; i++){
        let el=data[i]
        let ID=el.id
        console.log("el_data",el)
        console.log("el.id",ID)
        removeProductforCart(ID)
        
    }
    window.location.href="index.html"
    alert("Order Successfull Placed")
    
   
};

async function removeProductforCart(ID){
    //console.log("id",data)
    try {
        let res=await fetch(`http://localhost:3000/cart/${ID}`,{ 
        //console.log("resss",res)
             method : "DELETE",
            // headers:{
            //     "content-type":"application/json"
            // }
            
           
      });
        
        
    } catch(er){
        console.log(er)
    }
    let amount=[];
    localStorage.setItem("amount",JSON.stringify(amount));
    amount_local()
}

/*
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

*/