import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentGenreTitles } from '../../store/slices/current-genre-titles/selectors';
import { setVisibleTitles } from '../../store/slices/visible-titles/visible-titles';
import { getVisibleTitles } from '../../store/slices/visible-titles/selectors';
import './show-more-btn.css';

export default function ShowMoreBtn() {
  const dispatch = useAppDispatch();

  const currentTitles = useAppSelector(getCurrentGenreTitles);
  const visibleTitles = useAppSelector(getVisibleTitles);

  const handleClick = () => {
    dispatch(setVisibleTitles(currentTitles));
  };

  return (
    <div className='btn-container'>
      <button className={cn('show-more', currentTitles.length === visibleTitles.length ? 'show-more-hidden' : '')} onClick={handleClick}>Показать ещё</button>
    </div>
  );
}
