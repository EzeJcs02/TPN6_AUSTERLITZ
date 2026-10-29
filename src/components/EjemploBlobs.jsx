import { useState } from "react";

export default function EjemploBlobs() {
  const [miBlob, setMiBlob] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const crearBlob = () => {
    const texto = "Hola, este es un Blob de texto creado con React.";
    const nuevoBlob = new Blob([texto], { type: "text/plain" });
    setMiBlob(nuevoBlob);
    setMensaje(
      "Blob creado. Tamaño: " + nuevoBlob.size + " bytes. Tipo: " + nuevoBlob.type
    );
  };

  const descargarArchivo = () => {
    if (!miBlob) {
      setMensaje("Primero tenés que crear un Blob de texto.");
      return;
    }
    const direccion = URL.createObjectURL(miBlob);
    const enlace = document.createElement("a");
    enlace.href = direccion;
    enlace.download = "ejemplo.txt";
    enlace.click();
    URL.revokeObjectURL(direccion);
    setMensaje("Archivo descargado: ejemplo.txt");
  };

  const leerPorcion = async () => {
    if (!miBlob) {
      setMensaje("Primero tenés que crear un Blob de texto.");
      return;
    }
    const porcion = miBlob.slice(0, 10, "text/plain");
    const textoPorcion = await porcion.text();
    setMensaje(
      "slice(0, 10) devolvió: \"" + textoPorcion + "\" (" + porcion.size + " bytes)"
    );
  };

  return (
    <section>
      <div className="botones">
        <button onClick={crearBlob}>Crear Blob de texto</button>
        <button onClick={descargarArchivo}>Descargar Blob</button>
        <button onClick={leerPorcion}>Usar slice()</button>
      </div>
      {mensaje && <p className="resultado">{mensaje}</p>}
    </section>
  );
}
