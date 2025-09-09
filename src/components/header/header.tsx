import { MemoizedSearch } from '../search/search';
import './header.css';
import { MemoizedLogo } from '../logo/logo';
import { useAppSelector } from '../../hooks';
import { getCurrentTitleInfo } from '../../store/slices/current-title-info/selectors';

export default function Header() {
  const currentTitle = useAppSelector(getCurrentTitleInfo);
  return (
    <div className='header-container'>
      <MemoizedLogo />
      {!currentTitle.id ? <MemoizedSearch /> : ''}
    </div>
  );
}
