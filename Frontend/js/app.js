// FRONTEND CONFIG: Connect to Render Backend
const BASE_URL = "https://marketplace-xbcg.onrender.com"; // <- Your Render backend URL

// Example: Fetch products from backend
async function loadProducts() {
  try {
    const response = await fetch(`${BASE_URL}/api/products`);
    if (!response.ok) throw new Error("Network response was not ok");
    const products = await response.json();

    // Display products in console for now (later you can render to HTML)
    console.log("Products from backend:", products);

    // Example: render to HTML (adjust based on your project)
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    products.forEach(product => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
      `;
      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error fetching products:", error);
    document.getElementById("product-list").innerHTML = "<p>Failed to load products.</p>";
  }
}

// Call the function when page loads
window.addEventListener("DOMContentLoaded", loadProducts);
