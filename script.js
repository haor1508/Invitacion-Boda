fetch("TU_URL_DE_APLICACIÓN_WEB", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
})