import Genres from '../genres/genres';
import CardsHOC from '../cards-hoc/cards-hoc';
import './popular-titles.css';

export default function PopularTitles() {
  return (
    <div className='popular-titles-container'>
      <Genres />
      <div className='titles-container'>
        <CardsHOC />
      </div>
    </div>
  );
}
