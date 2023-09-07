import Header from "../../components/header/Header";
import Service from "../../components/services/Service";
// import Services from "../../components/service/Services";
import Planos from "../../components/planos/Planos";
import Footer from "../../components/contact/Contact";
import * as S from "./home.style";
import Sites from "../../components/portfolios/sites/portfolio1";
import SPersonal from "../../components/portfolios/sitepersonal/portfolio3";
import Identidade from "../../components/portfolios/identidade/portfolio2";



export default function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <div id="home" className="divImgBackgroud">
        <div className="divTitleHome">
          <h1 className="titleHome">SC DataLink</h1>
          <h2 className="titleHome">Soluções digitais para sua empresa</h2>
          <p className="pHome">
            Nossa empresa elevando a sua.
          </p>
        </div>
      </div>
      
    
      {/* <Services /> */}
      <div id="work" className="divMidPage">
        <div className="divtext">
          <h2 className="h2t">Somos profissionais em:</h2>
          <h2 className="h2t">WebSites; Identidade visual; Social Media; Tráfego pago</h2>
        </div>
      </div>
  
      <Service />
      
      <Sites/>
      <SPersonal/>
      <Identidade/>
      <Planos />

      <Footer />
      <S.Footer>
        <p>
          <span>SC DataLink - Studio Hyper</span> <br />
          <span>Douglas Terleski - Desenvolvedor,    Wanderley Valim - Designer</span>
        </p>
      </S.Footer>
    </S.HomeContainer>
  );
}
