import { useState } from 'react';
import { Gallery } from "./portfolio6styles";
import GalleryItem from "./portfolioitem6";
import { apiPortfolio6 } from "../../../dados/services";
// import { H1Title } from "./portfolio4.styles";
import { H2Title } from "./portfolio6styles";
import { Button } from "./portfolio6styles";

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
  const hasMoreItems = visibleCards < apiPortfolio6.length;

  return (
    <>
      <H2Title>Site para empresa de fotografia</H2Title>

      <Gallery id="gallery">
        {apiPortfolio6.slice(0, visibleCards).map((item, index) => (
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
