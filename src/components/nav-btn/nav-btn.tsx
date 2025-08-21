import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getBtn } from '../../store/slices/current-title-nav-btn/selectors';
import { setBtn } from '../../store/slices/current-title-nav-btn/current-title-nav-btn';
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
    <li className={cn('current-title-button-container', replaceName(btn) === currentBtn ? 'current-title-button-container--active' : '')} onClick={handleClick}>
      <button>{btn}</button>
    </li>
  );
}
