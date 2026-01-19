function addProduct() {
  fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
      image: document.getElementById("image").value,
      description: document.getElementById("desc").value
    })
  })
  .then(res => res.json())
  .then(() => alert("Product Added Successfully"));
}
