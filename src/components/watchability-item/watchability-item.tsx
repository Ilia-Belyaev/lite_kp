
import { Item } from '../../models/models';
import './watchability-item.css';

type WatchabilityItemProps = {
  item: Item;
}

export default function WatchabilityItem({ item }: WatchabilityItemProps) {
  const { name, logo, url } = item;

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='watchability-container'>
      <div
        className='watchability-image-wrapper'
        onClick={handleClick}
      >
        <img
          src={logo.url}
          alt={name}
          className='watchability-image'
        />
      </div>
    </div>
  );
}
