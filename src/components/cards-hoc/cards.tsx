import { TitleCards } from '../../models/models';
import Card from './card';
import './cards.css';

type CardsProps = {
  cards: TitleCards;
};

export default function Cards({cards}: CardsProps) {
  return (
    <section className='cards-section'>
      {cards.map((card) => <Card card={card} key={card.id}/>)}
    </section>
  );
}
