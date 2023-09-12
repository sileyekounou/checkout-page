const submitButton = document.getElementById('btn-submit');
const emailInput = document.getElementById('mail');
const phoneInput = document.getElementById('phone');
const nameInput = document.getElementById('name');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const countryInput = document.getElementById('country');
const codeInput = document.getElementById('code');
const inputSave = document.querySelector('#monCheckbox');
    

//Function ShowError & hideError

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
    errorElement.style.display = 'none';

}

// Function Validate 

function validateAddress() {
    const address = addressInput.value;
    const divAddress = document.getElementById('div-address')
    if (!address) {
        showError('alert-address', 'Veuillez entrer votre adresse.');
        divAddress.classList.add('ring-2')
        divAddress.classList.remove('ring-green-400')
        divAddress.classList.add('ring-red-400')
        return false
    } else {
        hideError('alert-address');
        divAddress.classList.add('ring-2')
        divAddress.classList.remove('ring-red-400')
        divAddress.classList.add('ring-green-400') 
        return true
    }
}

function validateCountry() {
    const country = countryInput.value;
    const divCountry = document.getElementById('div-country')
    // country === 'Bénin' || country === 'Maroc' || country === 'Mauritanie' || country === 'Sénégal' || country === 'Nigéria'
    if (country) {
        hideError('alert-country');
        divCountry.classList.add('ring-2')
        divCountry.classList.remove('ring-red-400')  
        divCountry.classList.add('ring-green-400')  
        return true
    }  else {
        showError('alert-country', 'Veuillez entrer votre pays.');
        divCountry.classList.add('ring-2')
        divCountry.classList.remove('ring-green-400')
        divCountry.classList.add('ring-red-400')
        return false
    }
}
  
function validateCode() {
    const code = codeInput.value;
    const divCode = document.getElementById('div-code')
    if (!code) {
        showError('alert-code', 'Veuillez entrer votre code postal.');
        divCode.classList.add('ring-2')
        divCode.classList.remove('ring-green-400')
        divCode.classList.add('ring-red-400')
        return false
    } else {
    hideError('alert-code');
    divCode.classList.add('ring-2')
    divCode.classList.remove('ring-red-400')
    divCode.classList.add('ring-green-400')
    return true
    }
}

function validateCity() {
    const city = cityInput.value;
    const divCity = document.getElementById('div-city')
    if (!city) {
        showError('alert-city', 'Veuillez entrer votre ville.');
        divCity.classList.add('ring-2')
        divCity.classList.remove('ring-green-400')
        divCity.classList.add('ring-red-400')
        return false;
    } else {
        hideError('alert-city');
        divCity.classList.add('ring-2')
        divCity.classList.remove('ring-red-400')
        divCity.classList.add('ring-green-400')
        return true
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    const divMail = document.getElementById('div-mail')

    if (!emailRegex.test(email)) {
        showError('alert-mail', 'Adresse email invalide.');
        divMail.classList.add('ring-2')
        divMail.classList.remove('ring-green-400')
        divMail.classList.add('ring-red-400')
        return false    
    } else {
        hideError('alert-mail');
        divMail.classList.add('ring-2')
        divMail.classList.remove('ring-red-400')
        divMail.classList.add('ring-green-400')
        return true
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    const divPhone = document.getElementById('div-phone')
    const phoneRegex = /^(?:\+\d{1,4}|00\d{1,4})\s\d{8,}$/

    if (!phone || phone.length < 8 || !phoneRegex.test(phone)) {
        showError('alert-phone', 'Le numéro de téléphone entré est invalide.');
        divPhone.classList.add('ring-2')
        divPhone.classList.remove('ring-green-400')
        divPhone.classList.add('ring-red-400')
        return false
    } else {
        hideError('alert-phone');
        divPhone.classList.add('ring-2')        
        divPhone.classList.remove('ring-red-400')
        divPhone.classList.add('ring-green-400')
        return true
    }
}

function validateName() {
    const name = nameInput.value;
      const divName = document.getElementById('div-name')
      if (name === '') {
        showError('alert-name', 'Veuillez entrer votre nom.');
        divName.classList.add('ring-2')        
        divName.classList.remove('ring-green-400') 
        divName.classList.add('ring-red-400') 
          return false         
      } else {
        hideError('alert-name');
        divName.classList.add('ring-2')
        divName.classList.remove('ring-red-400')
        divName.classList.add('ring-green-400')
        return true
      }
}


  // Evenement type Input


countryInput.addEventListener('input', (e)=> {
    e.preventDefault();
    e.target.value;
    validateCountry();
})

codeInput.addEventListener('input', (e)=> {
    e.preventDefault();
    e.target.value;
    validateCode();
})

emailInput.addEventListener('input', (e)=> {
    e.preventDefault();
    e.target.value;
    validateEmail();
})

cityInput.addEventListener('input', (e)=> {
    e.preventDefault();
    e.target.value;
    validateCity();
})

addressInput.addEventListener('input', (e)=> {
    e.preventDefault();
    e.target.value;
    validateAddress();
})

phoneInput.addEventListener('input',(e) => {
    e.target.value
    e.preventDefault()
    validatePhone()
})

nameInput.addEventListener('input', (e)=> {
    e.target.value
    e.preventDefault()
    validateName();
})


  // Fonction de validation globale
function validateForm() {
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isNameValid = validateName();
    const isAddressValid = validateAddress();
    const isCityValid = validateCity();
    const isCountryValid = validateCountry();
    const isCodeValid = validateCode();
    
    if (isEmailValid && isPhoneValid && isNameValid && isAddressValid && isCityValid && isCountryValid && isCodeValid && inputSave.checked) {
        return true;
    } else {
        return false;
    }
}

const msg = document.querySelector('#msg-success')

submitButton.addEventListener('click', function (e) {
    
    if (!validateForm()) {
        e.preventDefault();
        console.log();
        
    } else {
        
        msg.classList.toggle('hidden')
    }
});


const inputCountry = document.querySelector('#country')
const svgCountry = document.querySelector('#svg-country')
const divCountry = document.querySelector('#div-list-country')
const countOne = document.querySelector('#count1')
const countTwo = document.querySelector('#count2')
const countThree = document.querySelector('#count3')
const countFour = document.querySelector('#count4')
const countFive = document.querySelector('#count5')

svgCountry.addEventListener('click', (e) => {
    e.preventDefault()
    divCountry.classList.toggle('hidden')
})

countOne.addEventListener('click', (e)=> {
    e.preventDefault()    
    inputCountry.setAttribute('value', "Bénin")
    divCountry.classList.toggle('hidden')

})

countTwo.addEventListener('click', (e)=> {
    e.preventDefault()
    inputCountry.setAttribute('value', 'Maroc')
    divCountry.classList.toggle('hidden')    
})

countThree.addEventListener('click', (e)=> {
    e.preventDefault()
    inputCountry.setAttribute('value', 'Mauritanie')
    divCountry.classList.toggle('hidden')
})

countFour.addEventListener('click', (e)=> {
    e.preventDefault()
    inputCountry.setAttribute('value', 'Nigéria')
    divCountry.classList.toggle('hidden')
})

countFive.addEventListener('click', (e)=> {
    e.preventDefault()
    inputCountry.setAttribute('value', 'Sénégal')
    divCountry.classList.toggle('hidden')
})

console.log(inputCountry.value);

