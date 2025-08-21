import { useState } from 'react';
import { TitleCard } from '../../models/models';
import { setPhotoUrl } from '../../utilites/utilites';
import { Navigate } from 'react-router-dom';
import UndefainedImage from '../../images/undefined_photo.jpg';
import { useAppDispatch } from '../../hooks';
import { setBtn } from '../../store/slices/current-title-nav-btn/current-title-nav-btn';

type CardProps = {
  card: TitleCard;
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
    return <Navigate to={`/title/${id}`}/>;
  }

  return (
    <div className='title-card'>
      <img className='title-card-img' src={imageSrc} onClick={handleClick} alt='Ещё нет фото'/>

    </div>
  );
}
