let form1 = document.getElementById('form1');
form1.addEventListener('submit', function(e) {
    console.log(e);
    e.preventDefault();
    let oldUser = JSON.parse(localStorage.getItem("users")) || [];
    let name = document.getElementById('name').value;
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(name, usuario, email, password);
    let user = {
        name,
        user: usuario,
        email,
        password
    };
    oldUser.push(user);
    localStorage.setItem('users', JSON.stringify(oldUser));
});

<
script type = "text/javascript"
src = "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js" > < /script> <
    script type = "text/javascript" >
    (function() {
        emailjs.init("user_Ez93saRR2IKOH8pI6snTx");
    })(); <
/script>