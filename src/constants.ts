import { CustomGenres, Genres } from './models/models';
import Action from './images/genre-image/action.svg';
import Adventure from './images/genre-image/adventure.svg';
import Animation from './images/genre-image/animation.svg';
import Comedy from './images/genre-image/comedy.svg';
import Detective from './images/genre-image/detective.svg';
import Fantasy from './images/genre-image/fantasy.svg';
import History from './images/genre-image/history.svg';
import Horror from './images/genre-image/horror.svg';
import Musical from './images/genre-image/musical.svg';
import Romantic from './images/genre-image/romantic.svg';
import AllGenres from './images/genre-image/all-genres.svg';
import Message from './images/footer-images/message.png';
import Phone from './images/footer-images/phone.png';
import Location from './images/footer-images/location.png';
import LinkedIn from './images/footer-images/linkedin.png';
import Github from './images/footer-images/github.png';

export enum AppRoute {
  Main = '/',
  Title = '/title/:id',
  Error = '/*',
}

export const MAX_WINDOW_WIDTH = 900;

export const MAX_PERSONS_LENGTH = 6;

export const MAX_VISIBLE_TITLES = 12;

export const TITLE_COUNT = 10;

export const MAX_PERSONS_LENGTH_IN_THE_CENTER = 30;

export const BTN_VISIBILITY_HEIGHT = 500;

export enum NameSpace {
  PopularTitles = 'PopularTitles',
  TitleGenres = 'Genres',
  CurrentGenreTitles = 'CurrentGenreTitles',
  VisibleTitles = 'VisibleTitles',
  CurrentTitleInfo = 'CurrentTitleInfo',
  CurrentTitleNavBtn = 'CurrentTitleNavBtn',
  SeacrhPopover = 'SearchPopover',
}

export const PERSONS_NAMESPACE = [
  {name: 'актеры'},
  {name: 'композиторы'},
  {name: 'продюсеры'},
  {name: 'режиссеры'},
  {name: 'сценаристы'},
  {name: 'операторы'},
  {name: 'монтажеры'},
];

export enum ApiRoute {
  PopularKPTitles = '/movie?rating.kp=8.3-10&limit=250',
  CurrentTitle = '/movie/',
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

export const CUSTOM_GENRES: CustomGenres = [
  { name: 'все жанры',
    img: AllGenres,
  },
  { name: 'драма',
    img: Romantic,
  },
  { name: 'комедия',
    img: Comedy,
  },
  { name: 'мелодрама',
    img: Romantic,
  },
  { name: 'ужасы',
    img: Horror,
  },
  { name: 'документальный',
    img: History,
  },
  { name: 'мультфильм',
    img: Animation,
  },
  { name: 'детский',
    img: Animation,
  },
  { name: 'фэнтези',
    img: Fantasy,
  },
  { name: 'концерт',
    img: Musical
  },
  { name: 'спорт',
    img: Musical
  },
  { name: 'биография',
    img: Musical
  },
  { name: 'короткометражка',
    img: Musical
  },
  { name: 'аниме',
    img: Animation
  },
  { name: 'боевик',
    img: Action
  },
  { name: 'приключения',
    img: Adventure
  },
  { name: 'семейный',
    img: Musical
  },
  { name: 'криминал',
    img: Detective
  },
  { name: 'ток-шоу',
    img: Musical
  },
  { name: 'музыка',
    img: Musical
  }
];

export const COMMUNICATIONS = [
  {
    contact: 'Moscow, Zelenograd',
    icon: Location,
  },
  {
    contact: '+79969735928',
    icon: Phone,
  },
  {
    contact: 'ilya.belyaev.95@list.ru',
    icon: Message,
  },
];

export const MY_SITES = [
  {
    contact: 'https://github.com/Ilia-Belyaev',
    icon: Github,
    isSites: true,
  },
  {
    contact: 'https://linkedin.com/in/ilya-belyaev',
    icon: LinkedIn,
    isSites: true,
  },
];
