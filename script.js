const products = [
  { name: "Men's Cotton Shirt", price: 699, img: "https://via.placeholder.com/250?text=Clothes" },
  { name: "Attar Perfume 10ml", price: 299, img: "https://via.placeholder.com/250?text=Perfume" },
  { name: "Islamic Book - Dua", price: 199, img: "https://via.placeholder.com/250?text=Book" },
  { name: "Silver Taweez", price: 499, img: "https://via.placeholder.com/250?text=Taweez" },
  { name: "Casual Shoes", price: 899, img: "https://via.placeholder.com/250?text=Shoes" },
  { name: "Non-Stick Pan", price: 599, img: "https://via.placeholder.com/250?text=Kitchen" }
];

const grid = document.getElementById("productGrid");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart('${p.name}')">Add to Cart</button>
    <button class="buy" onclick="buyNow('${p.name}', ${p.price})">Buy Now</button>
  `;
  grid.appendChild(div);
});

function addToCart(item) {
  alert(item + " added to cart!");
}

function buyNow(item, price) {
  const msg = `Hello, I want to buy *${item}* (₹${price}).\nPayment Mode: UPI or Cash on Delivery.`;
  const url = `https://wa.me/917570943831?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}