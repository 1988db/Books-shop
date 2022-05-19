document.addEventListener('DOMContentLoaded', ()=> {

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
    productsH2.classList.add('our-books');
    productsH2.textContent = 'Our books';
    products.appendChild(productsH2);
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('products-container');
    products.appendChild(productsContainer);
    
    main.appendChild(displaySection);

    //fetch data from json file
    let booksList = [{
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
    
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(fragment);

    //function draw product cart
    const drawProductCart = (object) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
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
        cardButton2.classList.add('card-button', 'add-to-cart');
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