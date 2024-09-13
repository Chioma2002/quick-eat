const openEl = document.getElementById("openEl");
const closeEl = document.getElementById("closeEl");
const navEls = document.querySelector("nav");

openEl.addEventListener("click", () => {
    navEls.style.display = "flex";
    openEl.style.display = "none";
    closeEl.style.display = "block";
});

closeEl.addEventListener('click', () => {
    navEls.style.display = "none";
    openEl.style.display = "block";
    closeEl.style.display = "none";
});

// getting items
const orderBtnEls = document.querySelectorAll("#order-btn");
const cartitems = [];
orderBtnEls.forEach((orderBtn) => {
    orderBtn.addEventListener("click", () => {        
        const parentEL = orderBtn.parentElement;
        
        const item = {
            image: parentEL.querySelector("img").src,
            price: parentEL.querySelector("#price").innerHTML.replace(/[,]/g, ""),
            name: parentEL.querySelector("#name").innerHTML,
            quantity: 1,
            id: Math.floor(Date.now() + Math.random()),
        };

        addItemTocart(item);        
    });

});

function addItemTocart(item){
    const cartitems = JSON.parse(localStorage.getItem("cart-items")) || [];
    cartitems.unshift(item);
    localStorage.setItem("cart-items", JSON.stringify(cartitems));
}