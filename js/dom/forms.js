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
}

function checkearValidez() {
    console.log('Borrar');
}

