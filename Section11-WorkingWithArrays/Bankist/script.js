'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements_row">
      <div class="movements_type movements__type--deposit">${i + 1}</div>
      <div class="movements_value"> ${mov}</div>
      </div>
      `;
  });

  containerMovements.insertAdjacentHTML('afterbegin', html);
};


const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
};

displayMovements(account1.movements);


const createUsername = function (accs) {

  accs.forEach(function (acc) {
    acc.username = user.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join(' ');
  });

};

const user = 'Tommy Lee';
console.log(createUsername(user));

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);
console.log(movements);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);