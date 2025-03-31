document.addEventListener('DOMContentLoaded', function() {
    const paymentMethods = document.querySelectorAll('.payment-method');
    
    paymentMethods.forEach(method => {
      method.addEventListener('click', function() {
        paymentMethods.forEach(m => m.classList.remove('selected'));
        this.classList.add('selected');
        
        document.querySelectorAll('.payment-form').forEach(form => {
          form.style.display = 'none';
        });
        
        const methodName = this.getAttribute('data-method');
        document.getElementById(`${methodName}-form`).style.display = 'block';
      });
    });
    
    const placeOrderBtn = document.getElementById('place-order-btn');
    
    placeOrderBtn.addEventListener('click', function() {
      const selectedMethod = document.querySelector('.payment-method.selected');
      
      if (!selectedMethod) {
        alert('Please select a payment method.');
        return;
      }
      
      const methodName = selectedMethod.getAttribute('data-method');
      let isValid = true;
      
      if (methodName === 'credit-card') {
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('card-name').value;
        
        if (!cardNumber || !expiryDate || !cvv || !cardName) {
          isValid = false;
          alert('Please fill in all credit card details.');
        }
      }
      
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      
      if (!email || !phone || !address) {
        isValid = false;
        alert('Please fill in all billing information.');
      }
      
      if (isValid) {
        alert('Your order has been placed successfully! Thank you for your purchase.');
      }
    });
    
    const cardNumberInput = document.getElementById('card-number');
    if (cardNumberInput) {
      cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        
        for (let i = 0; i < value.length; i++) {
          if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
          }
          formattedValue += value[i];
        }
        
        e.target.value = formattedValue;
      });
    }
    
    const expiryDateInput = document.getElementById('expiry-date');
    if (expiryDateInput) {
      expiryDateInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        
        if (value.length > 2) {
          value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        
        e.target.value = value;
      });
    }
  });