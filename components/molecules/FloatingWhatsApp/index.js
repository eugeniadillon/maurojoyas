import { isMobile } from "react-device-detect";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FloatingWhatsApp = () => {
  const handleSubmit = () => {
    setTimeout(() => {
      if (isMobile) {
        const mensaje =
          "whatsapp://send?phone=541158959823" +
          "&text=Hola, vengo desde la pagina de MAURO JOYAS y tengo una consulta";
        window.open(mensaje, "_blank");
      } else {
        const mensaje =
          "https://web.whatsapp.com/send?phone=541158959823" +
          "&text=Hola, vengo desde la pagina de MAURO JOYAS y tengo una consulta";
        window.open(mensaje, "_blank");
      }
    }, 1500);
  };

  return (
    <span
      onClick={handleSubmit}
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
    </span>
  );
};

export default FloatingWhatsApp;
