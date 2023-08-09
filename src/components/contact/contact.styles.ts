import styled from "styled-components";

export const Contact = styled.section`
  padding: 10px;
  margin-top: 50px;
  

  hr {
    width: 100%;
  }
  h3 {
    font-family: "Lucida Consoles", monospace;
    font-size: 36px;
    letter-spacing: 1px;
    line-height: 1.5; /* Espaçamento entre linhas */
    color: #333; /* Cor escura */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Sombra de texto */
    text-align: center;
    margin: 70px;
    scroll-margin-top: 120px;
    white-space: nowrap;
   
  }

  p span {
    font-weight: bold;
    color: #17bed2;
    font-size: 16px;
  }

  .icon {
    color: #515769;
    line-height: 55px;
    font-size: 30px;
    padding: 10px;
  }

  .divContact {
    display: flex;
    justify-content: space-evenly
  }

  .divContact div {
    text-align: center;
  }

  @media(max-width: 770px) {
  h3 {
    font-size: 30px;
  }

  .divContact {
    display: block;
  }

  .divContact div {
    margin-top: 25px;
  }
}


`;
