// This is the beginning of implementation for 6B; still in progress, please disregard for 6A
var cartArray = [];

// Roll object for cart
class roll{
    constructor(name, quantity, glaze, delivery , img) {
        this.name = name;
        this.quantity = quantity;
        this.glaze = glaze;
        this.delivery = delivery;
        this.img = img;
    }
}

// Begins cart count at 0
var cartCount = 0;

function onLoad(){
    console.log("local storage at load is " + localStorage.getItem("navCount"));
    var count = localStorage.getItem("navCount");
    if (count === null) {
        document.getElementById("cart-num").innerText = 0;
    }
    else {
        document.getElementById("cart-num").innerText = localStorage.getItem("navCount");
    }
}

function addToCart() {
    //Save desired item into new roll object
    var name = document.getElementById("pb-name").innerText;
    var quantity = document.getElementById("drop-qty").value;
    var glaze = document.getElementById("drop-glaze").value;
    var delivery = document.getElementById("drop-deliv").value;
    var img = document.getElementsByClassName("cp-img").src;
    const cartItem = new roll(name, quantity, glaze, delivery, img);
    if (localStorage.getItem("navCount") === null) {
        cartCount = cartCount + 1;
    }
    else {
        var storedCount = parseInt(localStorage.getItem("navCount"));
        cartCount = storedCount + 1;
    }
    console.log("storedCount is " + storedCount);
    console.log("cartCount is " + cartCount);
    localStorage.setItem("navCount", cartCount);
    console.log("local storage count is " + localStorage.getItem("navCount"));
    document.getElementById("cart-num").innerText = localStorage.getItem("navCount");

    // Beginning of implementation for 6B to save in local storage and load into cart page
    //const jsonItem = JSON.stringify(cartItem);
    //localStorage.setItem("cartObj", jsonItem);
    //cartArray.push(jsonItem);
}

