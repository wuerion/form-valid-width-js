const user = JSON.parse(localStorage.getItem('login_success')) || false //* verificamos si el usuari si ingreso por el login y no atraves de la modificacion del url login.html a index.html
if (!user) {
    window.location.href="login.html" //* si el usuario intenta ingresar a traves de la midificacion de la url lo regresamos a la pagina de login.html para qque ingrese por el login
}

const logout = document.getElementById('logout')  //* vinculamos el boton de el logout al js 

logout.addEventListener('click', ()=> { //* le añadimos el evento click 
    alert('Hasta luego') //* mandamos una alerta cunado el usuario hage click en el boton con el mensaje de 'Hasta luego'
    localStorage.removeItem(`login_success`) //* lo redirecionamos al login 
    window.location.href="login.html"

})