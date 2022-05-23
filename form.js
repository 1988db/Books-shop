document.addEventListener('DOMContentLoaded', ()=> {
    const body = document.querySelector('body');
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
     body.appendChild(orderComplete);

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
   

   function paymentValidate() {     
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

    //close confirmation form
    function closeConfForm() {        
        reload();
      }

    //back to book shop
    function reload() {
      window.location.href = 'index.html';      
    }


})