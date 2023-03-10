const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const registerButton = document.getElementById('register-button');


// Submete o formulário de login
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === '' || passwordValue === '') {
    alert('Por favor, preencha todos os campos!');
  } else {
    // Envia os dados para o servidor (fictício neste exemplo)
    console.log(`Username: ${usernameValue} | Password: ${passwordValue}`);
    alert('Login realizado com sucesso!');
  }
});
