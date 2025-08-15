import { useState } from 'react';
import { FilmCard } from '../../models/models';
import { setPhotoUrl } from '../../utilites/utilites';
import { Navigate } from 'react-router-dom';

type CardProps = {
  card: FilmCard;
};

export default function Card({card}: CardProps) {
  const [state, setState] = useState(false);
  const {poster} = card;
  const imageSrc = setPhotoUrl(poster);

  if (state) {
    return <Navigate to={''}/>;//куда редиректить
  }

  return (
    <div className='film-card'>
      <img src={imageSrc} onClick={() => setState(true)} alt='Ещё нет фото'/>

    </div>
  );
}
