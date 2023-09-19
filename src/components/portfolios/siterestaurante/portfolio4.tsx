import { useState } from 'react';
import { Gallery } from "./portfolio4.styles";
import GalleryItem from "./portfolioitem4";
import { apiPortfolio4 } from "../../../services/services";
// import { H1Title } from "./portfolio4.styles";
import { H2Title } from "./portfolio4.styles";
import { Button } from "./portfolio4.styles";

const GalleryComponent: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState(4);

  const handleVerMaisClick = () => {
    setVisibleCards(visibleCards + 4);
    // Verifique se o activeElement é um elemento HTML antes de chamar o blur
    const activeElement = document.activeElement as HTMLElement | null;
    if (activeElement) {
      activeElement.blur();
    }
  };

  const handleVerMenosClick = () => {
    setVisibleCards(Math.max(4, visibleCards - 4));
    // Verifique se o activeElement é um elemento HTML antes de chamar o blur
    const activeElement = document.activeElement as HTMLElement | null;
    if (activeElement) {
      activeElement.blur();
    }
    
  };

  // Determine se há mais itens para mostrar
  const hasMoreItems = visibleCards < apiPortfolio4.length;

  return (
    <>
      <H2Title>Sites para restaurantes</H2Title>

      <Gallery id="gallery">
        {apiPortfolio4.slice(0, visibleCards).map((item, index) => (
          <GalleryItem
            key={index}
            name={item.name}
            description={item.description}
            imageLink={item.imageLink}
            link={item.link}
          />
        ))}
      </Gallery>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {hasMoreItems && (
          <Button onClick={handleVerMaisClick} className="button">Ver Mais</Button>
        )}
        {visibleCards > 4 && (
          <Button onClick={handleVerMenosClick} className='button'>Ver Menos</Button>
        )}
      </div>
    </>
  );
};

export default GalleryComponent;
