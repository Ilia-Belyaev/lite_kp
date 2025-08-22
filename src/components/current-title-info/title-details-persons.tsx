import { Person } from '../../models/models';
import { useState } from 'react';

type TitleDetailsPersonsProps = {
  person: Person;
}

export default function TitleDetailsPersons({person}: TitleDetailsPersonsProps) {
  const {photo, name, description} = person;
  const [isHovered, setIsHovered] = useState(false);

  return name ? (
    <li className='title-person-inner-container' onMouseMove={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered && <img className='title-person-image' src={photo}/>}
      <div>{name}</div>
      {description && <div>Персонаж: {description}</div>}
    </li>
  ) : '';
}
