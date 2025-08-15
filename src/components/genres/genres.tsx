import { GENRES } from '../../constants';
import GenreFilm from './genreFilm';
import '../../css/genres.css';

export default function Genres() {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre) => <GenreFilm genre={genre} key={genre.name}/>)}
    </ul>
  );
}
