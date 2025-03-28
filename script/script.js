function register() {
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;

    if (!fullname || !email || !password) {
        document.getElementById('message').textContent = 'Preencha todos os campos!';
        document.getElementById('message').style.color = 'red';
        return;
    }
    
    if (!nameRegex.test(fullname)) {
        document.getElementById('message').textContent = 'Nome inválido! Use apenas letras.';
        document.getElementById('message').style.color = 'red';
        return;
    }
    
    localStorage.setItem(email, JSON.stringify({ fullname, password }));
    document.getElementById('message').textContent = 'Usuário registrado com sucesso! Redirecionando...';
    document.getElementById('message').style.color = 'green';
    setTimeout(() => showLogin(), 1000);
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const userData = JSON.parse(localStorage.getItem(email));
    
    if (userData && userData.password === password) {
        document.body.innerHTML = `<p class='greeting'>Olá, ${userData.fullname}!</p>`;
    } else {
        document.getElementById('login-message').textContent = 'E-mail ou senha incorretos!';
        document.getElementById('login-message').style.color = 'red';
    }
}

function showLogin() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function showRegister() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}