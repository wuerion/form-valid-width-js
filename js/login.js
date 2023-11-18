const loginform = document.getElementById('loginform') //* binculamos el login.js con el login.html
loginform.addEventListener('submit', (e) => {//* creamos una funcion para no recarge la pagina y le pasamos un evento
    e.preventDefault() //* creamos el evento para que no recarge la web
    // *vinculamos todos los campos del login
    const email = document.getElementById('email').value 
    const password = document.getElementById('password').value
    const Users = JSON.parse(localStorage.getItem('Users')) || [] //* binculalos la local storage del archivo signup.js 
    const valiUser = Users.find(user => user.email === email && user.password === password) //* buscamos en la local storage el usuario y la contraseña
    if (!valiUser) { //* valildamos si el usiario o la contraseña son corectamente escritras si estan mal scritras manados una alerta con el mensaje de 'usuario y/o constraseña incorectos'
        console.log('no funciona')
        return alert('usuario y/o contraseña incorectos')
    }
    alert(`Bienvenido ${valiUser.name}`) //* mandamos una alerta con el mensaje 'Bienvenido' y le signamos el nombre de usuario cunado el usuario ingrese corectamentte los datos en los campos
    console.log('funciona')
    localStorage.setItem('login_success', JSON.stringify(valiUser)) //*hacemos una redirecion al index cuando el susuario se haga login
    window.location.href="index.html"
})

console.log(Users)