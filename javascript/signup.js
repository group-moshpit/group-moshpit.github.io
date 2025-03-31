// Generate random player ID in format #### #### ####
function generatePlayerId() {
    let id = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            id += Math.floor(Math.random() * 10);
        }
        if (i < 2) id += ' ';
    }
    return id;
}

// Initialize with a generated ID
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('player-id').value = generatePlayerId();
});

// Generate new ID when button is clicked
document.getElementById('generate-id').addEventListener('click', function() {
    document.getElementById('player-id').value = generatePlayerId();
});

// Form validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error states
    resetErrors();
    
    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const playerId = document.getElementById('player-id').value.trim();
    const ign = document.getElementById('ign').value.trim();
    
    let isValid = true;
    
    // Validate email
    if (!validateEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate password
    if (password.length < 6) {
        showError('password-error', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    // Validate password match
    if (password !== confirmPassword) {
        showError('confirm-password-error', 'Passwords do not match');
        isValid = false;
    }
    
    // Validate player ID format (#### #### ####)
    const idRegex = /^\d{4} \d{4} \d{4}$/;
    if (!idRegex.test(playerId)) {
        showError('player-id-error', 'Invalid player ID format');
        isValid = false;
    }
    
    // Validate IGN
    if (ign.length < 3) {
        showError('ign-error', 'In-Game Name must be at least 3 characters');
        isValid = false;
    }
    
    if (isValid) {
        // Form is valid, you can submit it or send to server
        alert('Registration successful!\n\n' +
              `Email: ${email}\n` +
              `Player ID: ${playerId}\n` +
              `IGN: ${ign}`);
        // this.submit(); // Uncomment to actually submit the form
    }
});

function resetErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
        error.textContent = '';
    });
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    const inputElement = errorElement.previousElementSibling;
    
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    inputElement.classList.add('error');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}