import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { getGenre } from '../../store/slices/genres/selectors';
import { setGenre } from '../../store/slices/genres/genres';
import { CustomGenre } from '../../models/models';
import { memo } from 'react';

type GenreProps = {
  genre: CustomGenre;
};

function GenreFilm({genre} : GenreProps) {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);
  const {name, img} = genre;

  const handleClick = () => {
    dispatch(setGenre(genre));
  };

  return (
    <div className={cn('catalog__genres-item ', currentGenre.name === name ? 'catalog__genres-item--active' : '')} onClick={handleClick}>
      <img className='catalog-genres-image' src={img}/>
      <a href="#" className="catalog__genres-link">{name}</a>
    </div>
  );
}

export const MemoizedGenreFilm = memo(GenreFilm, (prevProps, nextProps) => prevProps === nextProps);
