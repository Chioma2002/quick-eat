//LOCAL STORAGE

//const cartItems=JSON.parse(localStorage.getItem('cartItems'));
//const cartItemsEl= document.querySelector("cart-items")
 document.addEventListener("DOMContentLoaded", () => {
   renderitems();
});
function renderitems() {
  const cartItems =getItems();
  const cartItemsEl = document.querySelector(".cart-items");
}
  //CLEAR DOM  

  cartItemsEl.innerHTML = "";

  cartItems.forEach(item => {
    const divEL = document.createElement("div");
    divEL.classList.add("cart-item");

    const innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <p class="item-name">${item.name}</p>
    <p class="item-price">#${item.price}</p>
   
    <div class="quantity-container">
    <button class="subtract">-</button>
    <p class="quantity">${item?.quantity}</p>
    <button class="add">+</button>
    </div>
    <i class="fa-solid fa-xmark" id="deleteBtn"></i>
    `;

    divEL.innerHTML = innerHTML;
    const incrementBtn = divEL.querySelector(".add");
    const decrementBtn = divEL.querySelector(".subtract");
    const deleteBtn = divEL.querySelector("#deleteBtn");

    incrementBtn.addEventListener("click", () => handleincrement(item));
    decrementBtn.addEventListener("click", () => handledecrement(item));
    cartItemsEl.append(divEL);
});

//delete item from cart
function handleDelete(item) {
    const cartItems = getItem();
    const newCartItems = cartItems.filter(cartItem => cartItem.id!== item.id);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    if(cartItems === newCartItems) {
        alert("Item not found in cart");
    } else {
        alert("Item removed from cart");
    }
    renderitems(); // Update the cart display
}
//ITEM INCREMENT
function handleincrement(item) {
    const cartItems = getItem();
    const newCartItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
            return cartItem;
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    renderitems(); // Update the cart display
}

//get items from local storage
function getItem() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return cartItems;
}

function getTotal(items) {
   item.reduce((toal, items) => {
      const newtotal = total + items.price * items.quantity;
      console.log(newtotal);}
      
   )}



   