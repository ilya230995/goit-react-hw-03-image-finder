import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, onOpenImage }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="asd"
        className={s.ImageGalleryItemImage}
        onClick={onOpenImage}
      />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onOpenImage: PropTypes.func,
  webformatURL: PropTypes.string,
};
