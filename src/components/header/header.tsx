import Search from '../search/search';
import './header.css';
import Logo from '../logo/logo';

export default function Header() {
  return (
    <div className='header-container'>
      <Logo />
      <Search />
    </div>
  );
}
