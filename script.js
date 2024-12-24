// Datos simulados de tracking
const trackingData = {
  "D10015867216206": "arrived",  // Ya llegó
  "456DEF": "not-arrived", // No ha llegado
  "789GHI": "arrived",  // Ya llegó
};

// Función para verificar el tracking
function checkTracking() {
  const trackingInput = document.getElementById("trackingNumber").value.trim();
  const resultDiv = document.getElementById("result");

  if (trackingData.hasOwnProperty(trackingInput)) {
    const status = trackingData[trackingInput];
    if (status === "arrived") {
      resultDiv.textContent = "¡Tu paquete ya llegó a Miami!";
    } else if (status === "not-arrived") {
      resultDiv.textContent = "Tu paquete aún no ha llegado a Miami.";
    }
    resultDiv.setAttribute("data-status", status);
  } else {
    resultDiv.textContent = "Número de tracking no encontrado.";
    resultDiv.setAttribute("data-status", "unknown");
  }
}
