import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentGenreTitles } from '../../store/slices/current-genre-titles/selectors';
import { setVisibleTitles } from '../../store/slices/visible-titles/visible-titles';
import { getVisibleTitles } from '../../store/slices/visible-titles/selectors';
import './show-more-btn.css';
import { hideShowMoreBtn } from '../../utilites/utilites';
import { getIsOpenSearch, getPopoverText } from '../../store/slices/searchPopover/selectors';

export default function ShowMoreBtn() {
  const dispatch = useAppDispatch();

  const currentTitles = useAppSelector(getCurrentGenreTitles);
  const visibleTitles = useAppSelector(getVisibleTitles);
  const isPopoverOpen = useAppSelector(getIsOpenSearch);
  const textPopovet = useAppSelector(getPopoverText);

  const handleClick = () => {
    dispatch(setVisibleTitles(currentTitles));
  };

  return (
    <div className='btn-container'>
      <button className={cn('show-more', hideShowMoreBtn(currentTitles, visibleTitles, isPopoverOpen, textPopovet) ? 'show-more-hidden' : '')} onClick={handleClick}>Показать ещё</button>
    </div>
  );
}
