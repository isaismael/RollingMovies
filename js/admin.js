let user = JSON.parse(localStorage.getItem("user"));


if(user.admin == false) {
    window.location.href = '/pages/Registro.html'
}
