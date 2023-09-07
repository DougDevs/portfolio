import styled from 'styled-components';

export const Footer = styled.footer`
background-color: #333;
color: white;
padding: 20px;
display: flex;
flex-wrap: wrap; /* Permite que os cartões se ajustem em uma nova linha quando o espaço é limitado */
justify-content: center;
align-items: center;
`;

export const Resumo = styled.footer`
  color: white; 
  margin: 0 auto;
  width: 200px; 
  text-align: center;
  p {
    white-space: nowrap;
  }
 
  .litc {
    font-family: Hind,sans-serif;
    color: #fff;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: 0.3s;
    line-height: 55px;
    padding: 2%;
    text-transform: uppercase;
    text-shadow: 3px 3px 5px rgba(0,0,0,0.39);

  }
  
  .litc:hover {
    color: aqua;
    text-shadow: none;
  }
`;

export const Contact = styled.div`
display: flex;
align-items: center;

.card {
  --bg: #f7f7f8;
  --hover-bg: #FFE5F4;
  --hover-text: #E50087;
  max-width: 23ch;
  text-align: center;
  background: var(--bg);
  padding: 1.5em;
  padding-block: 1.8em;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.card__body {
  color: #464853;
  line-height: 1.5em;
  font-size: 1em;
}
.card__body > h1 {
  font-size: 15px;
  
}
.card > :not(span) {
  transition: .3s cubic-bezier(.6,.4,0,1);
}
.instagram {
  display: block;
  font-size: 1.4rem;
  letter-spacing: -.035em;
  background-image: linear-gradient(to right, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; /* Torna o texto transparente para mostrar o degradê por baixo */
}
.card a {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-text);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all .3s cubic-bezier(.6,.4,0,1);
}
.card:hover a {
  top: 0;
  font-size: 1.2em;
}
.card:hover {
  background: var(--hover-bg);
}
.card:hover>div,.card:hover>strong {
  opacity: 0;
}
///////////////////whatsapp///////////
.cardw {
  --bg: #f7f7f8;
  --hover-bgw: #a1ffc5;
  --hover-textw: #00a841;
  max-width: 23ch;
  text-align: center;
  background: var(--bg);
  padding: 1.5em;
  padding-block: 1.8em;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

.whatsapp {
  display: block;
  font-size: 1.4rem;
  letter-spacing: -.035em;
  background-image: linear-gradient(to right, #25d366, #128c7e);
  -webkit-background-clip: text;
  color: transparent; /* Torna o texto transparente para mostrar o degradê por baixo */
}
.cardw a {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-textw);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all .3s cubic-bezier(.6,.4,0,1);
}
.cardw:hover a {
  top: 0;
  font-size: 1.2em;
}
.cardw:hover {
  background: var(--hover-bgw);
}
.cardw:hover>div,.cardw:hover>strong {
  opacity: 0;
}
///////////////////////gmail////////
.cardg {
  --bgg: #fafafa;
  --hover-bgg: #ffabab; //cor de fundo
  --hover-textg: #ff3b3b;
  max-width: 23ch;
 
  text-align: center;
  background: var(--bgg);
  padding: 1.5em;
  padding-block: 1.8em;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  transition: .3s cubic-bezier(.6,.4,0,1),transform .15s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.h1 {
  display: inline;
}
.gmail {
  display: block;
  font-size: 1.4rem;
  letter-spacing: -.035em;
  background-image: linear-gradient(to right, #ff6b6b, #e53935);
  -webkit-background-clip: text;
  color: transparent; /* Torna o texto transparente para mostrar o degradê por baixo */
}
.cardg a {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--hover-textg);
  border-radius: 5px;
  font-weight: bold;
  top: 100%;
  transition: all .3s cubic-bezier(.6,.4,0,1);
}
.cardg:hover a {
  top: 0;
  font-size: 1.2em;
}
.cardg:hover {
  background: var(--hover-bgg);
}
.cardg:hover>div,.cardg:hover>strong {
  opacity: 0;
}


.card,
.cardw,
.cardg {
  height: 100px; /* Altura fixa para todos os cards */
  width: 60%;
  margin: 9px;
  
    
}
`;
export const H1Title = styled.h1`
  font-family: "Lucida Consoles", monospace;
  font-size: 36px;
  letter-spacing: 1px;
  line-height: 1.5; /* Espaçamento entre linhas */
  color: #333; /* Cor escura */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Sombra de texto */
  text-align: center;

  height: 100px;
  
`;



















