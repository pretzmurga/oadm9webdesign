// Element Selectors
    const loginForm = document.getElementById('loginForm'); // Matches your HTML ID
    const signupForm = document.getElementById('registerView'); 
    const authTitle = document.querySelector('.auth-container h3');
    const authSubtitle = document.querySelector('.subtitle');
    const toggleText = document.querySelector('.switch-text');
    const errorMsg = document.getElementById('loginError');
    const personalWebsite = document.getElementById('personal-website');
    const authWrapper = document.getElementById('auth-screen-wrapper');

    // NEW: Toggle Password Visibility
    function togglePassword(inputId) {
        const input = document.getElementById(inputId);
        const btn = input.nextElementSibling; // Assumes button is immediately after input
        if (input.type === "password") {
            input.type = "text";
            btn.innerText = "Hide";
        } else {
            input.type = "password";
            btn.innerText = "Show";
        }
    }

    // View Switching Logic
    function showAuth(mode) {
        errorMsg.classList.add('hidden');
        if (mode === 'signup') {
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
            authTitle.innerText = "Create your account";
            authSubtitle.innerText = "Join the community today.";
            toggleText.innerHTML = 'Already have an account? <a href="javascript:void(0)" onclick="showAuth(\'login\')" class="link">Log in</a>';
        } else {
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
            authTitle.innerText = "Welcome back!";
            authSubtitle.innerText = "We're so excited to see you again!";
            toggleText.innerHTML = 'Need an account? <a href="javascript:void(0)" onclick="showAuth(\'signup\')" class="link">Register</a>';
        }
    }

    // Login Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Updated to use the IDs from your HTML fields
        const u = document.getElementById('emailField').value;
        const p = document.getElementById('passwordField').value;

         if(u === "jdguzman@gmail.com" && p === "jd2312") {
            // Option A: Redirect to external file
            window.location.href = "de guzman.html";}

        if(u === "pretzmurga@gmail.com" && p === "pm123") {
            // Option A: Redirect to external file
            window.location.href = "murga.html";}

        if(u === "jlespartero@gmail.com" && p === "jl123") {
            // Option A: Redirect to external file
            window.location.href = "Espartero.html";

            // Option B: If you are staying on the same page, use:
            // authWrapper.classList.add('hidden');
            // personalWebsite.classList.remove('hidden');
        } else {
            errorMsg.innerText = "Invalid credentials. Try 'jdguzman@gmail.com' and 'jd2312'.";
            errorMsg.classList.remove('hidden');
            errorMsg.style.display = "block"; // Ensure it is visible
        }
    });

    // Registration Submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Check your email to verify your account!");
    });

    // Logout Function
    function logoutAccount() {
        personalWebsite.classList.add('hidden');
        authWrapper.classList.remove('hidden');
        document.getElementById('emailField').value = '';
        document.getElementById('passwordField').value = '';
    }

    // Tab Switcher for Profile
    function switchTab(event, id) {
        const sections = document.querySelectorAll('.web-section');
        sections.forEach(s => s.classList.remove('active-section'));
        
        const btns = document.querySelectorAll('.nav-btn');
        btns.forEach(b => b.classList.remove('active'));

        document.getElementById(id).classList.add('active-section');
        event.currentTarget.classList.add('active');
    }