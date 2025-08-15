import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../css/logo.css';

export default function Logo() {
  return (
    <div className="logo">
      <Link to='/' className="logo_link">
        <img className='logo-img' src={logo} alt='logo'/>
      </Link>
    </div>
  );
}
