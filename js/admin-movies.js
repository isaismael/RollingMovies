let form = document.querySelector('#add-movie');
let movies = JSON.parse(localStorage.getItem('movies')) || [];
console.log(form)
form.addEventListener('submit', (e) => {
    console.log('hola', e)

    let inputData = form.querySelectorAll('input, select');
    console.log(inputData)
    let newMovie = {}
    inputData.forEach((input) => {
        console.log(input.checkValidity());
        if(input.checkValidity()) {
            newMovie[input.name] = input.value;
        } else {
            return;
        }
    })
    newMovie.id = Math.ceil(Math.random() * 10000000);
    console.log(newMovie);
    movies.push(newMovie);
    console.log(movies);
    localStorage.setItem('movies', JSON.stringify(movies));
})

//Renderizar el array del localStorage de peliculas

// `<li id="${obj.id}` onclick="borrarItem(e)">obj.title
{/* <img src="/assets/movies/${obj.id}.jpg</li>` */}

//funcion borrar elemento
borrarItem((e) => {
    movies.find(mov => mov.id = e)
    // renderizarNuevamente
});
