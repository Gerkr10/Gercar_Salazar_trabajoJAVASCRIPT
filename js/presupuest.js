    const nombreInput = document.getElementById ('nombre')
    const apellidosInput = document.getElementById ('apellidos')
    const telefonoInput = document.getElementById ('telefono')
    const emailInput = document.getElementById ('email')
    const formulario = document.getElementById ('formulario1')
    
    function validarNombre(){
        const nombre = nombreInput.value
        const nombrePattern = /^[a-zA-Z]*$/
        if (nombre.length >= 3 && nombre.length<16 && nombrePattern.test(nombre)){
            nombreInput.classList.add('valido')
            nombreInput.classList.remove('invalido')
            document.getElementById('nombreError').textContent =''
        } else{
            nombreInput.classList.add('invalido')
            nombreInput.classList.remove('valido')
            document.getElementById('nombreError').textContent ='El nombre de usuario debe tener mínimo 3 y máximo 15 caracteres y sólo letras'
        }
    }
    
    function validarApellidos(){
        const apellidos = apellidosInput.value
        const apellidosPattern = /^[a-zA-Z]*$/
        if (apellidos.length >= 3 && apellidos.length<40 &&apellidosPattern.test(apellidos)){
            apellidosInput.classList.add('valido')
            apellidosInput.classList.remove('invalido')
            document.getElementById('apellidosError').textContent =''
        } else{
            apellidosInput.classList.add('invalido')
            apellidosInput.classList.remove('valido')
            document.getElementById('apellidosError').textContent ='Los apellidos de usuario debe tener mínimo 3 y máximo 15 caracteres y sólo letras'
        }
    }
    
    function validarTelefono(){
        const telefono = telefonoInput.value
        const telefonoPattern = /^\d{9}$/
        if (telefonoPattern.test(telefono)){
            telefonoInput.classList.add('valido')
            telefonoInput.classList.remove('invalido')
            document.getElementById('telefonoError').textContent =''
        } else{
           telefonoInput.classList.add('invalido')
           telefonoInput.classList.remove('valido')
           document.getElementById('telefonoError').textContent ='El número de telefono debe contener 9 digitos y deben ser sólo números'
        }
    }
    
    function validarEmail(){
        const email = emailInput.value
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (emailPattern.test(email)){
            emailInput.classList.add('valido')
            emailInput.classList.remove('invalido')
            document.getElementById('emailError').textContent =''
        } else{
            emailInput.classList.add('invalido')
            emailInput.classList.remove('valido')
            document.getElementById('emailError').textContent ='ingrese un correo electrónico válido'
        }
    }

    function resetFormulario(){
        formulario.reset()
        nombreInput.classList.remove ('valido')
        apellidosInput.classList.remove ('valido')
        telefonoInput.classList.remove ('valido')
        emailInput.classList.remove ('valido')
    }
    
    nombreInput.addEventListener('input', validarNombre)
    apellidosInput.addEventListener('input', validarApellidos)
    telefonoInput.addEventListener('input', validarTelefono)
    emailInput.addEventListener('input', validarEmail)

    
    formulario.addEventListener ('submit', function (event){
        event.preventDefault()
        validarNombre()
        validarApellidos()
        validarTelefono()
        validarEmail()
       
     })
        if(nombreInput.classList.contains('valido')&& apellidosInput.classList.contains('valido')&& telefonoInput.classList.contains('valido') && emailInput.classList.contains ('valido')){
            alert ('formulario enviado correctamente')
            resetFormulario()

        }else{
            alert ('Por favor, corrija los errores en el formulario')
         }
 

         (()=>{

    let sumaTotal = 0; 

    const tipoPag = document.querySelector("#base");//un elemento
    const plazoMes = document.querySelector("#plazo");
    const opciones = document.querySelectorAll("#extras>input");//array
    const preTotal = document.querySelector("#total");

    let suma = ()=>{
        sumaTotal = parseInt(tipoPag.value);

        switch (plazoMes.value) {
            case "1":
                sumaTotal += 15;
                break;
            case "2":
                sumaTotal += 12;
                break;
            case "3":
                sumaTotal += 10;
                break;
            case "4":
                sumaTotal += 5;
                break;
            case "5":
                sumaTotal += 0;
                break;
                
            default:
                sumaTotal += 0;
                break;
        }

        opciones.forEach(element => {
            if(element.checked){
                sumaTotal += parseInt(element.value);
            }
        });
        preTotal.value = sumaTotal;
    }

    opciones.forEach(element => {
        element.addEventListener("change",suma,false);
    });
    tipoPag.addEventListener("change",suma,false);
    plazoMes.addEventListener("change",suma,false);
})();