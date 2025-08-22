export type ServerResponse = {
  docs: TitleCards;
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export type TitleCards = TitleCard[];

export type TitleCard = {
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
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number | null;
}

export type ReleaseYears = ReleaseYear[];

export type ReleaseYear = {
  start: number;
  end: number;
}

export type TitleId = number;

export type TitleInfo = {
  id: TitleId;
  externalId: {
    imdb: string;
    tmdb: number;
    kpHD: string;
  };
  name: string;
  alternativeName: string | null;
  enName: string | null;
  names: LocalizedName[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: string | null;
  rating: Rating;
  votes: Rating;
  movieLength: number;
  totalSeriesLength: number | null;
  seriesLength: number | null;
  ratingMpaa: string | null;
  ageRating: number;
  poster: BackDrop;
  backdrop: BackDrop;
  genres: Genres;
  countries: { name: string }[];
  persons?: Person[];
  budget?: {
    currency: string;
    value: number;
  };
  premiere: {
    country: string | null;
    digital: string | null;
    cinema: string | null;
    bluray: string | null;
    dvd: string | null;
    russia: string | null;
    world: string | null;
  };
  sequelsAndPrequels: RelatedMovie[];
  top10: number | null;
  top250: number | null;
  isSeries: boolean;
  audience: { count: number; country: string }[];
  ticketsOnSale: boolean;
  lists: string[];
  networks: string | null;
  createdAt: string;
  updatedAt: string;
  videos: {
    trailers: Trailer[];
  };
  fees: {
    usa: Fee;
    world: Fee;
  };
  logo: BackDrop;
  isTmdbChecked: boolean;
  watchability?: {
    items: Items;
  };
  userRatingsParsed: boolean;
  facts: Fact[];
  similarMovies: SimilarMovie[];
  keywordsParsed: boolean;
  studioParsed: boolean;
}

export type LocalizedName = {
  name: string;
  language: string;
  type: string | null;
}

export type Person = {
  id: number;
  photo: string;
  name: string | null;
  enName: string | null;
  description: string | null;
  profession: string;
  enProfession: string;
}

export type RelatedMovie = {
  id: number;
  name: string;
  alternativeName: string | null;
  enName: string | null;
  type: string;
  poster: BackDrop;
}

export type Trailer = {
  url: string;
  name: string;
  site: string;
  type: string;
}

export type Fee = {
  value: number;
  currency: string;
}

export type Fact = {
  value: string;
  type: string;
  spoiler: boolean;
}

export type SimilarMovie = {
  id: number;
  name: string;
  alternativeName: string | null;
  type: string;
  poster: BackDrop;
  rating: Rating;
  year: number;
}

export type Items = Item[];

export type Item = {
  name: string;
  logo: {
    url: string;
  };
  url: string;
};
