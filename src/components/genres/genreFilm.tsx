import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { getGenre } from '../../store/slices/genres/selectors';
import { setGenre } from '../../store/slices/genres/genres';
import { Genre } from '../../models/models';

type GenreProps = {
  genre: Genre;
};

export default function GenreFilm({genre} : GenreProps) {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);

  const handleClick = () => {
    dispatch(setGenre(genre));
  };

  return (
    <li className={cn('catalog__genres-item ', currentGenre.name === genre.name ? 'catalog__genres-item--active' : '')} onClick={handleClick}>
      <a href="#" className="catalog__genres-link">{genre.name}</a>
    </li>
  );
}
