document.getElementById("confirmationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let data = {
        name: formData.get("name"),
        guests: formData.get("guests"),
        attendance: formData.get("attendance"),
        type: formData.get("type"),
        message: formData.get("message")
    };

    fetch("https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbws23H4g0BGu8BqSfWQRNURD_QUKFE2k0TyZKiMGfkbIe6OOQyVAXcPYyvhwB-rgrB8_g/exec/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("statusMessage").innerText = "✅ Tu asistencia ha sido confirmada. ¡Nos vemos en la boda!";
    })
    .catch(error => {
        document.getElementById("statusMessage").innerText = "❌ Hubo un problema. Inténtalo nuevamente.";
    });
});