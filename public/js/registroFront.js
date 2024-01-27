
window.addEventListener("load", () => {

    let form = document.querySelector(".form");
    
    form.addEventListener("submit", (submitEvent) => {

        let errors = [];

        let nombre = document.querySelector("#nombre");
        let apellido = document.querySelector("#apellido");
        let correo = document.querySelector("#correo");
        let contrasenia = document.querySelector("#contrasenia");
        let imagen = document.querySelector("#imagen_perfil");

        /* let valido = true; */

        /* let nombreError = document.querySelector('.error-nombre'); */

        if (nombre.value == "") {
            /* valido = false; */
            errors.push("El campo nombre no puede estar vacío");
            /* nombreError.textContent = 'El campo nombre no puede estar vacío' */
            nombre.classList.remove("is-valid");
            nombre.classList.add("is-invalid");
        }
        if (nombre.value.length < 2) {
            /* valido = false; */
            /* errors.push('El nombre debe tener al menos 2 caracteres.'); */
            /* nombreError.textContent = 'El nombre debe tener al menos 2 caracteres.' */
            nombre.classList.remove("is-valid");
            nombre.classList.add("is-invalid");
        } else  {
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        };


        if (apellido.value == "") {
            errors.push("El campo apellido no puede estar vacío");
            apellido.classList.remove("is-valid");
            apellido.classList.add("is-invalid");
        }
        if (apellido.value.length <= 2) {
                errors.push('El apellido debe tener al menos 2 caracteres.');
                apellido.classList.remove("is-valid");
                apellido.classList.add("is-invalid");
        }
        else {
            apellido.classList.add("is-valid");
            apellido.classList.remove("is-invalid");
        };

        let regexPassword = /^(?=|\d)(?=|[a-z])(?=|[A-Z])(?=|[^a-zA-Z0-9])(?!|\s*).{8,}$/;
        if (regexPassword.test(contrasenia.value)) {
            errors.push('La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, un número y un carácter especial.');
            apellido.classList.add("is-valid");
            apellido.classList.remove("is-invalid");
        }
        if (contrasenia.value == "") {
            errors.push("El campo contraseña no puede estar vacío");
            contrasenia.classList.remove("is-valid");
            contrasenia.classList.add("is-invalid");
        } else if (contrasenia.value.length < 8) {
            errors.push("El campo contraseña debe tener al menos 8 caracteres");
            contrasenia.classList.remove("is-valid");
            contrasenia.classList.add("is-invalid");
        } else {
            contrasenia.classList.add("is-valid");
            contrasenia.classList.remove("is-invalid");
        };

        let regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!regexEmail.test(correo.value)) {
            errors.push('Por favor, introduce un email válido.');
            correo.classList.remove("is-valid");
            correo.classList.add("is-invalid");
        }


/*         if (valido) {
            console.log('formulario valido');
        } else {
            console.log('form invalido');
        } */

        if (errors.length > 0) {
           /*  El submitEvent de submit está declarado en la linea 6 */
            submitEvent.preventDefault();
            let ulErrors = document.querySelector(".errores");
            ulErrors.classList.add("alert-warning");
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
        } else {
            alert("La validación fue exitosa")
            form.submit();
        }

    })

})