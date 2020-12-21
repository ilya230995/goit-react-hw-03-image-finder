import { Component } from 'react';

import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import ApiService from './Components/apiService';
import Loader from 'react-loader-spinner';
import Modal from './Components/Modal';

class App extends Component {
  state = {
    searchQuery: null,
    pictures: [],
    page: 1,
    loading: false,
    largeImageSrc: null,
    error: null,
  };

  addSearchbarValue = query => {
    this.setState({ searchQuery: query, pictures: [], page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    const { pictures, searchQuery } = this.state;
    if (prevState.pictures.length !== pictures) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (prevState.searchQuery !== searchQuery && searchQuery !== '') {
      this.fetchPics();
    }
  }

  fetchPics = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    ApiService(searchQuery, page)
      .then(picture =>
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...picture],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  openModal = url => {
    this.setState({ largeImageSrc: url });
  };
  closeModal = () => {
    this.setState({ largeImageSrc: '' });
  };

  render() {
    const { addSearchbarValue, openModal, fetchPics, closeModal } = this;
    const { pictures, loading, largeImageSrc, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={addSearchbarValue} />
        {pictures.length > 0 && !error && (
          <ImageGallery pictures={pictures} openImage={openModal} />
        )}
        {loading && <Loader />}
        {pictures.length !== 0 && !loading && <Button onClick={fetchPics} />}
        {largeImageSrc && (
          <Modal largeImage={largeImageSrc} closeImage={closeModal} />
        )}
      </>
    );
  }
}

export default App;
