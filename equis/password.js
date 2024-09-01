// Función para verificar la contraseña
function verificarContraseña() {
    const contraseñas = {
        "codigo1": "https://www.ejemplo1.com",
        "codigo2": "https://www.ejemplo2.com",
        "codigo3": "https://www.ejemplo3.com"
    };

    const input = document.getElementById("password").value;

    if (contraseñas[input]) {
        window.location.href = contraseñas[input];
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

function showErrorPopup() {
    document.getElementById('error-message').classList.remove('hidden');
  }
  
  function closePopup() {
    document.getElementById('error-message').classList.add('hidden');
  }
  

// Agregar el evento de escucha para la tecla Enter
document.getElementById("password").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        verificarContraseña();  // Llama a la función de verificación
    }
});
