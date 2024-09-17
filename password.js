// Función para verificar la contraseña
function verificarContraseña() {
    const contraseñas = {
        "vn": "pagina1/VisualNovel.html",
        "VN": "pagina1/VisualNovel.html",
        "TOE": "pagina2/toe.html",
        "toe": "pagina2/toe.html",
    };

    const input = document.getElementById("password").value;

    if (contraseñas[input]) {
        window.location.href = contraseñas[input];
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

// Agregar el evento de escucha para la tecla Enter
document.getElementById("password").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        verificarContraseña();  // Llama a la función de verificación
    }
});
