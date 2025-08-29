import { GENRES } from '../../constants';
import GenreFilm from './genre-title';
import './genres.css';

export default function Genres() {
  return (
    <div className='catalog-genre__list-container'>
      <ul className="catalog__genres-list">
        {GENRES.map((genre) => <GenreFilm genre={genre} key={genre.name}/>)}
      </ul>
    </div>
  );
}
