const enter = document.querySelector('#enter'),
  callme = document.querySelector('#callme'),
  exits = document.querySelectorAll('[data-close]'),
  enterModal = document.querySelector('.modalEnterMain'),
  callModal = document.querySelector('.modalCallMain'),
  clearInputs = document.querySelector('#clearInputs'),
  selects = document.querySelectorAll('.selectOrange'),
  inputs = document.querySelectorAll('[data-zero]'),
  done = document.querySelector('.modalDone'),
  footerMail = document.querySelector('#footerEmail'),
  footerSub = document.querySelector('#footerSub');

for (const exit of exits) {
  exit.addEventListener('click', () => {
    enterModal.classList.remove('modaleopen');
    callModal.classList.remove('modaleopen');
    done.classList.remove('modaleopen');
  });
}

enter.addEventListener('click', () => {
  enterModal.classList.add('modaleopen');
});

callme.addEventListener('click', () => {
  callModal.classList.add('modaleopen');
});

for (const input of inputs) {
  clearInputs.addEventListener('click', () => {
    input.value = '';
  });
}

$(function () {
  $("#numberMask").mask("+38(099)999-99-99");
});

for (const select of selects) {
  clearInputs.addEventListener('click', () => {
    select.value = '0';
  });
}



let tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function validateEmail(email) {
  if (!email) return false;

  if (email.length > 256) return false;

  if (!tester.test(email)) return false;

  let [account, address] = email.split('@');
  if (account.length > 64) return false;

  let domainParts = address.split('.');
  if (domainParts.some(function (part) {
      return part.length > 63;
    })) return false;

  return true;
};

const email = document.querySelector('#mail'),
  blockMail = document.querySelector('#mailCheck');

email.addEventListener('input', () => {
  let mail = email.value;
  let isValid = validateEmail(mail);

  if (isValid) {
    email.style.color = 'green';
    blockMail.innerText = 'Ваш email введен корректно';
  } else {
    email.style.color = 'red';
    blockMail.innerText = 'Ваш email введен некорректно';
  }
});

const passCheck = document.querySelector('#passCheck'),
  pass = document.querySelector('#pass');


pass.addEventListener('input', () => {
  let password = pass.value;
  if (password.length > 3) {
    pass.style.color = 'green';
    passCheck.innerText = 'Пароль введен корректно';
  } else {
    pass.style.color = 'red';
    passCheck.innerText = 'Пароль введен некорректно';
  }
});

const mainSearch = document.querySelector('#mainSearch'),
  searchRight = document.querySelector('.searchRightBar');
let wrong = document.createElement("p");
wrong.innerHTML = "minimum 2 symbols required";
wrong.classList.add('wrongInput');

mainSearch.addEventListener('input', () => {
  let search = mainSearch.value;
  if (search.length < 2) {
    searchRight.appendChild(wrong);
  } else {
    searchRight.removeChild(wrong);
  }
});

const priceInput = document.querySelector('#priceInputOne'),
  priceSP = document.querySelector('.priceSP');

let negative = document.createElement("p");
negative.classList.add('wrongInput');


priceInput.addEventListener('input', () => {
  let input = priceInput.value;
  if (input < 0) {
    negative.innerHTML = "валидация на положительные цифры";
    priceSP.appendChild(negative);
  } else {
    negative.innerHTML = "";
  }
});

footerMail.addEventListener('input', () => {
  let mail = email.value;
  let isValid = validateEmail(mail);

  if (isValid) {
    email.style.color = 'green';
    blockMail.innerText = 'Ваш email введен корректно';
  } else {
    email.style.color = 'red';
    blockMail.innerText = 'Ваш email введен некорректно';
  }
});



footerSub.addEventListener('click', () => {
  let mail = footerMail.value;
  let isValid = validateEmail(mail);
  if (isValid) {
    done.classList.add('modaleopen');
  }
});

let compareAdds = document.querySelectorAll('[data-compare]'),
  favAdds = document.querySelectorAll('[data-fav]'),
  counter = document.querySelectorAll('.counter'),
  compareCounter = document.querySelector('#compareCounter'),
  favoriteCounter = document.querySelector('#favoriteCounter'),
  minicounter = document.createElement('p');


for (const compareAdd of compareAdds) {
  let i = 0;
    compareAdd.addEventListener('click', () => {
      i++;
      minicounter.innerHTML = `(${i})`;
      compareAdd.appendChild(minicounter);
      compareCounter.classList.add('open');
      compareCounter.innerHTML = `${i}`;
    });
  
}
for (const favAdd of favAdds) {
  let i = 0;
  favAdd.addEventListener('click', () => {
      i++;
      minicounter.innerHTML = `${i}`;
      favAdd.appendChild(minicounter);
      favoriteCounter.classList.add('open');
      favoriteCounter.innerHTML = `${i}`;
    });
  
}