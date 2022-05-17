document.addEventListener('DOMContentLoaded', ()=> {
    //header section
        //logo
    const newHeader = document.createElement('header');
    const main = document.querySelector('main');
    main.appendChild(newHeader);
    const newLogoWrapper = document.createElement('div');
    const header = main.children[0];
    header.appendChild(newLogoWrapper);    
    const newH1 = document.createElement('h1');
    newH1.classList.add('logo');
    newH1.innerText = 'Books shop';
    const newPLogo = document.createElement('p');
    newPLogo.classList.add('logo-sub');
    newPLogo.innerText = 'The best on-line book shop';
    const logoWrapper = header.children[0];
    logoWrapper.appendChild(newH1);
    logoWrapper.appendChild(newPLogo);
        //nav
    const newNavWrapper = document.createElement('div');
    newNavWrapper.classList.add('nav-wrapper');    
    header.appendChild(newNavWrapper);    
    const newNav = document.createElement('nav');
    const navWrapper = header.children[1];
    navWrapper.appendChild(newNav);    
    const newUl = document.createElement('ul');
    newUl.classList.add('menu-li');
    const nav = navWrapper.children[0];
    nav.appendChild(newUl);    
    const newLiBooks = document.createElement('li');
    newLiBooks.innerText = 'Books';
    const newLiContacts = document.createElement('li');
    newLiContacts.innerText = 'Contacts';
    const newLiShoppingCart = document.createElement('li');
    newLiShoppingCart.innerText = 'Shopping cart';
    const ul = nav.children[0];
    ul.appendChild(newLiBooks);
    ul.appendChild(newLiContacts);
    ul.appendChild(newLiShoppingCart);
    const newShoppingCartWrapper = document.createElement('div');
    newShoppingCartWrapper.classList.add('shopping-cart-wrapper');
    navWrapper.appendChild(newShoppingCartWrapper);
    const newBooksCount = document.createElement('div');
    newBooksCount.classList.add('books-count');
    newBooksCount.innerText = '0';
    const shoppingCartWrapper = navWrapper.children[1];
    shoppingCartWrapper.appendChild(newBooksCount);
    
    //display section
    const newDisplaySection = document.createElement('section');
    newDisplaySection.classList.add('display');

    const displayFunction = (object) => {
        
    }
});