let user = JSON.parse(localStorage.getItem("user"));

if(user == null) {
    window.location.href = '/pages/Registro.html'
}