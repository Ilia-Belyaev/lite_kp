import { Genres } from './models/models';

export enum AppRoute {
  Main = '/',
  Film = '/film/:id',
  Error = '/*',
}

export const MAX_VISIBLE_FILMS = 10;

export const FILM_COUNT = 10;

export enum NameSpace {
  PopularFilms = 'PopularFilms',
  FIlmGenres = 'Genres',
  CurrentGenreFilms = 'CurrentGenreFilms',
  VisibleFilms = 'VisibleFilms',
  CurrentFilmInfo = 'CurrentFilmInfo',
  CurrentFilmNavBtn = 'CurrentFilmNavBtn',
}

export enum ApiRoute {
  PopularKPFilms = '/movie?rating.kp=8.3-10&limit=250',
  CurrentFilm = '/movie/',
}

export enum ErrorMessages {
  NoID = 'ID не передан',
  FailLoadData = 'Не удалось загрузить данные',
}

export const GENRES: Genres = [
  { name: 'все жанры' },
  { name: 'драма' },
  { name: 'комедия' },
  { name: 'мелодрама' },
  { name: 'ужасы' },
  { name: 'документальный' },
  { name: 'мультфильм' },
  { name: 'детский' },
  { name: 'фэнтези' },
  { name: 'концерт' },
  { name: 'спорт' },
  { name: 'биография' },
  { name: 'короткометражка' },
  { name: 'аниме' },
  { name: 'боевик' },
  { name: 'приключения' },
  { name: 'семейный' },
  { name: 'криминал' },
  { name: 'ток-шоу' },
  { name: 'музыка' }
];

// async function getData() {
//   try {
//     const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?rating.kp=8-10&limit=100', {
//       method: 'GET',
//       headers: {
//         'X-API-KEY': `` // убедитесь, что токен подставлен корректно
//       }
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('Полученные данные:', data);
//   }
//   catch (error) {
//     console.error('Произошла ошибка:', error);
//     console.log('Статус ответа:', response.status);
//     console.log('Текст ошибки:', response.statusText);
//   }
// }
