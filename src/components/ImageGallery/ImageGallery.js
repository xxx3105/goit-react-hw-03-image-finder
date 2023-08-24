import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ListItems } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ListItems>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageKey={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          tags={image.tags}
        />
      ))}
    </ListItems>
  );
};
