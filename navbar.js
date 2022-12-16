function navbar(){

    return `
    <div>
    <ul>
        <li>
            <img id="navimg" src="./Nav Images/logo.jpg" alt="">
        </li>
        <li>
            
        
            <a href="#">WOMEN</a>
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
        <li><a href="#">MEN</a>
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
        <li><a href="#">BEAUTY</a>
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
        <li><a href="#">HOME</a></li>
        <li><a href="#">DESIGNERS</a></li>
        <li><a href="#">COMMUNITY</a>
        <ul>
            <li><a href="">DISCOVER</a></li>
            <li><a href="">BLOGS</a></li>
            <li><a href="">MY CLOSET</a></li>
            <li><a href="">INFLUENCER PROGRAM</a></li>
        </ul>
        </li>
        <li><a href="#">WHY MODESANS</a></li>
        <li><a href="#">SALE</a></li>
        <li><a href="#">GIFT GUIDE</a></li>
        <li><a href="#"><i class="fa-regular fa-bell"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>
        <li><a href=""><i class="fa-sharp fa-solid fa-user"></i></a>
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
    </div>`


}

export default navbar