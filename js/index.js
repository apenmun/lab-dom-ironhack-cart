// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').value;
  const result = price * quantity;
  product.querySelector('.subtotal span').innerText = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const productArray = document.querySelector('.product');
  const newArr = [...productArray];
  let total = newArr.reduce((acc,product)=>{
    return acc + updateSubtotal(product);
   },0);
   console.log(total);
   document.querySelector('#total-value span').innerText = total;
  // end of test

  // ITERATION 2
const productsAll = document.getElementsByClassName("product");
for (let i=0; i<productsAll.length; i++){
  updateSubtotal(productsAll[i]);
}

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
