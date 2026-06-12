 // Tab switching controller
    function switchTab(event, id) {
        const sections = document.querySelectorAll('.web-section');
        sections.forEach(s => s.classList.remove('active-section'));
        
        const btns = document.querySelectorAll('.nav-btn');
        btns.forEach(b => b.classList.remove('active'));

        document.getElementById(id).classList.add('active-section');
        event.currentTarget.classList.add('active');
    }

    // NEW: Action handler to log out and reconnect back to login page
    function logoutAccount() {
        // Change "index.html" to the correct filename of your login screen if it's named differently
        window.location.href = "index.html"; 
    }