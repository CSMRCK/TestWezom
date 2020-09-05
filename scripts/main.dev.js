"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var enter = document.querySelector('#enter'),
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
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = exits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var exit = _step.value;
    exit.addEventListener('click', function () {
      enterModal.classList.remove('modaleopen');
      callModal.classList.remove('modaleopen');
      done.classList.remove('modaleopen');
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

enter.addEventListener('click', function () {
  enterModal.classList.add('modaleopen');
});
callme.addEventListener('click', function () {
  callModal.classList.add('modaleopen');
});
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop = function _loop() {
    var input = _step2.value;
    clearInputs.addEventListener('click', function () {
      input.value = '';
    });
  };

  for (var _iterator2 = inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

$(function () {
  $("#numberMask").mask("+38(099)999-99-99");
});
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  var _loop2 = function _loop2() {
    var select = _step3.value;
    clearInputs.addEventListener('click', function () {
      select.value = '0';
    });
  };

  for (var _iterator3 = selects[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    _loop2();
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function validateEmail(email) {
  if (!email) return false;
  if (email.length > 256) return false;
  if (!tester.test(email)) return false;

  var _email$split = email.split('@'),
      _email$split2 = _slicedToArray(_email$split, 2),
      account = _email$split2[0],
      address = _email$split2[1];

  if (account.length > 64) return false;
  var domainParts = address.split('.');
  if (domainParts.some(function (part) {
    return part.length > 63;
  })) return false;
  return true;
}

;
var email = document.querySelector('#mail'),
    blockMail = document.querySelector('#mailCheck');
email.addEventListener('input', function () {
  var mail = email.value;
  var isValid = validateEmail(mail);

  if (isValid) {
    email.style.color = 'green';
    blockMail.innerText = 'Ваш email введен корректно';
  } else {
    email.style.color = 'red';
    blockMail.innerText = 'Ваш email введен некорректно';
  }
});
var passCheck = document.querySelector('#passCheck'),
    pass = document.querySelector('#pass');
pass.addEventListener('input', function () {
  var password = pass.value;

  if (password.length > 3) {
    pass.style.color = 'green';
    passCheck.innerText = 'Пароль введен корректно';
  } else {
    pass.style.color = 'red';
    passCheck.innerText = 'Пароль введен некорректно';
  }
});
var mainSearch = document.querySelector('#mainSearch'),
    searchRight = document.querySelector('.searchRightBar');
var wrong = document.createElement("p");
wrong.innerHTML = "minimum 2 symbols required";
wrong.classList.add('wrongInput');
mainSearch.addEventListener('input', function () {
  var search = mainSearch.value;

  if (search.length < 2) {
    searchRight.appendChild(wrong);
  } else {
    searchRight.removeChild(wrong);
  }
});
var priceInput = document.querySelector('#priceInputOne'),
    priceSP = document.querySelector('.priceSP');
var negative = document.createElement("p");
negative.classList.add('wrongInput');
priceInput.addEventListener('input', function () {
  var input = priceInput.value;

  if (input < 0) {
    negative.innerHTML = "валидация на положительные цифры";
    priceSP.appendChild(negative);
  } else {
    negative.innerHTML = "";
  }
});
footerMail.addEventListener('input', function () {
  var mail = email.value;
  var isValid = validateEmail(mail);

  if (isValid) {
    email.style.color = 'green';
    blockMail.innerText = 'Ваш email введен корректно';
  } else {
    email.style.color = 'red';
    blockMail.innerText = 'Ваш email введен некорректно';
  }
});
footerSub.addEventListener('click', function () {
  var mail = footerMail.value;
  var isValid = validateEmail(mail);

  if (isValid) {
    done.classList.add('modaleopen');
  }
});
var compareAdds = document.querySelectorAll('[data-compare]'),
    favAdds = document.querySelectorAll('[data-fav]'),
    counter = document.querySelectorAll('.counter'),
    compareCounter = document.querySelector('#compareCounter'),
    favoriteCounter = document.querySelector('#favoriteCounter'),
    minicounter = document.createElement('p');
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  var _loop3 = function _loop3() {
    var compareAdd = _step4.value;
    var i = 0;
    compareAdd.addEventListener('click', function () {
      i++;
      minicounter.innerHTML = "(".concat(i, ")");
      compareAdd.appendChild(minicounter);
      compareCounter.classList.add('open');
      compareCounter.innerHTML = "".concat(i);
    });
  };

  for (var _iterator4 = compareAdds[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    _loop3();
  }
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
      _iterator4["return"]();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  var _loop4 = function _loop4() {
    var favAdd = _step5.value;
    var i = 0;
    favAdd.addEventListener('click', function () {
      i++;
      minicounter.innerHTML = "".concat(i);
      favAdd.appendChild(minicounter);
      favoriteCounter.classList.add('open');
      favoriteCounter.innerHTML = "".concat(i);
    });
  };

  for (var _iterator5 = favAdds[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    _loop4();
  }
} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
      _iterator5["return"]();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}