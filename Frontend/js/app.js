let cart = [];

fetch("https://marketplace-xbcg.onrender.com")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");
    data.forEach(p => {
      container.innerHTML += `
        <div style="border:1px solid #ccc;padding:10px;margin:10px">
          <h3>${p.name}</h3>
          <p>₦${p.price}</p>
          <p>${p.description}</p>
          <button onclick="addToCart('${p._id}','${p.name}','${p.price}')">Add to Cart</button>
        </div>
      `;
    });
  });

function addToCart(id, name, price) {
  cart.push({ id, name, price });
  alert(`${name} added to cart!`);
}

function checkoutCart() {
  if(cart.length === 0) return alert("Cart is empty!");
  let text = "I want to buy:%0A";
  cart.forEach(item => {
    text += `${item.name} for ₦${item.price}%0A`;
  });
  window.open("https://wa.me/2349166779919?text=" + text, "_blank");
}

