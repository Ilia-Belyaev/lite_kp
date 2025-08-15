import Genres from '../genres/genres';
import CardsHOC from '../cards-hoc/cards-hoc';

export default function PopularFilms() {
  return (
    <div>
      <Genres />
      <div className='films-container'>
        <CardsHOC />
      </div>
    </div>
  );
}
