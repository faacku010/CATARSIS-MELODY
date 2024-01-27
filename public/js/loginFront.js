window.addEventListener("load", () => {

    let form = document.querySelector(".form");
    
    form.addEventListener("submit", (submitEvent) => {

        let errors = [];

        let correo = document.querySelector("#correo");
        let contrasenia = document.querySelector("#contrasenia");

        if (correo.value == "") {
            errors.push("debe escribir un usuario.");
            correo.classList.remove("is-valid");
            correo.classList.add("is-invalid");
        }
        if (correo.value.length <= 2) {
            errors.push('debe tener al menos 2 caracteres.');
            correo.classList.remove("is-valid");
            correo.classList.add("is-invalid");
        }
        let regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!regexEmail.test(correo.value)) {
            errors.push('Por favor, introduce un email válido.');
            correo.classList.remove("is-valid");
            correo.classList.add("is-invalid");
        }
        else {
            correo.classList.add("is-valid");
            correo.classList.remove("is-invalid");
        };

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