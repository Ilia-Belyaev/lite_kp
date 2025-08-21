import { GENRES, MAX_VISIBLE_TITLES } from '../constants';
import { BackDrop, TitleCards, Genre, Genres } from '../models/models';

export const filterTitles = (payload: [TitleCards, Genre]) => {
  const [films, genre] = payload;
  const a = genre.name === GENRES[0].name ? films : films.filter((film) => film.genres.some((currentGenre) => currentGenre.name === genre.name));

  return a;
};

export const setPhotoUrl = (poster: BackDrop | undefined, backDrop: BackDrop | undefined, undefinedImage: string) =>
  poster?.url ?? poster?.previewUrl ??
  backDrop?.url ?? backDrop?.previewUrl ?? undefinedImage;

export const addVisibleTitles = (films: TitleCards, filmslength: number) => films.slice(0, filmslength + MAX_VISIBLE_TITLES);

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

export const setGenresInline = (genres: Genres) => `${String(genres.map((genre) => genre.name.concat(', '))).slice(0, -2)}.`;
