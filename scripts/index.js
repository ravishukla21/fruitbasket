import {navbar, footer} from "../components/navbar.js";

let navdiv = document.getElementById("navbar");

navdiv.innerHTML = navbar();

let footdiv = document.getElementById("footer");

footdiv.innerHTML = footer();




let brandimages= [
    "https://cdn.modesens.com/banner/20220708-SSENSE-logo.png",
    "https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png",
    "https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png",
    "https://cdn.modesens.com/banner/20220708-NOBLEMARS-logo.png",
    "https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png",
    "https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png",
    "https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png",
    "https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png",
    "https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png",
    "https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png",
    
    
    
]




let images = [

    "https://modesens.com/banner/14398/getimg/?img=%2Fbanner%2F20221212-modesens-HolidaySale-1140x400-EN_1670831157.jpg",
    "https://cdn.modesens.com/banner/20221123-modesens-LJ-holiday-1140x400_1669184089.jpg",
    "https://cdn.modesens.com/banner/20221214-modesens-Prada-1140x400-F-EN.jpg",
    "https://cdn.modesens.com/banner/20221212-modesens-Lululemon-1140x400-F-EN.jpg",
    "https://cdn.modesens.com/banner/20221213-modesens-Coltorti-1140x400-F-EN.jpg",
    "https://cdn.modesens.com/banner/20221208-modesens-LeaningIntoLuxe-1140x400-EN.jpg",
    "https://cdn.modesens.com/banner/20221118-modesens-Gift-1140x400_1668667138.jpg",
    "https://cdn.modesens.com/banner/20221213-modesens-PartyLooks-1140x400-F_1670903206.jpg",
    "https://cdn.modesens.com/banner/20221212-modesens-MONCLER-1140x400-F_1670816985.jpg",
    "https://cdn.modesens.com/banner/20221206-modesens-HolidayGifts-1140x400-F_1670296818.jpg"
]





function Carousel() {


    let carousel_div = document.getElementById("Carousel")

    let imgElement = document.createElement("img");

    imgElement.src = images[0]

    imgElement.setAttribute("id", "slideImg");

    carousel_div.append(imgElement);


    let i = 1;

    setInterval(function () {

        if (i === images.length) {

            i = 0
        }

        imgElement.src = images[i]

        carousel_div.append(imgElement)

        i++



    }, 3000)

}

Carousel()





function brand(data) {

    let brand_div = document.getElementById("brandimg");

    brand_div.innerHTML = null;

    data.forEach(function (el) {

        let div1 = document.createElement("div")

        let img1 = document.createElement("img");

        img1.src = el;

        img1.setAttribute("id", "bimg")
        div1.append(img1);


        brand_div.append(div1)

    })


}

brand(brandimages)




const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})






const productContainers1 = [...document.querySelectorAll('#pro-container')];
const nxtBtn1 = [...document.querySelectorAll('.nxt-btn1')];
const preBtn1 = [...document.querySelectorAll('.pre-btn1')];

productContainers1.forEach((item, i) => {
    let containerDimensions1 = item.getBoundingClientRect();
    let containerWidth1 = containerDimensions1.width;

    nxtBtn1[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth1;
    })

    preBtn1[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth1;
    })
})

