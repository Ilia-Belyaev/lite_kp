import { COMMUNICATIONS } from '../../constants';
import BackTopBtn from '../back-top-btn/back-top-btn';
import AboutMe from './about_me';
import { MemoCommunicationItem } from './communication-item';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <section className='communication-section'>
        {COMMUNICATIONS.map((item) => <MemoCommunicationItem item={item} key={item.contact}/>)}
      </section>
      <section className='about-me-section'>
        <AboutMe />
      </section>
      <section>
        <BackTopBtn />
      </section>
    </div>
  );
}

