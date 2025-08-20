import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getBtn } from '../../store/slices/current-film-nav-btn/selectors';
import { setBtn } from '../../store/slices/current-film-nav-btn/current-film-nav-btn';
import { replaceName } from '../../utilites/utilites';

type NavBtnProps = {
  btn: string;
}

export default function NavBtn({btn}: NavBtnProps) {
  const currentBtn = useAppSelector(getBtn);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setBtn(replaceName(btn)));
  };

  return (
    <button className={cn('current-film-button', replaceName(btn) === currentBtn ? 'current-film-button--active' : '')} onClick={handleClick}>{btn}</button>
  );
}
