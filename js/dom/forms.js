class User {
    constructor(name, surname, email, age, gender) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.age = age;
        this.gender = gender;
    }
}

let formOne = document.forms['myForm'];
// let inputs = formOne.querySelectorAll('input, select, textarea');
console.log(formOne)
let inputs = Array.from(formOne.elements);

console.log(inputs);


let button = document.getElementById('submit');

// inputs = [...inputs];
// console.log(inputs);

formOne.addEventListener('keyup', function(e) {
    console.log('Entra al')
    let valid = true;
    inputs.forEach(el => {
        console.log(el.value + ': ' + el.checkValidity());
        if(el.checkValidity() == false) {
            valid = false
        }
    });
    if(valid) {
        button.classList.remove('disabled');
    }
});

let cube = document.querySelector('.cube');
let cube2 = document.getElementsByClassName('cubeTwo')[0];


console.log(cube, cube2);
cube.addEventListener('mouseover', function(){
    cube.style.backgroundColor = '#ff0000';
});

cube.addEventListener('mouseleave', function(){
    cube.style.backgroundColor = '#9DFF00';
});


function saveUser() {
    // inputs.forEach(el => console.log(el.value));
    let user = {}
    for(el of inputs) {        
        user[el.getAttribute('name')] = el.value;
    }

    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    var params = {
        from: document.getElementById("email").value,
        to: "jleiva21082004@gmail.com",
        message:"Te enviamos las respuestas a los datos requeridos en el formulario. Sera respondido a la brevedad.",
        username: document.getElementById("username").value, 
        name : document.getElementById("nombre").value,
        surname : document.getElementById("apellido").value,
        email : document.getElementById("email").value,
        edad : document.getElementById("edad").value,
        sexo : document.getElementById("sexo").value,
    };
     
    emailjs.send('service_zbtl8uu', 'template_1ls0nr8', params)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}

function checkearValidez() {
    console.log('Borrar');
}


