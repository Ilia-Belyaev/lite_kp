import { Link } from 'react-router-dom';
import { Communication } from '../../models/models';

type CommunicationItemProps = {
  item: Communication;
  isMySites? : boolean;
}

export default function CommunicationItem ({item, isMySites}: CommunicationItemProps) {
  const {contact, icon} = item;
  return (isMySites ?
    <div>
      <Link to={contact}>
        <img className="communication-item-image" src={icon} />
      </Link>
    </div> :
    <div className="communication-item-container">
      <img className="communication-item-image" src={icon} />
      <div>{contact}</div>
    </div>
  );
}
