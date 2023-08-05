import { Gallery } from "./gallery.styles";
import GalleryItem from "./galleryItem";
import { apiGallery } from "../../services/services";
import { H1Title } from "./gallery.styles";


const GalleryComponent: React.FC = () => {
  return (
    <>
    <H1Title id="portifolio">Portfolios</H1Title>

    <Gallery id="gallery">
        {apiGallery.map((item, index) => (
          <GalleryItem
            key={index}
            name={item.name}
            description={item.description}
            imageLink={item.imageLink}
            link={item.link}
          />
        ))}
      </Gallery>
    </>
  );
};

export default GalleryComponent;
