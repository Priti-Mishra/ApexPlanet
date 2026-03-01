let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
  let list = document.getElementById("taskList");
  if (!list) return;

  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;

    let del = document.createElement("button");
    del.textContent = "X";

    del.onclick = function() {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    };

    li.appendChild(del);
    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");
  if(input.value.trim() === "") return;

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  displayTasks();
}

window.onload = displayTasks;

let products = [
  {name:"Phone", category:"electronics", price:15000, rating:4.5},
  {name:"Laptop", category:"electronics", price:55000, rating:4.8},
  {name:"Shirt", category:"clothing", price:1200, rating:4.0},
  {name:"Jeans", category:"clothing", price:2000, rating:4.2}
];

function displayProducts(data){
  let container = document.getElementById("productList");
  if(!container) return;

  container.innerHTML = "";

  data.forEach(product=>{
    container.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <p>Rating: ${product.rating}</p>
      </div>
    `;
  });
}

function filterProducts(){
  let category = document.getElementById("category").value;
  if(category === "all"){
    displayProducts(products);
  } else {
    let filtered = products.filter(p=>p.category===category);
    displayProducts(filtered);
  }
}

function sortProducts(type){
  let sorted = [...products];

  if(type === "price"){
    sorted.sort((a,b)=>a.price-b.price);
  }

  if(type === "rating"){
    sorted.sort((a,b)=>b.rating-a.rating);
  }

  displayProducts(sorted);
}

displayProducts(products);