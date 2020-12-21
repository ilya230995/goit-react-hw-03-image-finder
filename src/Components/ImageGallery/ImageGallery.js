import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ pictures, openImage }) {
  return (
    <ul className={s.ImageGallery}>
      {pictures.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          webformatURL={picture.webformatURL}
          onOpenImage={() => openImage(picture.largeImageURL)}
        />
      ))}
    </ul>
  );
}
export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
  openImage: PropTypes.func,
};
