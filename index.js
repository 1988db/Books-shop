document.addEventListener('DOMContentLoaded', ()=> {
    //header section
        //logo
    const header = document.createElement('header');    
    const logoWrapper = document.createElement('div');
    header.appendChild(logoWrapper);       
    const h1 = document.createElement('h1');
    h1.classList.add('logo');
    h1.textContent = 'Books shop';
    const pLogo = document.createElement('p');
    pLogo.classList.add('logo-sub');
    pLogo.innerText = 'The best on-line book shop';  
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
    
    const fragment = new DocumentFragment();
    fragment.appendChild(header);
    const main = document.querySelector('main');
    main.appendChild(fragment);

    //display section
    const newDisplaySection = document.createElement('section');
    newDisplaySection.classList.add('display');

    //fetch data from json file

    const displayFunction = (object) => {
        
    }
});