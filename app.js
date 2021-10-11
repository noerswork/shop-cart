console.log("hey you're connected!")

const products = document.querySelector('#products-list');
const shopCartContent = document.querySelector('#cart-content tbody');
const deleteCartBtn = document.querySelector('#clear-cart');

// console.log("products", shopCartContent)

loadEventListeners();

function loadEventListeners () {
    // whe the product is added
    products.addEventListener('click', buyProduct);
    // when the product item is removed
    shopCartContent.addEventListener('click', removeProduct);
    // when all products item is removed
    deleteCartBtn.addEventListener('click', clearCart);

    function buyProduct (e) {
        if(e.target.classList.contains('add-to-cart')){
            // read the product value
            const product = e.target.parentElement.parentElement;
            getProductInfo(product);
        }
    }

    function removeProduct (e) {
        if(e.target.classList.contains('remove')){
            e.target.parentElement.parentElement.remove();
        }
    }

    function clearCart () {
        console.log(shopCartContent.firstChild)
        while(shopCartContent.firstChild){
            shopCartContent.removeChild(shopCartContent.firstChild);
        }
    }
}

function getProductInfo (product) {
    // create an object with products data
    const productInfo = {
        title: product.querySelector('p').textContent,
        price: product.querySelector('h5').textContent,
        id: product.querySelector('button').getAttribute('data-id')
    }
    addToCart(productInfo);
}

function addToCart (product) {
    
    const row = document.createElement('tr');

    row.innerHTML=`
    <tr>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td><a href="#" class="remove" data-id="${product.id}">X</a></td>
    </tr>
    `;
    shopCartContent.appendChild(row);
}
