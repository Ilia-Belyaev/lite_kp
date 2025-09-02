import { GENRES, MAX_VISIBLE_TITLES } from '../constants';
import { BackDrop, TitleCards, Genre, Genres, Person, Countries, SearchInfo } from '../models/models';

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

export const setGenresInline = (genres: Genres) => `${String(genres.map((genre) => genre.name.concat('')))}.`;
export const setCountriesInline = (countries: Countries) => `${String(countries.map((country) => country.name.concat('')))}.`;

export const getPersonsCurrentRole = (persons: Person[], role: string) => persons.filter((person) => person.profession === role);

export const upperCaseLetter = (letter: string) => `${letter[0].toUpperCase() + letter.slice(1)}:`;

export const findSearchingTitles = (titles: TitleCards, info: SearchInfo) => {
  const isValidInput = /^[a-zA-Za-яА-Я0-9\s]+$/.test(info.letter);

  if (!isValidInput && info.letter.length !== 0) {
    return {titles: [] as TitleCards, searchIsOpened: info.isOpen, letter: info.letter};
  }

  const newFindedTitles = titles.filter((title) => title.name.toLowerCase().includes(info.letter.trim().toLowerCase()));

  return {titles: newFindedTitles, searchIsOpened: info.isOpen, letter: info.letter};
};

export const getLastVisibleCards = (searchingCards: TitleCards, genreCards: TitleCards, isSearchOpened: boolean, text: string) => {

  switch(true){
    case (!isSearchOpened):
      return genreCards;
    case (text.length === 0):
      return genreCards;
    case (searchingCards.length === 0):
      return [] as TitleCards;
    case (searchingCards.length > 0):
      return searchingCards;
    default: {
      return genreCards;
    }
  }
};

export const getFilteredFilms = (films: TitleCards) => films.filter((title) => title.name !== null);

export const debounce = <T extends unknown[]>(
  cb: (...args: T) => void,
  timer: number
) => {
  let t: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(t);
    t = setTimeout(() => cb(...args), timer);
  };
};

