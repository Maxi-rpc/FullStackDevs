console.log("Hola Mundo Dom");
// Ajax login
jQuery(document).ready(function () {
	$("#form_login").submit(function (e) {
		e.preventDefault();
		validar_vacio();

		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			dataType: "JSON",
			url: $(this).attr("action"),
			data: str,
			success: function (resultado) {
				if (resultado) {
					console.log(resultado);
				} else {
					console.log("error en ajax");
				}
			},
		});
	});
});

function validar_vacio() {
	var inputs = document.getElementsByClassName("form-control");

	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].value == "" || inputs[i].length == 0) {
			inputs[i].classList.add("is-invalid");
			alerts_toast("error", inputs[i].getAttribute("name"));
		} else {
			inputs[i].classList.remove("is-invalid");
		}
	}
}

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
