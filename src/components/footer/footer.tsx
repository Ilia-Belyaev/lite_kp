import { COMMUNICATIONS } from '../../constants';
import AboutMe from './about_me';
import CommunicationItem from './communication-item';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <section className='communication-section'>
        {COMMUNICATIONS.map((item) => <CommunicationItem item={item} key={item.contact}/>)}
      </section>
      <section className='about-me-section'>
        <AboutMe />
      </section>
    </div>
  );
}
