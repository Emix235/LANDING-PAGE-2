const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  [nameInput, emailInput, messageInput].forEach(input => {
    input.style.borderColor = 'rgba(255,255,255,.12)';
  });

  let valid = true;

  if (nameInput.value.trim() === '') {
    valid = false;
    nameInput.style.borderColor = 'red';
  }

  if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
    valid = false;
    emailInput.style.borderColor = 'red';
  }

  if (messageInput.value.trim() === '') {
    valid = false;
    messageInput.style.borderColor = 'red';
  }

  if (!valid) {
    form.classList.remove('shake');
    void form.offsetWidth;
    form.classList.add('shake');
    return;
  }

  // Simular envío
  form.querySelector('button[type="submit"]').textContent = 'Enviando...';
  setTimeout(() => {
    form.reset();
    form.querySelector('button[type="submit"]').textContent = 'Enviar';
    alert('¡Gracias por tu mensaje!');
  }, 1000);
});
