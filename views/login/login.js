const emailInput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')
const formulario = document.querySelector('#formulario')


//haremos lo mismo que el de registro


//console.log(email)
//objeto para guardar la estructura
const datosLogin = {
    email:'',
    password:''
}
emailInput.addEventListener('input', e=>{
   // valemail = e.target.value;
    datosLogin.email= e.target.value;
    console.log(datosLogin.email)
})

passwordInput.addEventListener('input', e=>{
    // valemail = e.target.value;
     datosLogin.password= e.target.value;      
    console.log(datosLogin.password)
 
 })


//Evento formulario

formulario.addEventListener('submit', async e=>{
    e.preventDefault()

    //validar el objeto que hice arriba
    if (datosLogin.email && datosLogin.password) {
        const response = await axios.get('/api/users',datosLogin)
    }


})