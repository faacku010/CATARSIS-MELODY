window.addEventListener("load", () => {

    let form = document.querySelector(".form");
    form.nombre.focus();

    form.addEventListener("submit", (submitEvent) => {

        let errors = [];

        let nombre = document.querySelector("#nombre");
        let apellido = document.querySelector("#apellido");
        let correo = document.querySelector("#correo");
        let contrasenia = document.querySelector("#contrasenia");
        let imagen = document.querySelector("#imagen_perfil");


        if (nombre.value == "") {
            errors.push("El campo nombre no puede estar vacío");
            nombre.classList.remove("is-valid");
            nombre.classList.add("is-invalid");
        } else {
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        };


        if (apellido.value == "") {
            errors.push("El campo apellido no puede estar vacío");
            apellido.classList.remove("is-valid");
            apellido.classList.add("is-invalid");
        } else {
            apellido.classList.add("is-valid");
            apellido.classList.remove("is-invalid");
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
            form.contrasenia.focus();
        };




        console.log(errors)
        if (errors.length > 0) {
            /* El submitEvent de submit está declarado en la linea 6 */
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