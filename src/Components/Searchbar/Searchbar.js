import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: null,
  };
  searchbarHandler = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);

    this.setState({ inputValue: null });
  };
  render() {
    const { submitHandler, searchbarHandler } = this;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={submitHandler}>
          <button type="submit" className={s.SearchFormBbutton}>
            <span className="SearchForm-button-label"></span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={searchbarHandler}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
