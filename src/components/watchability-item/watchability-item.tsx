import { Item } from '../../models/models';
import './watchability-item.css';
import { useState } from 'react';

type WatchabilityItemProps = {
  item: Item;
}

export default function WatchabilityItem({item}: WatchabilityItemProps) {
  const {name, logo} = item;// добавить переход по ссылке url
  const [isLinked, setIsLinked] = useState(false);

  const handleClick = () => {
    setIsLinked(true);
  };

  if(isLinked) {
    // return <Link to={url} />;
  }

  return (
    <div className='watchability-container'>
      <img src={logo.url} alt={name} className='watchability-image' onClick={handleClick}/>
    </div>
  );
}
