import { GENRES } from '../constants';
import { BackDrop, FilmCards, Genre } from '../models/models';

export const filterFilms = (payload: [FilmCards, Genre]) => {
  const [films, genre] = payload;
  const a = genre.name === GENRES[0].name ? films : films.filter((film) => film.genres.some((currentGenre) => currentGenre.name === genre.name));

  return a;
};

export const setPhotoUrl = (poster: BackDrop | undefined) => {
  if (typeof poster === 'undefined') {
    return 'Have no img';
  }
  const {url, previewUrl} = poster;

  if (url === null && previewUrl === null) {
    return 'Have no img';
  }
  if (previewUrl === null) {
    return url || 'Have no img';
  }

  return previewUrl;
};

