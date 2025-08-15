import { FilmCards } from '../../models/models';
import Card from './card';
import '../../css/cards.css';

type CardsProps = {
  cards: FilmCards;
};

export default function Cards({cards}: CardsProps) {
  return (
    <section className='cards-section'>
      {cards.map((card) => <Card card={card} key={card.id}/>)}
    </section>
  );
}
