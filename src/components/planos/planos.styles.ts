import styled from "styled-components";

export const Pricing = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-margin-top: 180px;

  .divApiPricing {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between; /* Distribuir o espaço horizontalmente */
    margin: 0 auto;
    max-width: 2000px; /* Ajuste a largura máxima conforme necessário */
    padding: 0 40px; /* Adicione algum espaçamento lateral, se necessário */
  }

  @media (max-width: 770px) {
    height: auto;
    margin-right: 0; /* Adicione esta linha para remover qualquer margem direita */
    
    .divApiPricing {
      display: block;
      margin-right: 0; /* Adicione esta linha para remover qualquer margem direita */
      padding: 0 17px; /* Adicione algum espaçamento lateral para dispositivos menores, se necessário */
      align-items: center;
    }
  }
`;
export const PriceCard = styled.div`
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 350px;
  height: 450px;
  padding: 10px 1px;
  margin: 30px 30px;
  text-align: center;
  position: relative;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(33, 150, 243, 0.4), 0 4px 6px -4px rgba(33, 150, 243, 0.4);
  border-radius: 10px;
  background-color: #6B6ECC;
  background: linear-gradient(45deg, #04051dea 0%, #2b566e 100%);
}
.content {
  padding: 0px;
}

.content .price {
  color: white;
  font-weight: 800;
  font-size: 40px;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
 
}

.content .description {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  font-size: 14px;
}

.content .title {
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.64);
  margin-top: 10px;
  font-size: 25px;
  letter-spacing: 1px;
}

.button {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: none;
  outline: none;
  color: rgb(255 255 255);
  text-transform: uppercase;
  font-weight: 700;
  font-size: .75rem;
  padding: 0.75rem 1.5rem;
  background-color: rgb(33 150 243);
  border-radius: 0.5rem;
  text-shadow: 0px 4px 18px #2c3442;
}
.button:hover {
  cursor: pointer;
    background-color: #17bed2;
    color: white;
    transition-duration: .4s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.7,1,.7,1);
}


`;

export const StyledList = styled.ul`
  display: flex;
  margin: 30px;
  white-space: nowrap;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding-left: 0;
  
  
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #fafafa;
  font-size: 20px;
  
`;

export const Bullet = styled.div`
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #3498db, #27ae60); /* Degradê azul e verde */
  border-radius: 50%;
  margin-right: 10px;
`;


export const H1Title = styled.h1`
  font-family: "Lucida Consoles", monospace;
  font-size: 36px;
  letter-spacing: 1px;
  line-height: 1.5; /* Espaçamento entre linhas */
  color: #333; /* Cor escura */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Sombra de texto */
  text-align: center;
  margin-top: 70px;
  
`;