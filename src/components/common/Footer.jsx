import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Contáctanos</h4>
        <a href="https://wa.me/573013804646" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> WhatsApp: +57 301 380 4646
        </a>
      </div>
      <div className="footer-column">
        <h4>Redes Sociales</h4>
        <a href="https://www.instagram.com/propiedadesorienteinmobiliaria?igsh=MWd4eWQwMGJmbzBqeA%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> @propiedadesorienteinmobiliaria
        </a>
      </div>
      <div className="footer-column">
        <h4>Dirección</h4>
        <a href="https://www.google.com/maps/place/Cl.+47+%2376-55,+Rionegro,+Antioquia/@6.1509849,-75.3924395,17z/data=!4m14!1m8!3m7!1s0x8e469efcb4158823:0xf50ae8e56e1698e9!2sCl.+47+%2376-55,+Rionegro,+Antioquia!3b1!8m2!3d6.1510035!4d-75.3925824!10e5!3m4!1s0x8e469efcb4158823:0xf50ae8e56e1698e9!8m2!3d6.1510035!4d-75.3925824?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt /> Cl. 47 #76-55, Rionegro, Antioquia
        </a>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Propiedades Oriente. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
