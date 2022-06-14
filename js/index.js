// Select fruit
let fruit = document.querySelectorAll(`.select`);

fruit.forEach((e) => {
  e.addEventListener(`click`, () => {
    fruit.forEach((el) => {
      el.classList.remove(`active`);
    });
    e.classList.add(`active`);
    document
      .querySelector(`.note-thanks`)
      .classList.replace(`d-none`, `d-block`);
    document.querySelector(`.type-fruit`).textContent = `${e.dataset.type}`;
  });
});

// Buy fruit Select

let btnBuy = document.querySelector(`.buy`);

btnBuy.addEventListener(`click`, () => {
  let fruitSelect = document.querySelector(`.select.active`);
  let numWeight = +document.querySelector(`#num`).value;
  document.querySelector(`.price`).textContent = `السعر ${
    fruitSelect.dataset.price * numWeight
  } ريال `;
  document.querySelector(`.note`).textContent=`نسأل الله عز وجل التوفيق لك في ال${fruitSelect.dataset.type}`
});
