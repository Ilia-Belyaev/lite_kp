import { memo } from 'react';
import { TitleCards } from '../../models/models';
import './cards.css';
import { MemoizedTitle } from './title';

type CardsProps = {
  cards: TitleCards;
};

function Cards({cards}: CardsProps) {
  return (
    <section className='cards-section'>
      {cards.map((card) => <MemoizedTitle card={card} key={card.id}/>)}
    </section>
  );
}


export const MemoizedCards = memo(Cards, (prevProps, newxtProps) => prevProps === newxtProps);
