var params = {
    from: `jleiva21082004@gmail.com`,
    to: `jleiva21082004@gmail.com`,
    message: `Correo de prueba`
    
};
 
emailjs.send('service_xna7qir', 'template_1ls0nr8', params)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });