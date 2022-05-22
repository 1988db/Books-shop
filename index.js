document.addEventListener('DOMContentLoaded', ()=> {

    //variables
    let pickedBooks = [];
    let booksQuantity = 0;
    let bookNr = 0;
    let totalPrice = 0;
    let draggedBook;
    let pages = [];
    const closeFormBtn = document.getElementById('close-form');
    closeFormBtn.addEventListener('click', closeConfForm);
    const completionForm = document.getElementById('completion-form');
    const submitBtn = document.getElementById('submit');
    const checkboxes = [completionForm.gift, completionForm.postcard, completionForm.discount, completionForm.pencil];
    let validName = false;
    let validSurname = false;
    let validDate = false;
    let validStreet = false;
    let validHouse = false;
    let validFlat = false;
    let validPayment = false;
    let validBonus = true;
    let validForm = false;


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
    liBooks.classList.add('li-books');
    liBooks.textContent = 'Books';
    liBooks.addEventListener('click', showProducts)
    const liContacts = document.createElement('li');
    liContacts.classList.add('li-books');
    liContacts.textContent = 'Contacts';
    const liShoppingbag = document.createElement('li');
    liShoppingbag.classList.add('li-shopping-bag');
    liShoppingbag.textContent = 'Shopping bag';
    liShoppingbag.addEventListener('click', showBag)
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
    pages.push(products);
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
      //shopping bag     
    const shoppingBagSection = document.createElement('div');
    shoppingBagSection.classList.add('shopping-bag-section');
    pages.push(shoppingBagSection);
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
    summaryWrapper.classList.add('summary-wrapper', 'hidden');
      //Total sum in summary bar in the shopping bag
    const totalSumWrapper = document.createElement('div');
    summaryWrapper.appendChild(totalSumWrapper);
    const total = document.createElement('span');
    total.classList.add('total');
    total.textContent = 'Total: $ ';
    const totalSum = document.createElement('span');
    totalSum.classList.add('total-sum');      
    totalSumWrapper.appendChild(total);
    totalSumWrapper.appendChild(totalSum);
    const summaryButtonsWrapper = document.createElement('div');
    summaryButtonsWrapper.classList.add('summary-buttons-wrapper');
    const removeAllBtn = document.createElement('div');
    removeAllBtn.classList.add('summary-btn', 'remove-all');
    removeAllBtn.textContent = 'Remove all';
    removeAllBtn.setAttribute('title', 'Remove all books from your shopping bag');
    removeAllBtn.addEventListener('click', removeAllFunc);
    summaryButtonsWrapper.appendChild(removeAllBtn);
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('summary-btn', 'confirm');
    confirmBtn.textContent = 'Confirm order';
    confirmBtn.addEventListener('click', openConfForm);
    confirmBtn.setAttribute('title', 'Finish your order');
    summaryButtonsWrapper.appendChild(confirmBtn);
    summaryWrapper.appendChild(summaryButtonsWrapper);
    shoppingBagSection.appendChild(summaryWrapper); 
    displaySection.appendChild(shoppingBagSection);
    
    //order complete summary    
    const orderComplete = document.createElement('div');
    orderComplete.classList.add('orderComplete');  
    const orderCompleteContainer = document.createElement('div');
    orderCompleteContainer.classList.add('orderComplete-container');
    orderComplete.appendChild(orderCompleteContainer);
    const orderCompleteTitle = document.createElement('h3');
    orderCompleteTitle.classList.add('orderComplete-title');
    orderCompleteTitle.textContent = 'Thank you for your order!'    
    const orderCompleteDescription = document.createElement('p');
    orderCompleteDescription.classList.add('orderComplete-description');
    const orderCompleteDescriptionOrderDetails = document.createElement('span');
    orderCompleteDescriptionOrderDetails.textContent = 'Your order details:';
    orderCompleteDescription.appendChild(orderCompleteDescriptionOrderDetails);
    const orderCompleteDescriptionName = document.createElement('span');    
    orderCompleteDescription.appendChild(orderCompleteDescriptionName);
    const orderCompleteDescriptionSurname = document.createElement('span');    
    orderCompleteDescription.appendChild(orderCompleteDescriptionSurname);
    const orderCompleteDescriptionDate = document.createElement('span');    
    orderCompleteDescription.appendChild(orderCompleteDescriptionDate);
    const orderCompleteDescriptionStreet = document.createElement('span');    
    orderCompleteDescription.appendChild(orderCompleteDescriptionStreet);
    const orderCompleteDescriptionHouse = document.createElement('span');    
    orderCompleteDescription.appendChild(orderCompleteDescriptionHouse);
    const orderCompleteDescriptionFlat = document.createElement('span');    
    orderCompleteDescription.appendChild(orderCompleteDescriptionFlat);
    const orderCompleteDescriptionPayment = document.createElement('span');    
    orderCompleteDescription.appendChild(orderCompleteDescriptionPayment);
    const orderCompleteDescriptionBonus = document.createElement('span');    
    orderCompleteDescription.appendChild(orderCompleteDescriptionBonus);
    const orderCompleteClose = document.createElement('div');
    orderCompleteClose.classList.add('orderComplete-close');
    orderCompleteClose.textContent = 'Close';
    orderCompleteClose.addEventListener('click', reload);
    orderCompleteContainer.appendChild(orderCompleteTitle);
    orderCompleteContainer.appendChild(orderCompleteDescription);
    orderCompleteContainer.appendChild(orderCompleteClose);
    displaySection.appendChild(orderComplete);

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
    github.setAttribute('href', 'https://github.com/1988db/Books-shop');
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
        productCard.setAttribute('title', 'Drag and drop book to the shopping bag in the top right corner, in order to add book to your shopping bag')               
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
        cardButton1.setAttribute('title', 'See book description');
        cardButton2.setAttribute('title', 'Add to shopping bag');
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

    //open confirmation form
    function openConfForm() {
      let formBackground = document.querySelector('.form-background');
      formBackground.style.display = 'block';
    }

    //close confirmation form
    function closeConfForm() {        
      let formBackground = document.querySelector('.form-background');
      formBackground.style.display = 'none';
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
      drawBookList(draggedBook);
      checkQuantity();
    }

    //add to bag

    function addToBag(e) {
      pickedBooks.push(e.target.closest('.product-card').dataset.id);
      booksQuantity = pickedBooks.length;
      booksCount.textContent = booksQuantity;
      drawBookList(e.target.closest('.product-card').dataset.id)
      checkQuantity();          
    }

    //remove book from the bag
    function removeBook(e) {
      let currentItemPosition = Array.from(shoppingBagContent.children).indexOf(e.target.closest('.bag-item')) - 1;
      pickedBooks.splice(currentItemPosition, 1);
      booksQuantity = pickedBooks.length;
      shoppingBagContent.removeChild(e.target.closest('.bag-item'));
      booksCount.textContent = booksQuantity;
      checkQuantity();
    };

    //draw book list in the shopping bag
    function drawBookList(bookId) {      
      const bagItem = document.createElement('div');
      bagItem.classList.add('bag-item');
      bagItem.dataset.id = bookId;
      const nrWrapper = document.createElement('div');
      nrWrapper.classList.add('nr-wrapper');
      bagItem.appendChild(nrWrapper);    
      const thumbWrapper = document.createElement('div');
      thumbWrapper.classList.add('thumb-wrapper');
      const thumb = document.createElement('img');
      thumb.classList.add('thumb');
      thumb.setAttribute('src', booksList[bookId].imageLink);
      thumb.setAttribute('alt', 'product thumbail');
      thumbWrapper.appendChild(thumb);
      bagItem.appendChild(thumbWrapper)
      const authorWrapper = document.createElement('div');
      authorWrapper.classList.add('author-wrapper');
      authorWrapper.textContent = booksList[bookId].author;
      bagItem.appendChild(authorWrapper);
      const titleWrapper = document.createElement('div');
      titleWrapper.classList.add('title-wrapper');
      titleWrapper.textContent = booksList[bookId].title;
      bagItem.appendChild(titleWrapper);
      const priceWrapper = document.createElement('div');
      priceWrapper.classList.add('price-wrapper');
      priceWrapper.textContent = 'Price: $';
      const priceValue2 = document.createElement('span');
      priceValue2.classList.add('price-value-2');
      priceValue2.textContent =  + booksList[bookId].price;
      priceWrapper.appendChild(priceValue2);
      bagItem.appendChild(priceWrapper);
      const closeWrapper = document.createElement('div');
      closeWrapper.classList.add('close-wrapper');
      const closeX = document.createElement('div');
      closeX.classList.add('close-x');
      closeX.setAttribute('title', 'Remove from the bag');
      closeX.textContent = 'X';
      closeX.addEventListener('click', removeBook);
      closeWrapper.appendChild(closeX);
      bagItem.appendChild(closeWrapper);
      shoppingBagContent.appendChild(bagItem);
      
    }

    //check books quantity and total price and item position in the shopping bag  

    function checkQuantity() {
      //change font size in shopping bag counter
      if (booksQuantity < 100) {
        booksCount.style.fontSize = '1rem';
      } else if(booksQuantity > 99) {
        booksCount.style.fontSize = '0.8rem';
      }
      //show/hide info in shopping bag
      if (booksQuantity == 0) {
        shoppingBagInfo.classList.remove('hidden')
        shoppingBagInfo.classList.add('visible');        
      } else if (booksQuantity > 0) {
        shoppingBagInfo.classList.remove('visible');
        shoppingBagInfo.classList.add('hidden')
      }
      //show/hide summary bar
      if(booksQuantity > 0) {
        summaryWrapper.classList.remove('hidden');
      } else if (booksQuantity < 1) {
        summaryWrapper.classList.add('hidden');
      }
      //count total price
      totalPrice = pickedBooks.reduce((total, current) => 
      {return total + booksList[current].price},0);
      totalSum.textContent = totalPrice;
      //item position in the shopping bag
      shoppingBagContent.querySelectorAll('.bag-item').forEach(el => 
        { el.children[0].textContent = Array.from(shoppingBagContent.children).indexOf(el)}
        );
    }
    
    //show proucts
    function showProducts() {
      pages.forEach(el => el.classList.remove('visible'));
      pages.forEach(el => el.classList.add('hidden'));
      pages[0].classList.add('visible');
    }    

    //show bag
    function showBag() {
      pages.forEach(el => el.classList.remove('visible'));
      pages.forEach(el => el.classList.add('hidden'));
      pages[1].classList.add('visible');
    }

    //remove All items from shopping bag
    function removeAllFunc() {
      pickedBooks = [];
      booksQuantity = pickedBooks.length;
      booksCount.textContent = booksQuantity;
      let pickedProducts = shoppingBagContent.querySelectorAll('.bag-item');
      pickedProducts.forEach(el => shoppingBagContent.removeChild(el));
      checkQuantity();
    }

   //validate order form

   completionForm.name.addEventListener('focusout', nameValidate);
   completionForm.name.addEventListener('input', formValidate);

   function nameValidate() {
     const alert = document.querySelector('span.name');      
    if(completionForm.name.value.length < 4) {         
      alert.style.display = 'inline-block';      
      alert.textContent = 'Your name is too short';
      completionForm.name.classList.remove('green');
      completionForm.name.classList.add('red');
      validName = false;
      formValidate();
    } 
    if (completionForm.name.value.split('').some(el => 
      {return el == 0 || el == 1 || el == 2 || el == 3 || el == 4 || el == 5 || el == 6 || el == 7 || el == 8 || el == 9})) {      
      alert.style.display = 'inline-block';      
      alert.textContent = 'Name cannot contain numbers';
      completionForm.name.classList.remove('green');
      completionForm.name.classList.add('red');
      validName = false;
      formValidate();
    }
    if (completionForm.name.value.length >= 4 && 
      !completionForm.name.value.split('').some(el => 
        {return el == 0 || el == 1 || el == 2 || el == 3 || el == 4 || el == 5 || el == 6 || el == 7 || el == 8 || el == 9})){
          alert.style.display = 'none';
          completionForm.name.classList.remove('red');
          completionForm.name.classList.add('green');
          validName = true;
          formValidate();
        }
    if(completionForm.name.value === '') {      
      alert.style.display = 'inline-block';      
      alert.textContent = 'Field cannot be empty';
      completionForm.name.classList.remove('green');
      completionForm.name.classList.add('red');
      validName = false;
      formValidate();     
    }
   }

   completionForm.surname.addEventListener('focusout', surnameValidate);
   completionForm.surname.addEventListener('input', formValidate);
   
   function surnameValidate() {
     const alert = document.querySelector('span.surname');      
    if(completionForm.surname.value.length < 5) {         
      alert.style.display = 'inline-block';      
      alert.textContent = 'Your surname is too short';
      completionForm.surname.classList.remove('green');
      completionForm.surname.classList.add('red'); 
      validSurname = false;
      formValidate();     
    } 
    if (completionForm.surname.value.split('').some(el => 
      {return el == 0 || el == 1 || el == 2 || el == 3 || el == 4 || el == 5 || el == 6 || el == 7 || el == 8 || el == 9})) {      
      alert.style.display = 'inline-block';      
      alert.textContent = 'Surame cannot contain numbers';
      completionForm.surname.classList.remove('green');
      completionForm.surname.classList.add('red');
      validSurname = false;
      formValidate(); 
    }
    if (completionForm.surname.value.length >= 5 && 
      !completionForm.surname.value.split('').some(el => 
        {return el == 0 || el == 1 || el == 2 || el == 3 || el == 4 || el == 5 || el == 6 || el == 7 || el == 8 || el == 9})){
          alert.style.display = 'none';
          completionForm.surname.classList.remove('red');
          completionForm.surname.classList.add('green');
          validSurname = true;
          formValidate(); 
        }
    if(completionForm.surname.value === '') {      
      alert.style.display = 'inline-block';      
      alert.textContent = 'Field cannot be empty';
      completionForm.surname.classList.remove('green');
      completionForm.surname.classList.add('red'); 
      validSurname = false;
      formValidate();      
    }
   }

   completionForm.date.addEventListener('focusout', dateValidate);
   completionForm.date.addEventListener('input', formValidate);

   function dateValidate() {
     const alert = document.querySelector('span.date');
     let todaysDate = new Date();
     let deliveryDate = new Date(completionForm.date.value);

     if (deliveryDate <= todaysDate) {
      alert.style.display = 'inline-block';      
      alert.textContent = 'Delivery date cannot be earlier than tomorrow';
      completionForm.date.classList.remove('green');
      completionForm.date.classList.add('red');
      validDate = false;
      formValidate();
     }
     if (completionForm.date.value === '') {
      alert.style.display = 'inline-block';      
      alert.textContent = 'Choose delivaery date';
      completionForm.date.classList.remove('green');
      completionForm.date.classList.add('red');
      validDate = false;
      formValidate();
     }
     if (completionForm.date.value !== '' && deliveryDate > todaysDate) {
      alert.style.display = 'none';     
      completionForm.date.classList.remove('red');
      completionForm.date.classList.add('green');
      validDate = true;
      formValidate();
     }
   }

   completionForm.street.addEventListener('focusout', streetValidate);
   completionForm.street.addEventListener('input', formValidate);
   
   function streetValidate() {
     const alert = document.querySelector('span.street');      
    if(completionForm.street.value.length < 5) {         
      alert.style.display = 'inline-block';      
      alert.textContent = 'Street name is too short';
      completionForm.street.classList.remove('green');
      completionForm.street.classList.add('red');
      validStreet = false;
      formValidate();     
    }    
    if (completionForm.street.value.length >= 5){
          alert.style.display = 'none';
          completionForm.street.classList.remove('red');
          completionForm.street.classList.add('green');
          validStreet = true;
          formValidate(); 
    }
    if(completionForm.street.value === '') {      
      alert.style.display = 'inline-block';      
      alert.textContent = 'Field cannot be empty';
      completionForm.street.classList.remove('green');
      completionForm.street.classList.add('red');
      validStreet = false;
      formValidate();       
    }
   }

   completionForm.houseNr.addEventListener('focusout', houseValidate);
   completionForm.houseNr.addEventListener('input', formValidate);
   
   function houseValidate() {
     const alert = document.querySelector('span.house-nr');
    if (completionForm.houseNr.value.split('').length != 0 && completionForm.houseNr.value.split('').every(el =>
      {return el == 0 || el == 1 || el == 2 || el == 3 || el == 4 || el == 5 || el == 6 || el == 7 || el == 8 || el == 9})){
          
          alert.style.display = 'none';          
          completionForm.houseNr.classList.remove('red');
          completionForm.houseNr.classList.add('green');
          validHouse = true;
          formValidate();
    } else {
        alert.style.display = 'inline-block';
        alert.textContent = 'Only positive numbers. Field cannot be left empty'        
        completionForm.houseNr.classList.remove('green');
        completionForm.houseNr.classList.add('red');
        validHouse = false;
        formValidate();
    } 
   }
   
   completionForm.flat.addEventListener('focusout', flatValidate);
   completionForm.flat.addEventListener('input', formValidate);
   
   function flatValidate() {
     const alert = document.querySelector('span.flat');
    if (completionForm.flat.value.split('').length != 0 && 
        (completionForm.flat.value.split('')[0] == 0 ||
         completionForm.flat.value.split('')[0] == 1 ||
         completionForm.flat.value.split('')[0] == 2 ||
         completionForm.flat.value.split('')[0] == 3 ||
         completionForm.flat.value.split('')[0] == 4 ||
         completionForm.flat.value.split('')[0] == 5 ||
         completionForm.flat.value.split('')[0] == 6 ||
         completionForm.flat.value.split('')[0] == 7 ||
         completionForm.flat.value.split('')[0] == 8 ||
         completionForm.flat.value.split('')[0] == 9
        ) && (
         completionForm.flat.value.split('').splice(-1,1).every(el => {
           return el == '-' || el == 0 || el == 1 || el == 2 || el == 3 || el == 3 || el == 4 || el == 5 || el == 6 || el == 7 || el == 8 || el == 9
         })
        )
        ){          
          alert.style.display = 'none';          
          completionForm.flat.classList.remove('red');
          completionForm.flat.classList.add('green');
          validFlat = true;
          formValidate();
    } else {
        alert.style.display = 'inline-block';
        alert.textContent = 'Only positive numbers. Field cannot be left empty'        
        completionForm.flat.classList.remove('green');
        completionForm.flat.classList.add('red');
        validFlat = false;
        formValidate();
    } 
   }

   completionForm.payment[0].addEventListener('focusout', paymentValidate);
   completionForm.payment[1].addEventListener('focusout', paymentValidate);
   completionForm.payment[0].addEventListener('input', formValidate);
   completionForm.payment[1].addEventListener('input', formValidate);

   console.log(completionForm.payment[1])

   function paymentValidate() {
     console.log('payment')
     if (completionForm.payment[0].checked || completionForm.payment[1].checked) {
       validPayment = true;
       formValidate();
     }
   }

   completionForm.gift.addEventListener('focusout', checkboxValidate);
   completionForm.postcard.addEventListener('focusout', checkboxValidate);
   completionForm.discount.addEventListener('focusout', checkboxValidate);
   completionForm.pencil.addEventListener('focusout', checkboxValidate);
   completionForm.gift.addEventListener('input', formValidate);
   completionForm.postcard.addEventListener('input', formValidate);
   completionForm.discount.addEventListener('input', formValidate);
   completionForm.pencil.addEventListener('input', formValidate);

   function checkboxValidate() {
     const alert = document.querySelector('span.gift');
     let checkValues = []; 
     checkboxes.forEach(el => {       
       if (el.checked) {
         checkValues.push(el.value)
       }
     })
      if (checkValues.length > 2) {
        alert.style.display = 'inline-block';
        alert.textContent = 'Only two bonuses to one order';
        checkboxes.forEach(el => {
          if (el.checked) {
            el.classList.remove('green-check');
            el.classList.add('red-check');            
          }
          if (!el.checked) {
            el.classList.remove('green-check');
            el.classList.remove('red-check');
          }
        })
        validBonus = false;
        formValidate();       
      }
      if (checkValues.length <= 2) {
        alert.style.display = 'none';               
        checkboxes.forEach(el => {
          if (el.checked) {
            el.classList.remove('red-check');
            el.classList.add('green-check');
          }
          if (!el.checked) {
            el.classList.remove('green-check');
            el.classList.remove('red-check');
          }
        })
        validBonus = true;
        formValidate();      
      }
    }

    //valid form check function

    function formValidate() {
      if (validName && validSurname && validDate && validStreet && validHouse && validFlat && validPayment && validBonus) {
        validForm = true;
      } else {
        validForm = false;
      }
      if (validForm) {
        completionForm.submit.removeAttribute('disabled');
        completionForm.submit.style.cursor = 'pointer';
      } else {
        completionForm.submit.setAttribute('disabled', 'true');
        completionForm.submit.style.cursor = 'not-allowed';
      }
      console.log('valid form', validForm);
      console.log('valid name', validName);
      console.log('valid surname', validSurname);
      console.log('valid date', validDate);
      console.log('valid street', validStreet);
      console.log('valid house', validHouse);
      console.log('valid flat', validFlat);
      console.log('valid payment', validPayment);
      console.log('valid bonus', validBonus);
      
    }
    formValidate()
    
    //submit function

    submitBtn.addEventListener('click', submitForm);

    function submitForm(e) {
      e.preventDefault();
      orderComplete.style.display = 'block';
      orderCompleteDescriptionName.textContent = 'Name: ' + completionForm.name.value;
      orderCompleteDescriptionSurname.textContent = 'Surname: ' + completionForm.surname.value;
      orderCompleteDescriptionDate.textContent = 'Delivery date: ' + completionForm.date.value;
      orderCompleteDescriptionStreet.textContent = 'Street: ' + completionForm.street.value;
      orderCompleteDescriptionHouse.textContent = 'House nr: ' + completionForm.houseNr.value;
      orderCompleteDescriptionFlat.textContent = 'Flat nr: ' + completionForm.flat.value;
      orderCompleteDescriptionPayment.textContent = 'Payment method: ' + completionForm.payment.value;
      let checkboxValue = '';
      checkboxes.forEach(el => {        
        if (el.checked === true) {
          checkboxValue += el.value + ', ';
        }
      });
      orderCompleteDescriptionBonus.textContent = 'Choosen bonus: ' + checkboxValue;
    }

    //reload page
    function reload() {
      window.location.reload(true);
    }
   
});