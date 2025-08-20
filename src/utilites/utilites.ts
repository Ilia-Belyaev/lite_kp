import { GENRES, MAX_VISIBLE_FILMS } from '../constants';
import { BackDrop, FilmCards, Genre } from '../models/models';

export const filterFilms = (payload: [FilmCards, Genre]) => {
  const [films, genre] = payload;
  const a = genre.name === GENRES[0].name ? films : films.filter((film) => film.genres.some((currentGenre) => currentGenre.name === genre.name));

  return a;
};

export const setPhotoUrl = (poster: BackDrop | undefined, backDrop: BackDrop | undefined, undefinedImage: string) =>
  poster?.url ?? poster?.previewUrl ??
  backDrop?.url ?? backDrop?.previewUrl ?? undefinedImage;

export const addVisibleFilms = (films: FilmCards, filmslength: number) => films.slice(0, filmslength + MAX_VISIBLE_FILMS);

export const createNavBtnArray = (type: string, secondBtn: string) => {
  switch (type) {
    case 'tv-series':
      return ['О сериале', secondBtn];
    case 'anime':
      return ['Об аниме', secondBtn];
    case 'movie':
      return ['О фильме', secondBtn];
    case 'animated-series':
      return ['Об анимированном фильме', secondBtn];
    default:
      return ['О фильме', secondBtn];
  }
};

export const replaceName = (type: string) => {
  switch (type) {
    case 'О сериале':
      return 'tv-series';
    case 'Об аниме':
      return 'anime';
    case 'О фильме':
      return 'movie';
    case 'Об анимированном фильме':
      return 'animated-series';
    default:
      return 'Детали';
  }
};
