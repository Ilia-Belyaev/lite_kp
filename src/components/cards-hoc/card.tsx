import { useState } from 'react';
import { FilmCard } from '../../models/models';
import { setPhotoUrl } from '../../utilites/utilites';
import { Navigate } from 'react-router-dom';
import UndefainedImage from '../../images/undefined_photo.jpg';
import { useAppDispatch } from '../../hooks';
import { setBtn } from '../../store/slices/current-film-nav-btn/current-film-nav-btn';

type CardProps = {
  card: FilmCard;
};

export default function Card({card}: CardProps) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState(false);
  const {poster, backDrop, id} = card;
  const imageSrc = setPhotoUrl(poster, backDrop, UndefainedImage);
  const handleClick = () => {
    setState(true);
    dispatch(setBtn(card.type));
  };

  if (state) {
    return <Navigate to={`/film/${id}`}/>;
  }

  return (
    <div className='film-card'>
      <img className='film-card-img' src={imageSrc} onClick={handleClick} alt='Ещё нет фото'/>

    </div>
  );
}
