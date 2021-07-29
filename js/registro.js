var name = document.getElementById('name').value;
var usuario = document.getElementById('usuario').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

localStorage.setItem("name", name);
localStorage.setItem("usuario", usuario);
localStorage.setItem("email", email);
localStorage.setItem("password", password);
JSON.stringify(name, usuario, email, password);