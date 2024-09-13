// getting items
const orderBtnEl = document.querySelector('#order-btn');
const cartItems=[];

orderBtnEls.forEach(orderBtn => {
    orderBtn.addEventListener('click', () => {
        const parentEl = orderBtn.parentElement;
        const item = {
            image: parentEl.querySelector('.item-image').src,
            name: parentEl.querySelector('.item-name').textContent,
            price: parentEl.querySelector('.item-price').textContent,
            quantity: 1,
            id: Math.floor(Date.now() + Math.random())
        };
        // cartItems.unshift(item);
        // addItemToCart(item);
    });
});


const item={
    "name":laptop,
    "price": 2200,
};

const addItemToCart = (item) => {
    const cartItems=JSON.parse(localStorage.getItem('cartItems')) || []; 
    cartItems.unshift(item);
    //to convert a js object to JSON string use JSON.stringify()
    //to convert a JSON string to js object use JSON.parse()
    localStorage.setItem('cartItems', JSON.stringify(cartItems));


}
    