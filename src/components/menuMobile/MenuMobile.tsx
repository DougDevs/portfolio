import * as S from "./menuMobile.styles";

interface Props {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }: Props) {
  return (
    <S.Container isVisible={menuIsVisible}>
      <nav className="mobNav">
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#home"
        >
          INICIO
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#work"
        >
          SOBRE
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#services"
        >
          SERVIÇOS
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#portifolio"
        >
          PORTFOLIOS
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#pricing"
        >
          PLANOS
        </a>
       
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#contact"
        >
          CONTATO
        </a>
      </nav>
    </S.Container>
  );
}
