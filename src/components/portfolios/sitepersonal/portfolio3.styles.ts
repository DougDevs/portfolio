import styled from "styled-components";

export const Button = styled.button`

  --color: #0077ff;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;


:before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

:hover {
  color: white;
}

:before {
  top: 100%;
  left: 100%;
  transition: .3s all;
}

:hover::before {
  top: -30px;
  left: -30px;
}



;`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  margin-top: 40px;
  
  

  @media (max-width: 767px) {
    grid-template-columns: 1fr; /* Apenas um item por linha no celular */
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
  margin-top: 70px;
  scroll-margin-top: 125px;
  
`;
export const H2Title = styled.h1`
  
  font-family: "Lucida Consoles", monospace;
  font-size: 26px;
  letter-spacing: 1px;
  line-height: 1.5; /* Espaçamento entre linhas */
  color: #333; /* Cor escura */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Sombra de texto */
  text-align: center;
  margin-top: 20px;
  scroll-margin-top: 125px;
  
`;

export const GalleryItemWrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  max-width: 300px;
  
  
  .gallery-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .gallery-content {
    padding: 10px;
    text-align: center;
  }

  .gallery-content h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .gallery-content p {
    margin-top: 5px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    .gallery-content {
      /* Limitando a largura do conteúdo para ajustar 4 itens por linha no PC */
      max-width: 500px;
    }
  }
`;
