document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  const signupToggle = document.getElementById('signup-toggle');
  const loginToggle = document.getElementById('login-toggle');

  signupToggle.addEventListener('click', () => {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupToggle.classList.add('active');
    loginToggle.classList.remove('active');
  });

  loginToggle.addEventListener('click', () => {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
  });

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Signup form submitted!');
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login form submitted!');
  });
});
