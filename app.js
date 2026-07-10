const products = [

{
    id:1,
    name:"Fresh Apples",
    price:120,
    image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
},

{
    id:2,
    name:"Organic Bananas",
    price:60,
    image:"https://images.unsplash.com/photo-1603833665858-e61d17a86224"
},

{
    id:3,
    name:"Fresh Milk",
    price:65,
    image:"https://images.unsplash.com/photo-1550583724-b2692b85b150"
},

{
    id:4,
    name:"Brown Bread",
    price:45,
    image:"https://images.unsplash.com/photo-1509440159596-0249088772ff"
}

];

const productGrid =
document.getElementById("productGrid");

products.forEach(product=>{

productGrid.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">
₹${product.price}
</p>

<button
class="add-cart"
onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

</div>

`;

});

function addToCart(id){

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

cart.push(id);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert("Product added to cart");

}

function updateCartCount(){

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

document.getElementById(
"cartCount"
).textContent = cart.length;

}

updateCartCount();