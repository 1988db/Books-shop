document.addEventListener('DOMContentLoaded', ()=> {

    //main
    const main = document.createElement('main')
    //header section
        //logo    
    const header = document.createElement('header');
    main.appendChild(header);    
    const logoWrapper = document.createElement('div');
    header.appendChild(logoWrapper);       
    const h1 = document.createElement('h1');
    h1.classList.add('logo');
    h1.textContent = 'Books shop';
    const pLogo = document.createElement('p');
    pLogo.classList.add('logo-sub');
    pLogo.innerText = 'The best programming books';  
    logoWrapper.appendChild(h1);
    logoWrapper.appendChild(pLogo);
        //nav
    const navWrapper = document.createElement('div');
    navWrapper.classList.add('nav-wrapper');    
    header.appendChild(navWrapper);    
    const nav = document.createElement('nav');    
    navWrapper.appendChild(nav);    
    const ul = document.createElement('ul');
    ul.classList.add('menu-li');    
    nav.appendChild(ul);    
    const liBooks = document.createElement('li');
    liBooks.textContent = 'Books';
    const liContacts = document.createElement('li');
    liContacts.textContent = 'Contacts';
    const liShoppingCart = document.createElement('li');
    liShoppingCart.textContent = 'Shopping cart';    
    ul.appendChild(liBooks);
    ul.appendChild(liContacts);
    ul.appendChild(liShoppingCart);
    const shoppingCartWrapper = document.createElement('div');
    shoppingCartWrapper.classList.add('shopping-cart-wrapper');
    navWrapper.appendChild(shoppingCartWrapper);
    const booksCount = document.createElement('div');
    booksCount.classList.add('books-count');
    booksCount.textContent = '0';    
    shoppingCartWrapper.appendChild(booksCount);   

    //display section
    const displaySection = document.createElement('section');
    displaySection.classList.add('display');
    //products
    const products = document.createElement('div');
    products.classList.add('products');
    displaySection.appendChild(products);
    const productsH2 = document.createElement('h2');
    products.classList.add('our-books');
    productsH2.textContent = 'Our books';
    products.appendChild(productsH2);
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');

    
    main.appendChild(displaySection);

    //fetch data from json file
    let booksList = [];
   
    fetch('books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.forEach(el => booksList.push(el));            
        });
    

    //create display section content
    
    //append page structure to DOM
    const fragment = new DocumentFragment();
    fragment.appendChild(main);
    
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(fragment);

    //function draw product cart
    const drawProductCart = (object) => {
        const productCard = document.createElement(div);
        productCard.classList.add('product-card');
        const productImg = document.createElement('img')
        productImg.classList.add('product-img');
        productImg.setAttribute('href', object.imageLink);
        productCard.appendChild(productImg);
        const author = document.createElement('h4');
        author.classList.add('author');
        author.textContent = object.author;
        productCard.appendChild(author);
        const title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = object.title;
        productCard.appendChild(title);
        const price = document.createElement('h4');
        price.classList.add('price');
        price.textContent = object.price;
        productCard.appendChild(price);
        const cardButtonsWrapper = document.createElement('div');
        cardButtonsWrapper.classList.add('card-buttons-wrapper');
        const cardButton1 = document.createElement('div');
        const cardButton2 = document.createElement('div');
        cardButton1.classList.add('card-button show-more');
        cardButton2.classList.add('card-button add-to-cart');
        cardButton1.textContent = 'Show more';
        cardButton2.textContent = 'Add to cart';
        cardButtonsWrapper.appendChild(cardButton1);
        cardButtonsWrapper.appendChild(cardButton2);
        productCard.appendChild(cardButtonsWrapper);
        productsContainer.appendChild(productCard);
    };

    //add and draw products
    function addProducts(array) {
        array.forEach(el => drawProductCart(el));
    }

    addProducts(booksList);
});