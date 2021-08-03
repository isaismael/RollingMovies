// let arrayusuarios = [];
// let form = document.getElementById("form2");
// let email = document.getElementById("email2");
// let password = document.getElementById("password2");

// let users = JSON.parse(localStorage.getItem('users')) || [];
// console.log(users);

// class User {
//     constructor(user, pass) {
//         this.user = user;
//         this.pass = pass;
//     }
// }

// form1.addEventListener('submit', function(event) {
//     event.preventDefault();

//     if (users.length) {
//         let index;
//         console.log(email.value);
//         users.filter((el, i) => {
//             if (el.user == email.value) {
//                 index = i;
//             }
//         });
//         if (index !== undefined) {
//             if (password.value == users[index].pass) {
//                 localStorage.setItem("user", JSON.stringify(users[index]));
//                 window.location.replace("/index.html");
//             }
//         }
//     } else {
//         alert("correo o contraseña incorrectos");
//     };

// });
class User {
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
    }
}

let arrayusuarios = [];
let form = document.getElementById("form2");
let email = document.getElementById("email2");
let password = document.getElementById("password2");
let users = JSON.parse(localStorage.getItem("users")) || [];

console.log(users);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (users.length > 0) {
        let index;
        console.log(email.value);
        index = users.findIndex((item) => {
            return item.email === email.value;
        });
        console.log(index);
        if (index !== -1) {
            if (password.value == users[index].password) {
                localStorage.setItem("user", JSON.stringify(users[index]));
                window.location.replace("../index.html");
            }
        }
    } else {
        alert("correo o contraseña incorrectos");
    }
});