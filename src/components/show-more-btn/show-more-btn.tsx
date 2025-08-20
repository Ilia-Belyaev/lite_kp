import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentGenreFilms } from '../../store/slices/current-genre-films/selectors';
import { setVisibleFilms } from '../../store/slices/visible-films/visible-films';
import { getVisibleFilms } from '../../store/slices/visible-films/selectors';
import '../../css/show-more-btn.css';

export default function ShowMoreBtn() {
  const dispatch = useAppDispatch();

  const currentFilms = useAppSelector(getCurrentGenreFilms);
  const visibleFilms = useAppSelector(getVisibleFilms);

  const handleClick = () => {
    dispatch(setVisibleFilms(currentFilms));
  };

  return (
    <div className='btn-container'>
      <button className={cn('show-more', currentFilms.length === visibleFilms.length ? 'show-more-hidden' : '')} onClick={handleClick}>Показать ещё</button>
    </div>
  );
}
