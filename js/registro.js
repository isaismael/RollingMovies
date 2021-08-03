let usersRegister = JSON.parse(localStorage.getItem("users")) || [];
if(usersRegister.length == 0) {
    let firstUser = [];
    const admin = {
        email: 'admin@admin.com',
        name: 'Admin',
        user: 'admin',
        password: '111111',
        admin: true
    }
    firstUser.push(admin);
    localStorage.setItem('users', JSON.stringify(firstUser));
}
let form1 = document.getElementById('form1');
form1.addEventListener('submit', function(e) {
    console.log(e);
    e.preventDefault();
    let oldUser = JSON.parse(localStorage.getItem("users")) || [];
    console.log(oldUser);
    let name = document.getElementById('name').value;
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(name, usuario, email, password);
    let user = {
        name,
        user: usuario,
        email,
        password,
        admin: false
    };
    oldUser.push(user);
    localStorage.setItem('users', JSON.stringify(oldUser));
});

