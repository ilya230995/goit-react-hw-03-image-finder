function fetchPics(searchQuery, page = 1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=18801685-89b573afa326cacf166b5903d`;

  return fetch(url)
    .then(res => res.json())
    .then(pics => pics.hits);
}

export default fetchPics;
