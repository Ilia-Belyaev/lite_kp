import Search from '../search/search';
import '../../css/header.css';
import Logo from '../logo/logo';

export default function Header() {
  return (
    <div className='header-container'>
      <Logo />
      <div></div>
      <Search />
    </div>
  );
}
