import CardsHOC from '../cards-hoc/cards-hoc';
import Genres from '../genres/genres';

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
