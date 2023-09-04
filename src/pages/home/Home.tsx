import Header from "../../components/header/Header";
import Service from "../../components/services/Service";
// import Services from "../../components/service/Services";
import Planos from "../../components/planos/Planos";
import Footer from "../../components/contact/Contact";
import * as S from "./home.style";
import Portfolio1 from "../../components/portfolios/portfolio1";

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
        <div className="divMidPageText">
          <h2 className="h2MidPage">Somos uma empresa capacitada em digitalizar a sua empresa e deixa-la mais moderna</h2>
          <p className="pMidPage">
          </p>
        </div>
      </div>
      <div id="work" className="divMidPage">
        <div className="divMidPageText">
          <h2 className="h2MidPage">loren ipsun is dolor loren is loren is loren ipsun is dolor</h2>
          <p className="pMidPage">
          </p>
        </div>
      </div>
      <Service />
      <Portfolio1/>
      <Planos />
      <Footer />
      <S.Footer>
        <p>
          <span>SC DataLink</span>
        </p>
      </S.Footer>
    </S.HomeContainer>
  );
}
