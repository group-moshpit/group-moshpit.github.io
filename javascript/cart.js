document.addEventListener('DOMContentLoaded', function() {
    const quantityInputs = document.querySelectorAll('.cart-item-quantity input');
    const removeButtons = document.querySelectorAll('.cart-item-remove button');
    const checkoutBtn = document.getElementById('checkout-btn');

    function updateCartTotal() {
        let totalItems = 0;
        let totalPrice = 0;
        
        document.querySelectorAll('.cart-item').forEach(item => {
            const priceText = item.querySelector('.cart-item-price').textContent;
            const price = parseFloat(priceText.replace('₱', '').replace(',', ''));
            const quantity = parseInt(item.querySelector('.cart-item-quantity input').value);
            
            totalItems += quantity;
            totalPrice += price * quantity;
        });
        
        document.querySelector('.cart-summary span:nth-child(2)').textContent = totalItems;
        document.querySelector('.cart-summary span:nth-child(4)').textContent = '₱' + totalPrice.toFixed(2);
    }

    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value < 1) {
                this.value = 1;
            }
            updateCartTotal();
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Items cannot be removed right now.');
        });
    });

    checkoutBtn.addEventListener('click', function(e) {
        const cartItems = document.querySelectorAll('.cart-item');
        if (cartItems.length === 0) {
            e.preventDefault();
            alert('Your cart is empty. Please add items before checking out.');
        }
    });

    updateCartTotal();
});