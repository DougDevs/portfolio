import * as S from "./contact.styles";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Contact() {
  return (
    <S.Contact id="contact">
      <hr />
      <h3>Entre em contato!</h3>
      <div className="divContact">
        <div>
          <BsWhatsapp className="icon" />
          <p>
          <span>Chame-nos no WhatsApp!:</span>
          <a href="https://api.whatsapp.com/send?phone=5547999516182">
          {` Clique aqui`}
          </a>
          </p>
        </div>
        <div>
          <AiOutlineMail className="icon" />
          <p>
          <span>Envie um email:</span>
          <a href="mailto:contato@scdatalink.com">
          {` Clique aqui`}
          </a>
          </p>
        </div>
        <div>
          <BsInstagram className="icon" />
          <p>
          <span>Siga-nos no instagram:</span>
          <a href="https://instagram.com/scdatalink">
          {` Clique aqui`}
          </a>
          </p>
        </div>
        <div>
          <FaMapMarkerAlt className="icon" />
          <p>
          <span>Endereço:</span>
          {` Três Barras SC`}
          </p>
        </div>
      </div>
    </S.Contact>
  );
}
