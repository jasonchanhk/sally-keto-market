function getAllProducts(){
    fetch('http://localhost:3000/products')
        .then(r => r.json())
        .then(appendProducts)
        .catch(console.warn)
};

function appendProducts(products){
    products.forEach(appendProduct);
};

function appendProduct(productData){
    const newFigure = document.createElement('figure');
    newFigure.classList.add("card");
    newFigure.innerHTML = 
    `
        <div class="card__emoji">${productData.image}</div>
        <div class="card__title-box">
        <h2 class="card__title">${productData.productName}</h2>
        </div>
    
        <div class="card__details">
        <div class="card__detail-box">
            <h6 class="card__detail card__detail--organic">Organic!</h6>
        </div>
    
        <div class="card__detail-box">
            <h6 class="card__detail">${productData.quantity} per 📦</h6>
        </div>
    
        <div class="card__detail-box">
            <h6 class="card__detail card__detail--price">${productData.price}€</h6>
        </div>
        </div>
    
        <div class="card__delete">
        <span>Delete <i class="emoji-right">👉</i></span>
        </div>
    `

    //target
    const productsList = document.querySelector('.cards-container');
    productsList.append(newFigure);
};

// const deleteBtn = document.querySelector('.card__delete');
// deleteBtn.addEventListener('click', getMessage);

// function deleteMessage(){
//     const options = { 
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json"
//         }
//     };

//     fetch('http://localhost:3000/products/', options)
//         .then(r => r.text())
//         .then(renderMessage)
//         .catch(console.warn)
// };

// function renderMessage(msgText){
//     const msg = document.createElement('p');
//     msg.textContent = msgText;
//     msg.style.color = 'red';
//     document.body.append(msg);
// };

getAllProducts()
