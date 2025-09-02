import { Navigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../css/logo.css';
import { useAppDispatch } from '../../hooks';
import { GENRES } from '../../constants';
import { setGenre } from '../../store/slices/genres/genres';
import { memo, useState } from 'react';

export default function Logo() {
  const dispatch = useAppDispatch();
  const [redirect, setRedirect] = useState(false);
  const handleClick = () => {
    dispatch(setGenre(GENRES[0]));
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="logo" onClick={handleClick}>
      <img className='logo-img' src={logo} alt='logo' />
    </div>
  );
}

export const MemoizedLogo = memo(Logo);
