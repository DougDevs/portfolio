
import { GalleryItemWrapper } from "./portfolio2.styles";

interface GalleryItemProps {
  name: string;
  // description: string;
  imageLink: string;
  link: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  name,
  // description,
  imageLink,
  link
}) => {
  return (
    
    <GalleryItemWrapper>
      
      <div className="gallery-image">
        <img src={imageLink} alt={name} />
      </div>
      <div className="gallery-content">
        <h3>{name}</h3>
        {/* <p>{description}</p> */}
        <a href={`https://instagram.com/${link}`} rel="noreferrer" target="_blank">@{link}</a>
              </div>
    </GalleryItemWrapper>
  );
};

export default GalleryItem;
