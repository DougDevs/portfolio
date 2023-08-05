import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import Services from "../../components/service/Services";
import Pricing from "../../components/pricing/Pricing";
import Contact from "../../components/contact/Contact";
import * as S from "./home.style";
import desktop1 from "../../img/desktop1.jpg";
import desktop2 from "../../img/desktop2.jpg";
import Gallery from "../../components/gallery/gallery";

export default function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <div id="home" className="divImgBackgroud">
        <div className="divTitleHome">
          <h1 className="titleHome">Agência de sites</h1>
          <p className="pHome">
            Levar sua empresa mais longe não é complicado.
          </p>
        </div>
      </div>
      <Products />
      <S.Section>
        <div className="sSectionDiv1">
          <img
            className="sSectionImg1"
            alt="imagem de um computador ligado"
            src={desktop1}
          />
        </div>
        <div className="sSectionDiv2">
          <img
            className="sSectionImg2"
            alt="imagem de um computador ligado"
            src={desktop2}
          />
        </div>
      </S.Section>
      <Services />
      <div id="work" className="divMidPage">
        <div className="divMidPageText">
          <h2 className="h2MidPage">Desenvolvemos sites exclusivos para sua empresa</h2>
          <p className="pMidPage">
            Tenha um site para sua empresa e alcance novos horizontes
            tenha mais credibilidade e nome no mercado!
          </p>
        </div>
      </div>
      <Pricing />
      <Gallery/>
      <Contact />
      <S.Footer>
        <p>
          {`Desenvolvido por `}
          <span>SC DataLink</span>
          {` © 2023`}
        </p>
      </S.Footer>
    </S.HomeContainer>
  );
}
