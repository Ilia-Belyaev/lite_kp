export type ServerResponse = {
  docs: FilmCards;
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export type FilmCards = FilmCard[];

export type FilmCard = {
  ageRating: null | number;
  alternativeName: null | string;
  backDrop?: BackDrop;
  countries: Countries;
  description: string | null;
  enName?: null | string;
  genres: Genres;
  id: number;
  isSeries: boolean;
  movieLength: null | number;
  name: string;
  poster?: BackDrop;
  rating: Rating;
  ratingMpaa: null | string;
  releaseYears: ReleaseYears;
  seriesLength: null | number;
  shortDescription: null | string;
  status: string;
  ticketsOnSale: boolean;
  top10: null | number;
  top250: null | number;
  totalSeriesLength: null | number;
  type: string;
  typeNumber: number;
  votes: Rating;
  year: number;
}

export type Countries = Country[];

export type Country = {
  name: string;
}

export type Genres = Genre[];

export type Genre = {
  name:
    'все жанры' | 'драма' | 'комедия' |
    'мелодрама' | 'ужасы' | 'документальный' |
    'мультфильм' | 'детский' | 'фэнтези' |
    'концерт' | 'спорт' | 'биография' |
    'короткометражка' | 'аниме' | 'боевик' |
    'приключения' | 'семейный' | 'криминал' |
    'ток-шоу' | 'музыка';
}

export type BackDrop = {
  previewUrl: string | null;
  url: string | null;
}

export type Rating = {
  await: null;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
}

export type ReleaseYears = ReleaseYear[];

export type ReleaseYear = {
  start: number;
  end: number;
}
