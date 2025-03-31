document.addEventListener('DOMContentLoaded', function() {
    const redeemForm = document.getElementById('redeemForm');
    const codeInput = document.getElementById('code');
    const submitBtn = document.getElementById('submitBtn');
    const resultMessage = document.getElementById('resultMessage');
    
    // Auto-format code input (XXXX-XXXX-XXXX-XXXX)
    codeInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/-/g, '');
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join('-');
        }
        e.target.value = value.toUpperCase();
    });
    
    // Form submission
    redeemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable button during "processing"
        submitBtn.disabled = true;
        submitBtn.textContent = 'PROCESSING...';
        
        // Clear previous result
        resultMessage.style.display = 'none';
        
        // Simulate API call
        setTimeout(() => {
            const code = codeInput.value.replace(/-/g, '');
            
            // Validate code (simple validation for demo)
            if (code.length !== 16 || !/^[A-Z0-9]+$/.test(code)) {
                showResult('Invalid code format. Please check your code and try again.', 'error');
            } else if (code.includes('FAKE')) {
                showResult('This code has already been redeemed.', 'error');
            } else {
                showResult('Success! Your rewards have been added to your account.', 'success');
                codeInput.value = '';
            }
            
            submitBtn.disabled = false;
            submitBtn.textContent = 'REDEEM NOW';
        }, 1500);
    });
    
    function showResult(message, type) {
        resultMessage.textContent = message;
        resultMessage.className = 'result-message ' + type;
        resultMessage.style.display = 'block';
        
        // Scroll to result
        resultMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});