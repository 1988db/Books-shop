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
    main.appendChild(displaySection);

    //fetch data from json file

    const getData = () => {
        fetch('../books.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            });
    }

    getData();

    //append page structure to the main section
    const fragment = new DocumentFragment();
    fragment.appendChild(main);
    
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(fragment);
});