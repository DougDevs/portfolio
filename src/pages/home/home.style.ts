import styled from "styled-components";
import Img from "../../img/marketing-office.jpg";
import ImgSmartphone from "../../img/smartphone.jpg";

export const HomeContainer = styled.div`
#work {
  scroll-margin-top: 86px;
}
.divImgBackgroud {
  background: url(${Img}) center center no-repeat;
  width: 100%;
  height: auto;
  background-size: cover;
}

.divTitleHome {
  width: 100%;
  height: 100%;
  z-index: 1;
  text-align: center;
  background: rgba(81,87,105,.4);
  padding: 250px 0 200px;
}

.imgBackgroud {
  z-index: -1;
  filter: blur(2px);
  width: 100%;
  height: 699px;
}

.titleHome {
  border: black;
  font-weight: 700;
  font-size: 60px;
  color: white;
  text-shadow: 3px 3px 4px rgba(0,0,0,0.71);
}

.pHome {
  font-size: 25px;
  font-weight: 400;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: white;
  text-shadow: 3px 3px 4px #000000;
}

.divMidPage {
  display: flex;
  justify-content: center;
  align-items: center; /* Adicione esta linha para centralizar verticalmente */
  position: relative;
  z-index: 1;
  background: url(${ImgSmartphone}) center center no-repeat fixed;
  background-size: cover;
  min-height: 100%;
  height: 384px;
}
.divtext {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta a altura para ocupar toda a altura da tela (viewport) */
}

.h2t {
  font-size: 40px;
  font-weight: bold;
  font-family: monospace;
  color: white;
  margin: 10px 0;
  text-align: center; /* Centraliza o texto horizontalmente */
}

/* Media query para tornar o texto responsivo em telas menores */
@media (max-width: 768px) {
  .h2t {
    font-size: 25px; /* Ajuste o tamanho da fonte para telas menores, se necessário */
  }
}


`;

export const Section = styled.section`
  display: flex;
  margin-top: 100px;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .sSectionDiv1 {
    padding-right: 4px;
  }

  .sSectionDiv2 {
    padding-left: 4px;
  }
  
  @media(max-width: 770px) {
  display: block;
  .sSectionDiv1 {
    padding-right: 0px;
  }

  .sSectionDiv2 {
    padding-left: 0px;
    margin-top: 10px;
  }
}
`;

export const Div = styled.div`
`;

export const Footer = styled.footer`
  text-align: center;
  background-color: #333;
  margin-top: 10px;

  p {
    padding: 10px;
    color: #999;
    font-size: 14px;
  }

  p span {
    font-weight: 700;
  }
`;