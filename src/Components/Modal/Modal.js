import { Component } from 'react';
import propTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    closeImage: propTypes.func.isRequired,
    largeImage: propTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.closePictureByClickEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.closePictureByClickEsc);
  }

  closePictureByClickEsc = e => {
    e.keyCode === 27 && this.props.closeImage();
  };

  closeImageOnOverlay = e => {
    e.target === e.currentTarget && this.props.closeImage();
  };
  render() {
    return (
      <div className={s.Overlay}>
        <div className={s.Modal} onClick={this.closeImageOnOverlay}>
          <img src={this.props.largeImage} alt="pic" />
        </div>
      </div>
    );
  }
}

export default Modal;
