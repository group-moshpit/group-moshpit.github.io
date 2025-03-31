document.addEventListener("DOMContentLoaded", function() {
    // Check authentication
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const logoutLink = document.getElementById('logoutLink');
    const profileLink = document.getElementById('profileLink');
    
    if (!user) {
        alert('Please sign in first');
        window.location.href = 'home.html';
        return;
    }
    
    // Highlight Profile link as active
    if (profileLink) {
        profileLink.classList.add('active');
        profileLink.style.fontWeight = 'bold';
    }
    
    // Set up logout functionality
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'home.html';
        });
    }
    
    // Team info
    const teamLogos = {
        valor: '/elements/valor.png',
        mystic: '/elements/mystic.png',
        instinct: '/elements/instinct.png'
    };
    
    const teamNames = {
        valor: 'Valor',
        mystic: 'Mystic',
        instinct: 'Instinct'
    };
    
    const teamColors = {
        valor: '#FF0000',
        mystic: '#3B4CCA',
        instinct: '#FFCB05'
    };
    
    // Populate profile data
    document.getElementById('avatar').src = teamLogos[user.team];
    document.getElementById('username').textContent = user.ign;
    document.getElementById('player-id').textContent = user.playerId;
    document.getElementById('email').textContent = user.email;
    document.getElementById('team').textContent = teamNames[user.team];
    document.getElementById('team').style.color = teamColors[user.team];
    document.getElementById('level').textContent = user.level;
    document.getElementById('coins').textContent = user.coins;
    
    // Set level bar progress
    const levelProgress = (user.level / 40) * 100;
    document.querySelector('.level-bar').style.setProperty('--progress', levelProgress + '%');
});


