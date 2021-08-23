console.log("Hola Mundo Dom");
// Ajax login
jQuery(document).ready(function () {
	$("#form_login").submit(function (e) {
		e.preventDefault();

		var vacio = validar_vacio();

		if (vacio == true) {
			var str = $(this).serialize();
			$.ajax({
				type: "POST",
				dataType: "JSON",
				url: $(this).attr("action"),
				data: str,
				success: function (resultado) {
					if (resultado.code == 1) {
						console.log(resultado.msj);
					} else {
						alerts_toast("warning", null, resultado.msj);
					}
				},
			});
		}
	});
});

// Validar campos vacios de un Form y arrojar Toast
function validar_vacio() {
	var inputs = document.getElementsByClassName("form-control");
	var validar = true;

	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].value == "" || inputs[i].length == 0) {
			inputs[i].classList.add("is-invalid");
			alerts_toast("error", inputs[i].getAttribute("name"));
			validar = false;
		} else {
			inputs[i].classList.remove("is-invalid");
		}
	}
	return validar;
}

// Toast generar
function alerts_toast(tipo, input = null, msj = null) {
	var clase = {
		error: "bg-danger",
		warning: "bg-warning",
		ok: "bg-success",
	};

	var mensaje;

	if (input != null) {
		mensaje = "El campo " + input + " no puede estar vacío.";
	} else {
		mensaje = msj;
	}

	$(document).Toasts("create", {
		class: clase[tipo],
		title: "Alerta",
		//position: 'topLeft',
		autohide: true,
		delay: 5000,
		//icon: 'fas fa-envelope fa-lg',
		//image: 'root de la imagen',
		//imageAlt: 'User Picture',
		body: mensaje,
	});
}
