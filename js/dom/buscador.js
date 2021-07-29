





function autocompletado () {
    document.getElementById("demo").innerHTML = '';

    var preguntas = [
    "Luca",
      "Romance",
      "Comedia",
      "Black Widow",
      "Bisomia",
      "El protector",
      "Space Jam",
      "Godzilla VS Kong",
      "El silencio de espias",
      "Infinite",
      "Nadie",
      "Jefe en pañales",
      "La purga",
      "Terror",
      "Accion",
      "Animadas",
      "Suspenso",
      "Toy Story 4",
      "Mi villano favorito 2",
      "Comedia romantica",
      "Suspenso",
      "Ciencia ficcion"
    ];

    var pal = document.getElementById("buscar-pal").value;
    var tam = pal.length;
    for(indice in preguntas){
      var nombre = preguntas[indice];
      var str = nombre.substring(0,tam);
      if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
        if(pal.toLowerCase() == str.toLowerCase()){
          var node = document.createElement("LI");
          var textnode = document.createTextNode(preguntas[indice]);
          node.appendChild(textnode);
          document.getElementById("demo").appendChild(node);
        }
      }
    }
  }