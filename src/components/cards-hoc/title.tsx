import { memo, useState } from 'react';
import { TitleCard } from '../../models/models';
import { setPhotoUrl } from '../../utilites/utilites';
import { Navigate } from 'react-router-dom';
import UndefainedImage from '../../images/undefined_photo.jpg';
import { useAppDispatch } from '../../hooks';
import { setBtn } from '../../store/slices/current-title-nav-btn/current-title-nav-btn';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

type CardProps = {
  card: TitleCard;
};

function Title({card}: CardProps) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState(false);
  const {poster, backDrop, id, name} = card;
  const imageSrc = setPhotoUrl(poster, backDrop, UndefainedImage);
  const handleClick = () => {
    setState(true);
    dispatch(setBtn(card.type));
  };

  if (state) {
    return <Navigate to={`/title/${id}`}/>;
  }

  return (
    <Card
      className='ant-card'
      hoverable
      style={{ width: 240 }}
      cover={<img src={imageSrc} onClick={handleClick} />}
    >
      <Meta className='ant-card-meta-title' title={name}/>
    </Card>
  );
}

export const MemoizedTitle = memo(Title, (prevProps, nextProps) => prevProps === nextProps);
