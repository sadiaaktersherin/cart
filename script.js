
    function updateQuantity(product, price, isIncreasing) {
      const quantityElement = document.getElementById(product + "-qty");
      let quantity = parseInt(quantityElement.innerText);

      if (isIncreasing) {
        quantity += 1;
      } else if (quantity > 1) {
        quantity -= 1;
      }

      quantityElement.innerText = quantity;
      document.getElementById(product + "-total").innerText = quantity * price;

      calculateTotal();
    }

    function getInputValue(product) {
      return parseInt(document.getElementById(product + "-qty").innerText);
    }

    function calculateTotal() {
      const cliliesTotal = getInputValue('clilies') * 59;
      const siasidTotal = getInputValue('siasid') * 329;
      const subTotal = cliliesTotal + siasidTotal;
      document.getElementById('total').innerText = subTotal;
    }

    // Event Listeners
    document.getElementById('clilies-plus').addEventListener('click', () => updateQuantity('clilies', 59, true));
    document.getElementById('clilies-minus').addEventListener('click', () => updateQuantity('clilies', 59, false));
    document.getElementById('siasid-plus').addEventListener('click', () => updateQuantity('siasid', 329, true));
    document.getElementById('siasid-minus').addEventListener('click', () => updateQuantity('siasid', 329, false));

    document.getElementById('clilies-remove').addEventListener('click', function () {
      document.getElementById('clilies-item').style.display = 'none';
      document.getElementById('clilies-qty').innerText = 0;
      document.getElementById('clilies-total').innerText = 0;
      calculateTotal();
    });

    document.getElementById('siasid-remove').addEventListener('click', function () {
      document.getElementById('siasid-item').style.display = 'none';
      document.getElementById('siasid-qty').innerText = 0;
      document.getElementById('siasid-total').innerText = 0;
      calculateTotal();
    });
  
    document.getElementById('place-order').addEventListener('click', function () {
      
      window.location.href = 'second.html';
    });
    