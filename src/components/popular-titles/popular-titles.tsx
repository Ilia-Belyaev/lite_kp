import Genres from '../genres/genres';
import CardsHOC from '../cards-hoc/cards-hoc';

export default function PopularTitles() {
  return (
    <div>
      <Genres />
      <div className='titles-container'>
        <CardsHOC />
      </div>
    </div>
  );
}
