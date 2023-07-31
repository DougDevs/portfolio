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
          HOME
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#products"
        >
          PRODUTOS
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#service"
        >
          SERVIÇOS
        </a>
        <a
          onClick={() => setMenuIsVisible(false)}
          className="mobA"
          href="#work"
        >
          TRBALHO
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
