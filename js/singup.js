
//? const singupForm = document.getElementById('singupform')

//? singupForm.addEventListener('submit', (e) => {
//?     e.preventDefault()
//?     const name = document.getElementById('name').value
//?     const email = document.getElementById('email').value
//?     const password = document.getElementById('password').value

//?     const Users = JSON.parse(localStorage.getItem('Users')) || []
//?     const isUserRegistared = Users.find(user =>  user.email === email)
//?     if (isUserRegistared) {
//?         return alert('El usuario ya esta registrado')
//?     }
//?     Users.push({name:  name, email: email, password: password})
//?     localStorage.setItem('Users', JSON.stringify(Users)) // Aquí es donde se hizo el cambio
//?     alert('Registro exitoso')
//? })

const singupform = document.getElementById('singupform'); //* binculamos el singup con el js

// *A qui le añadimo el evento al singup creamos una funcion de callback que resiva el evento.
singupform.addEventListener('submit', (e) => {
    // *Aqui resivimos el evento y llamamos a la funcion de preventDefault para que no nos recarge la paguina
    e.preventDefault()
    // * Aqui recibimos todos lo campos del singup
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    // *verificamos si el email ya asido registrado y esta almacenado en la base de datos 
    // ?vamos a hacer una localstorag para simular una base de datos
    let users = JSON.parse(localStorage.getItem('Users')) || [] //* hacemos una const sea un array donde almacenamos los usuarion o emails donde si tiene un usuario lo amlacena y si no tiene un usuario va a tener un array vacio
    const isUserRegistared = users.find(user => user.email === email)
    // *hacemos la validacion
    if (isUserRegistared) {
        window.location.href="login.html"
        return alert('El usuario ya esta registrado') //* Si el usuari ya esta registrado mandamos una alerta
    }
    // *Si el usuario no esta registrado tenemos que registrarlo
    users.push({ name: name, email: email, password: password }) //* creamos un objeto donde se almacenaran los datos de nombre, email y password
    localStorage.setItem('Users', JSON.stringify(users)) //*aqui guardamos el usuario
    alert('Registrado') //*mandamos una alerta para que el usuario vea que ya se a registrado

    // *Redirecion al login
    window.location.href = 'login.html'
})
