import Logo from './logo/logo';
import Search from './search/search';
import '../css/header.css';

export default function Header() {
  return (
    <div className='header-container'>
      <Logo />
      <div></div>
      <Search />
    </div>
  );
}
