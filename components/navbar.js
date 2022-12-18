function navbar(){

    return `
    
    <div>
    <ul>
        <li>
            <img id="navimg" src="./Nav Images/logo.jpg" alt="">
        </li>
        <li>
            
        
            <a href="./women.html">WOMEN</a>
        <ul>
            <li><a href="">SHOP ALL</a></li>
            <li><a href="">CLOTHING</a></li>
            <li><a href="">BAGS</a></li>
            <li><a href="">SHOES</a></li>
            <li><a href="">ACCESSORIES</a></li>
            <li><a href="">BEAUTY</a></li>
            <li><a href="">PRE OWNED </a></li>
            <li><a href="">OCCASION</a></li>
        </ul>
        </li>
        <li><a href="./men.html">MEN</a>
            <ul>
                <li><a href="">SHOP ALL</a></li>
                <li><a href="">CLOTHING</a></li>
                <li><a href="">BAGS</a></li>
                <li><a href="">SHOES</a></li>
                <li><a href="">ACCESSORIES</a></li>
                <li><a href="">GROOMING</a></li>
                <li><a href="">PRE OWNED </a></li>
                <li><a href="">OCCASION</a></li>
            </ul>
        </li>
        <li><a href="./beauty.html">BEAUTY</a>
        <ul>
            <li><a href="">SHOP ALL</a></li>
            <li><a href="">WOMEN'S BEAUTY</a></li>
            <li><a href="">MEN'S GROOMING</a></li>
            <li><a href="">KID'S CARE</a></li>
            
        </ul>
        </li>
        <li><a href="#">KIDS</a>
        <ul>
            <li><a href="">SHOP ALL</a></li>
            <li><a href="">WOMEN'S BEAUTY</a></li>
            <li><a href="">MEN'S GROOMING</a></li>
            <li><a href="">GIRLS</a></li>
            <li><a href="">BOYS</a></li>
    
        </ul>
        </li>
        <li><a href="./index.html">HOME</a></li>
        <li><a href="#">DESIGNERS</a></li>
        <li><a href="#">COMMUNITY</a>
        <ul>
            <li><a href="">DISCOVER</a></li>
            <li><a href="">BLOGS</a></li>
            <li><a href="">MY CLOSET</a></li>
            <li><a href="">INFLUENCER PROGRAM</a></li>
        </ul>
        </li>
        <li><a href="#">WHY Fashion Gallery</a></li>
        <li><a href="#">SALE</a></li>
        <li><a href="#">GIFT GUIDE</a></li>
        <li><a href="#"><i class="fa-regular fa-bell"></i></a></li>
        <li><a href="./cart.html"><i class="fa-solid fa-bag-shopping"></i></a></li>
        <li><a href="./signup.html"><i class="fa-sharp fa-solid fa-user"></i></a>
        <ul>
            <li><a href=""></a>My Likes</li>
            <li><a href=""></a>My Alerts</li>
            <li><a href=""></a>My Recently Viewed</li>
            <li><a href=""></a>My Closet</li>
            <li><a href=""></a>My Orders</li>
            <li><a href=""></a>My Save Searches</li>
            <li><a href=""></a>My Loyalty</li>
            <li><a href=""></a>My Messages</li>
            <li><a href=""></a>Invite Friends</li>
            <li><a href=""></a>Settings</li>
            <li><a href=""></a>Signout</li>
        </ul>
        </li>
        
        <li id="search-input"><a href="#"><i class="fa-solid fa-magnifying-glass"></i>
            <input id="searchbtn" type="text" placeholder="search"></a></li>
        
    </ul>
    </div>
    
    `


}


function footer(){

    return `
    
    <hr style="width: 97%;height: 1px;border-width:0;background-color: gray;margin-top: 50px">

    <div id="footer_div">
        <div>
            <p class="footer_heading">CUSTOMER CARE</p>
            <a id="a-tag" href="https://modesens.com/protection/">Shopper Protection</a>
            <a id="a-tag" href="https://modesens.com/loyalty/">Loyalty Program</a>
            <a id="a-tag" href="https://modesens.com/faq/">Help Center</a>
            <a id="a-tag" href="https://modesens.com/size-guide/">Size Guides</a>
            <a id="a-tag" href="">Contact Us / Feedback</a>
            <a id="a-tag" href="https://modesens.com/faq/#shipping-return">Shipping / Returns</a>
            
        </div>
        <div>
            <p class="footer_heading">INFORMATION</p>
            <a id="a-tag" href="https://modesens.com/about/">About Us</a>
            <a id="a-tag" href="https://modesens.com/influencer/">Influencer Program</a>
            <a id="a-tag" href="https://modesens.com/stores/">Partner Stores</a>
            <a id="a-tag" href="https://modesens.com/fashion-sitemap/">Sitemap</a>
             
        </div>
        <div>
            <p class="footer_heading">LEGAL</p>
            <a id="a-tag" href="https://modesens.com/legal/">Terms Of Use</a>
            <a id="a-tag" href="https://modesens.com/disclosure/">Disclosure</a>
            <a id="a-tag" href="https://modesens.com/privacy/">Privacy Policy</a>
            <a id="a-tag" href="https://modesens.com/community-guidelines/">Community Guidelines</a>
               
        </div>
        <div>
            <p id="footer_connect" class="footer_heading">CONNECT WITH US</p>
            <div>
                <img src="https://cdn.modesens.com/static/img/20220815download_ios.svg" alt="">
                <img src="https://cdn.modesens.com/static/img/20220815download_android.svg" alt="">
                <img src="https://cdn.modesens.com/static/img/20220815down_chromestrore.svg" alt="">
            </div>
            
        </div>
        <div>
            <p class="footer_heading">SHARE THE LOVE</p>
            <p style="color: black;">Your friends will thank you - more than once</p>
            <input id="email" type="text" placeholder="Enter the email address separated by commas">
            <button id="btn">INVITE FRIENDS</button>
        </div>
    </div>

    <p>
        When you follow our links to visit a brand or retailer's website or make a purchase, Fashion Gallery may earn a commission.
    </p>

    <hr style="width: 97%;height: 1px;border-width:0;background-color: gray;margin-top: 50px;">

    <div id="footer-logo">
        <div>
            <img id="img" src="https://cdn.modesens.com/static/img/20180905footer_logo.svg" alt="">
            <p>© 2022, Fashion Gallery</p>
        </div>
        <div>
            <img id="img" src="https://cdn.modesens.com/static/img/20220726Pinterest.svg" alt="">
            <img id="img" src="https://cdn.modesens.com/static/img/20220726Twitter.svg" alt="">
            <img id="img" src="https://cdn.modesens.com/static/img/20220726Ins.svg" alt="">
            <img id="img" src="https://cdn.modesens.com/static/img/20220726Facebook.svg" alt="">
            <img id="img" src="https://cdn.modesens.com/static/img/20220726Weibo.svg" alt="">
            <img id="img" src="https://cdn.modesens.com/static/img/20220726Wechat.svg" alt="">
            <img id="img" src="https://cdn.modesens.com/static/img/20220726Reddit.svg" alt="">
            <img id="img" src="https://cdn.modesens.com/static/img/20220726Discord.svg" alt="">
            <img id="img" src="https://cdn.modesens.com/static/img/20220811Xiaohongshu.svg" alt="">
        </div>
    </div>

    
    `



}

export {navbar, footer} 