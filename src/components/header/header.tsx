import { MemoizedSearch } from '../search/search';
import './header.css';
import { MemoizedLogo } from '../logo/logo';

export default function Header() {
  return (
    <div className='header-container'>
      <MemoizedLogo />
      <MemoizedSearch />
    </div>
  );
}
