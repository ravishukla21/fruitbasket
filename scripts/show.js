

// https://636d5e73b567eed48ac032d6.mockapi.io/user
async function tooofoo(){
    try {
        let res=await fetch(` http://localhost:3000/products`);
        console.log("res",res);
        let data=await res.json();
        console.log("data",data)
        appendgriddata(data)
    } catch (err) {
        console.log("err",err);
    }
}
tooofoo()


function appendgriddata(data){
   let appendto=document.getElementById("appendto");
    data.forEach(function(el){
       
        let card=document.createElement("div");
        card.style.border="0px solid red";
        card.style.padding="7px";
        card.style.boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px";

        card.onmouseover=()=>{
            card.style.boxShadow= "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
        };
        card.onmouseleave=()=>{
            card.style.boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px";

        }

        let option = document.createElement("div");
        option.style.display="flex";
        option.style.border="0px solid blue"
        option.style.marginTop="-15px"
      
        option.style.gap="0PX"

        let image=document.createElement("img");
        image.src= el.image_url;
        image.style.width="90%";
        image.style.marginLeft="13px"

        let name=document.createElement("p");
        name.innerText=el.category;
        name.style.fontWeight="500";
        name.style.textAlign="center";
        name.style.fontFamily= "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

        let price=document.createElement("h3");
        price.innerText="₹"+" "+el.price+"/-";
        price.style.textAlign="center";
        price.style.color="red";
        price.style.marginTop="-10px"
        price.style.fontFamily= "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

        let edit=document.createElement("button");
        edit.innerText="Edit";
        edit.style.color="white";
        edit.style.backgroundColor="green";
        edit.style.margin="auto";
        edit.style.border="1px solid green";
       edit.style.width="50px"
        edit.style.padding="5px";
        edit.addEventListener("click",function(){
            alert("hi you added")
            // localStorage.setItem("edit",JSON.stringify(edit))
        })
        

        let dlt=document.createElement("button");
        dlt.innerText="Delete";
        dlt.style.color="white";
        dlt.style.backgroundColor="red";
        dlt.style.border="1px solid red"
        dlt.style.margin="auto";
        dlt.style.padding="5px"

        option.append(edit,dlt)
        card.append(image,name,price,option);
        appendto.append(card)
    })
}
//appendgriddata(girdData)


let proclick=document.getElementById("proclick");

proclick.onmouseover=()=>{
    console.log("pro");

    let click=document.getElementById("click");
    click.style.display="block";
    click.onmouseover=()=>{
        let click=document.getElementById("click");
    click.style.display="block";
    }

}
proclick.onmouseleave=()=>{
    console.log("dgh");

    let click=document.getElementById("click");
    click.style.display="none";
    click.onmouseleave=()=>{
        let click=document.getElementById("click");
    click.style.display="none";
    }

}

