document.addEventListener('DOMContentLoaded', ()=> {

    //variables
    let pickedBooks = [];
    let booksQuantity = 0;
    let totalPrice = 0;
    let draggedBook;
    //main
    const main = document.createElement('main')
    //header section
        //logo    
    const header = document.createElement('header');
    main.appendChild(header);    
    const logoWrapper = document.createElement('div');
    logoWrapper.classList.add('logo-wrapper');
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
    const liShoppingbag = document.createElement('li');
    liShoppingbag.textContent = 'Shopping bag';
    liShoppingbag.addEventListener('click', drawShoppingBag)
    liShoppingbag.addEventListener('dragover', dragOver);
    liShoppingbag.addEventListener('dragenter', dragEnter);
    liShoppingbag.addEventListener('dragleave', dragLeave);
    liShoppingbag.addEventListener('drop', dragDrop);    
    ul.appendChild(liBooks);
    ul.appendChild(liContacts);
    ul.appendChild(liShoppingbag);
    const shoppingbagWrapper = document.createElement('div');
    shoppingbagWrapper.classList.add('shopping-bag-wrapper');
    navWrapper.appendChild(shoppingbagWrapper);
    const booksCount = document.createElement('div');
    booksCount.classList.add('books-count');
    booksCount.textContent = '0';    
    shoppingbagWrapper.appendChild(booksCount);   

    //display section
    const displaySection = document.createElement('section');
    displaySection.classList.add('display');
    //products
    const products = document.createElement('div');
    products.classList.add('products');
    displaySection.appendChild(products);
    const productsH2 = document.createElement('h2');
    productsH2.classList.add('our-books');
    productsH2.textContent = 'Our books';
    products.appendChild(productsH2);
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');
    products.appendChild(productsContainer);    
    main.appendChild(displaySection);
      //pop-up product card
    const popup = document.createElement('div');
    popup.classList.add('popup');
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    popup.appendChild(popupContainer);
    const popupTitle = document.createElement('h3');
    popupTitle.classList.add('popup-title');    
    const popupDescription = document.createElement('p');
    popupDescription.classList.add('popup-description');    
    const popupClose = document.createElement('div');
    popupClose.classList.add('popup-close');
    popupClose.textContent = 'Close';
    popupClose.addEventListener('click', closePopup)
    popupContainer.appendChild(popupTitle);
    popupContainer.appendChild(popupDescription);
    popupContainer.appendChild(popupClose);
    productsContainer.appendChild(popup);
    //footer section
    const footer = document.createElement('footer');
    const githubWrapper = document.createElement('div');
    githubWrapper.classList.add('github-wrapper');
    const githubLogo = document.createElement('img');
    githubLogo.setAttribute('src', 'img/GitHub-Mark-Light-32px.png');
    githubLogo.setAttribute('alt', 'github logo');
    githubWrapper.appendChild(githubLogo);
    const github = document.createElement('a');
    github.classList.add('github');
    github.setAttribute('href', 'https://github.com/1988db');
    github.setAttribute('target', '_blank');
    github.textContent = '1988db 2022';
    githubWrapper.appendChild(github);
    footer.appendChild(githubWrapper);
    const addressWrapper = document.createElement('div');
    addressWrapper.classList.add('address-wrapper');
    const companyName = document.createElement('h4');
    companyName.classList.add('company-name');
    companyName.textContent = 'Books Shop';
    addressWrapper.appendChild(companyName);
    const street = document.createElement('p');
    street.textContent = 'ul. Plac Europejski 1';
    addressWrapper.appendChild(street);
    const city = document.createElement('p');
    city.textContent = '00-844 Warszawa';
    addressWrapper.appendChild(city);
    footer.appendChild(addressWrapper);

    //fetch data from json file
    let booksList = [
        {
          "author": "Douglas Crockford",
          "imageLink": "img/js_the_good_parts.jpg",
          "title": "JavaScript: The Good Parts",
          "price": 30,
          "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
        },
        {
          "author": "David Herman",
          "imageLink": "img/effective_js.jpg",
          "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
          "price": 22,
          "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
        },
        {
          "author": "David Flanagan",
          "imageLink": "img/java_script_the_definitive_guide.jpg",
          "title": "JavaScript: The Definitive Guide",
          "price": 40,
          "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
        },
        {
          "author": " Eric Elliott",
          "imageLink": "img/programming_js_apps.jpg",
          "title": "Programming JavaScript Applications",
          "price": 19,
          "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
        },
        {
          "author": "Addy Osmani",
          "imageLink": "img/js_design_patterns.jpg",
          "title": "Learning JavaScript Design Patterns",
          "price": 32,
          "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
        },
        {
          "author": "Boris Cherny",
          "imageLink": "img/programming_TS.jpg",
          "title": "Programming TypeScript",
          "price": 28,
          "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
        },
        {
          "author": "Alex Banks, Eve Porcello",
          "imageLink": "img/learning_react.jpg",
          "title": "Learning React, 2nd Edition",
          "price": 25,
          "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
        },
        {
          "author": "Bradley Meck Alex Young and Mike Cantelon",
          "imageLink": "img/node_in_action.jpg",
          "title": "Node.js in Action",
          "price": 38,
          "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
        },
        {
          "author": "Kyle Simpson",
          "imageLink": "img/js_get_started.jpg",
          "title": "You Don't Know JS Yet: Get Started",
          "price": 26,
          "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
        },
        {
          "author": "John Resig and Bear Bibeault",
          "imageLink": "img/js_ninja.jpg",
          "title": "Secrets of the JavaScript Ninja",
          "price": 33,
          "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
        }
      ];
   
    /*fetch('books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.forEach(el => booksList.push(el));            
        });
    */

    //create display section content
    
    //append page structure to DOM
    const fragment = new DocumentFragment();
    fragment.appendChild(main);
    fragment.appendChild(footer);
    
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(fragment);

    //function draw product card
    const drawProductCard = (object) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('draggable', true);
        productCard.addEventListener('dragstart', dragStart);
        productCard.addEventListener('dragend', dragEnd);        
        productCard.dataset.id = object.id;                
        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('content-wrapper');
        productCard.appendChild(contentWrapper);
        const productImg = document.createElement('img')
        productImg.classList.add('product-img');
        productImg.setAttribute('src', object.imageLink);
        contentWrapper.appendChild(productImg);
        const author = document.createElement('h4');
        author.classList.add('author');
        author.textContent = object.author;
        contentWrapper.appendChild(author);
        const title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = object.title;
        contentWrapper.appendChild(title);
        const price = document.createElement('h4');
        price.classList.add('price');
        const priceDes = document.createElement('span');
        const priceValue = document.createElement('span');
        priceDes.classList.add('price-des');
        priceValue.classList.add('price-value');
        priceDes.textContent = 'Price: ';
        priceValue.textContent = '$' + object.price;
        price.appendChild(priceDes);
        price.appendChild(priceValue);
        contentWrapper.appendChild(price);
        const cardButtonsWrapper = document.createElement('div');
        cardButtonsWrapper.classList.add('card-buttons-wrapper');
        const cardButton1 = document.createElement('div');
        const cardButton2 = document.createElement('div');
        cardButton1.classList.add('card-button', 'show-more');
        cardButton2.classList.add('card-button', 'add-to-bag');
        cardButton1.addEventListener('click', openPopup);
        cardButton2.addEventListener('click', addToBag);
        cardButton1.textContent = 'Show more';
        cardButton2.textContent = 'Add to bag';
        cardButtonsWrapper.appendChild(cardButton1);
        cardButtonsWrapper.appendChild(cardButton2);
        productCard.appendChild(cardButtonsWrapper);
        productsContainer.appendChild(productCard);
    };

    //add and draw products
    function addProducts(array) {        
        array.forEach(el => {
            el.id = array.indexOf(el);
            drawProductCard(el);
        });
    }

    addProducts(booksList);

    //open popup function
    function openPopup(e) {        
        popupTitle.textContent = booksList[e.target.closest('.product-card').dataset.id].title;
        popupDescription.textContent = booksList[e.target.closest('.product-card').dataset.id].description;
        popup.style.display = 'block';
    }

    //close Popup function
    function closePopup() {
      popup.style.display = 'none';
    }   

    //drag-drop functions

    function dragStart() {
      draggedBook = this.dataset.id;     
    }

    function dragOver(e) {
      e.preventDefault();
            
    }

    function dragEnter(e) {
      e.preventDefault();
      
    }

    function dragLeave() {
      
    }

    function dragEnd() {
      draggedBook = undefined;      
    }

    function dragDrop() {
      pickedBooks.push(draggedBook);
      booksQuantity = pickedBooks.length;
      booksCount.textContent = booksQuantity;
      checkQuantity();
    }

    //add to bag

    function addToBag(e) {
      pickedBooks.push(e.target.closest('.product-card').dataset.id);
      booksQuantity = pickedBooks.length;
      booksCount.textContent = booksQuantity;
      checkQuantity();           
    }

    //check books quantity

    function checkQuantity() {
      if (booksQuantity < 100) {
        booksCount.style.fontSize = '0.8rem';
      } else if(booksQuantity > 99) {
        booksCount.style.fontSize = '0.6rem';
      }
    }

     //draw shopping bag
     function drawShoppingBag() {
      const shoppingBagSection = document.createElement('div');
      shoppingBagSection.classList.add('shopping-bag-section');
      const shoppingBagHeading = document.createElement('h2');
      shoppingBagHeading.classList.add('shopping-bag-heading');
      shoppingBagHeading.textContent = 'Your shopping bag';
      shoppingBagSection.appendChild(shoppingBagHeading);
      const shoppingBagContent = document.createElement('div');
      shoppingBagContent.classList.add('shopping-bag-content');
      const shoppingBagInfo = document.createElement('h3');
      shoppingBagInfo.classList.add('shopping-bag-info');
      shoppingBagInfo.textContent = 'Your shopping bag is empty. Drag and drop chosen book to the shopping bag or click on "Add to bag" button on chosen book card';
      shoppingBagContent.appendChild(shoppingBagInfo);
      shoppingBagSection.appendChild(shoppingBagContent);
      const summaryWrapper = document.createElement('div');
      summaryWrapper.classList.add('summary-wrapper');
      const total = document.createElement('span');
      total.classList.add('total');
      total.textContent = 'Total: $0';
      summaryWrapper.appendChild(total);
      const summaryButtonsWrapper = document.createElement('div');
      summaryButtonsWrapper.classList.add('summary-buttons-wrapper');
      const removeAllBtn = document.createElement('div');
      removeAllBtn.classList.add('summary-btn', 'remove-all');
      removeAllBtn.textContent = 'Remove all';
      summaryButtonsWrapper.appendChild(removeAllBtn);
      const confirmBtn = document.createElement('div');
      confirmBtn.classList.add('summary-btn', 'confirm');
      confirmBtn.textContent = 'Confirm order';
      summaryButtonsWrapper.appendChild(confirmBtn);
      summaryWrapper.appendChild(summaryButtonsWrapper);
      shoppingBagSection.appendChild(summaryWrapper); 
      displaySection.appendChild(shoppingBagSection);
      products.style.display = 'none';
    }
});