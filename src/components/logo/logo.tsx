import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './logo.css';
import { useAppDispatch } from '../../hooks';
import { AppRoute, GENRES } from '../../constants';
import { setGenre } from '../../store/slices/genres/genres';
import { memo } from 'react';
import { dropCurrentTitle } from '../../store/slices/current-title-info/actions';
import { setVisibleTitlesAfterSearch } from '../../store/slices/current-genre-titles/current-genre-titles';

export default function Logo() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setGenre(GENRES[0]));
    dispatch(dropCurrentTitle());
    dispatch(setVisibleTitlesAfterSearch({letter:'', isOpen: false}));
  };

  return (
    <Link to={AppRoute.Main} className="logo" onClick={handleClick}>
      <img className='logo-img' src={logo} alt='logo' />
      <div>Lite-KP</div>
    </Link>
  );
}

export const MemoizedLogo = memo(Logo);
