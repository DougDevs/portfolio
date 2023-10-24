// import Services from "../../components/service/Services";
import Footer from "../../components/contact/Contact";
import * as S from "./home.style";
import Sitespadrao from "../../components/portfolios/sites/portfolio1";
import SPersonal from "../../components/portfolios/sitepersonal/portfolio3";
import Restaurante from "../../components/portfolios/siterestaurante/portfolio4";
import Sitesconstrutora from "../../components/portfolios/siteconstrucao/portfolio5";
import Sitefotografia from "../../components/portfolios/sitefotografo/portfolio6";
import Siteimobiliaria from "../../components/portfolios/siteimobiliaria/portfolio7";


export default function Home(): JSX.Element {
  return (
    <S.HomeContainer>
      <div id="home" className="divImgBackgroud">
        <div className="divTitleHome">
          <h1 className="titleHome">Portfolio Terleski</h1>
        </div>
      </div>
    
     
      <Sitespadrao/>
      <Restaurante/>
      <Sitesconstrutora/>
      <Sitefotografia/>
      <SPersonal/>
      <Siteimobiliaria/>
      <Footer />
      <S.Footer>
        <p>
          <span>SC DataLink - Terleski</span> <br />
          <span>Douglas Terleski - Desenvolvedor</span>
        </p>
      </S.Footer>
    </S.HomeContainer>
  );
}
