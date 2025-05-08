
  function updateQuantity(product, price, isIncreasing) {
    const quantityElement = document.getElementById(product + "-qty");
    let quantity = parseInt(quantityElement.innerText);

    if (isIncreasing) {
      quantity += 1;
    } else if (quantity > 1) {
      quantity -= 1;
    }

    quantityElement.innerText = quantity;

    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = quantity * price;

    calculateTotal();
  }

  function getInputValue(product) {
    const quantityElement = document.getElementById(product + "-qty");
    return parseInt(quantityElement.innerText);
  }

  function calculateTotal() {
    const chiliesTotal = getInputValue('clilies') * 59;
    const siasidTotal = getInputValue('siasid') * 329;
    const subTotal = chiliesTotal + siasidTotal;

    document.getElementById('total').innerText = subTotal;
  }

  // Event listeners
  document.getElementById('clilies-plus').addEventListener('click', function () {
    updateQuantity('clilies', 59, true);
  });

  document.getElementById('clilies-minus').addEventListener('click', function () {
    updateQuantity('clilies', 59, false);
  });

  document.getElementById('siasid-plus').addEventListener('click', function () {
    updateQuantity('siasid', 329, true);
  });

  document.getElementById('siasid-minus').addEventListener('click', function () {
    updateQuantity('siasid', 329, false);
  });

  // Remove buttons
  document.getElementById('clilies-remove').addEventListener('click', function () {
    document.getElementById('clilies-qty').innerText = 0;
    document.getElementById('clilies-total').innerText = 0;
    calculateTotal();
  });

  document.getElementById('siasid-remove').addEventListener('click', function () {
    document.getElementById('siasid-qty').innerText = 0;
    document.getElementById('siasid-total').innerText = 0;
    calculateTotal();
  });

