class Usuario {
  constructor(id, usuario, nombre, email, password, activo = true) {
    this.id = id;
    this.nombre = nombre;
    this.usuario = usuario;
    this.email = email;
    this.password = password;
    this.activo = activo;
  }
}
//Linea 12,14,15 descomenta, se guarda los cambios y los volves a comentar para asi crear uno solo
let admin = new Usuario(9999, "admin", "Admin", "admin@gmail.com", "admin");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
usuarios.push(admin);
localStorage.setItem("usuarios", JSON.stringify(usuarios));

//Generar id automático
function idRandom() {
  if (usuarios.length > 0) {
    return usuarios[usuarios.length - 1].id + Math.round(Math.random() * 100);
  } else {
    return Math.round(Math.random() * 100);
  }
}
//------------------------------------

let formulario = document.querySelector("#btnSubmit");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let id = idRandom();

  let nombre = document.querySelector("#name").value;
  let usuario = document.querySelector("#user").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let validar = usuarios.find(function (user) {
    return user.email === email;
  });

  if (validar !== undefined) {
    alert("Usuario existente");
    document.querySelector("#btnSubmit").reset();
    document.querySelector("#name").focus();
    return;
  }

  let newUser = new Usuario(id, usuario, nombre, email, password);
  usuarios.push(newUser);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  document.querySelector("#btnSubmit").reset();

  envioMailRegistro(newUser);

  alert("Registro exitoso");
});

//Mandar mail de confirmacion
function envioMailRegistro(array) {
  var templateParams = {
    destinatario: array.email,
    user_name: array.nombre,
    user_email: array.email,
    user_password: array.password,
  };

  emailjs.send("YOUR SERVICE ID", "YOUR TEMPLATE ID", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      // location.href = "login.html";
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
