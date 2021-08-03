
function autocompletado () {
    document.getElementById("demo").innerHTML = '';

      var preguntas = [
        {nombre:"Luca",genero:"Animada", href:"404"},		
        {nombre:"Black Widow",genero:"Accion"},		
        {nombre:"Bisomia",genero:"Suspenso"},		
        {nombre:"El protector",genero:"Suspenso"},		
        {nombre:"Space Jam",genero:"Animada"},		
        {nombre:"Godzilla VS Kong",genero:"Ciencia ficcion"},		
        {nombre:"El silencio de espias",genero:"Accion"},		
        {nombre:"Infinite",genero:"Suspenso"},		
        {nombre:"Nadie",genero:"Suspenso"},		
        {nombre:"Jefe en pañales",genero:"Animada"},		
        {nombre:"La purga",genero:"Accion"},		
        {nombre:"Toy Story 4",genero:"Animada"},		
        {nombre:"Mi villano favorito 2",genero:"Animada"},		
        {nombre:"Soul",genero:"Animada"},		
        {nombre:"Joker",genero:"Accion"},		
        {nombre:"Un mal viaje",genero:"Comedia"},		
        {nombre:"El rey de zamunda",genero:"Comedia"},		
        {nombre:"Tom y Jerry",genero:"Comedia"},		
        {nombre:"Ser padre",genero:"Comedia"},		
        {nombre:"Mi abuelo es un peligro", genero:"Comedia"},
        {nombre:"Aves", genero:"Animada"},
        {nombre:"Batman", genero:"Accion"},
        {nombre:"Cruella", genero:"Accion"},
        {nombre:"Despiera la furia", genero:"Aventura"},
        {nombre:"Dinastia", genero:"Terror"},
        {nombre:"Rapido y furioso", genero:"Accion"},
        {nombre:"Jumaji", genero:"Aventura"},
        {nombre:"La calle del terror", genero:"Terror"},
        {nombre:"La guerra del mañana", genero:"Accion"},
        {nombre:"Teen titans", genero:"Suspenso"},
        {nombre:"Ejercito de los muertos", genero:"Terror"},
        {nombre:"Un lugar tranquilo", genero:"Terror"},
        {nombre:"It", genero:"Terror"},
        {nombre:"Expediente Warren", genero:"Terror"},
        {nombre:"The seventh day", genero:"Terror"},
        {nombre:"Ruega por nosotros", genero:"Terror"},
        {nombre:"Espiral", genero:"Terror"},
      ];
      // "Bisomia",
      // "El protector",
      // "Space Jam",
      // "Godzilla VS Kong",
      // "El silencio de espias",
      // "Infinite",
      // "Nadie",
      // "Jefe en pañales",
      // "La purga",
      // "Toy Story 4",
      // "Mi villano favorito 2",
    

    var pal = document.getElementById("buscar-pal").value;
    var tam = pal.length;
    for(indice in preguntas){
      var nombre = preguntas[indice].nombre;
      var genero = preguntas[indice].genero;
      var str = nombre.substring(0,tam);
      var strGen = genero.substring(0,tam);
      if((pal.length <= nombre.length && pal.length != 0 && nombre.length != 0)
      ||(pal.length <= genero.length && pal.length != 0 && genero.length != 0)){
        if(pal.toLowerCase() == str.toLowerCase() || pal.toLowerCase() == strGen.toLowerCase()){
          var node = document.createElement("div");
          node.setAttribute("class", "div-pel");
          var textnode = document.createTextNode(preguntas[indice].nombre);
          node.appendChild(textnode);
          document.getElementById("demo").appendChild(node);
        }
      }
    }
  }