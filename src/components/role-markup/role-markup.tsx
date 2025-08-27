import { useState } from 'react';
import { Person } from '../../models/models';
import { getPersonsCurrentRole, upperCaseLetter } from '../../utilites/utilites';
import TitleDetailsPersons from '../current-title-info/title-details-persons';

type RoleMarkupProps = {
  name: string;
  persons: Person[];
}

export default function RoleMarkup({name, persons}:RoleMarkupProps) {
  const rolePersons = getPersonsCurrentRole(persons, name);
  const [isHovered, setIsHovered] = useState({stringVal: '', booleanVal: false});

  const check = rolePersons.length > 0 && rolePersons.every((person) => person.name !== null);
  return (
    check ? (
      <div className='person-profession-container'>
        <ul className='person-proffesion'> {upperCaseLetter(name)}
          {rolePersons.map((person) => <TitleDetailsPersons person={person} hover={setIsHovered} key={person.id}/>)}
        </ul>
        <div className="person-photos-container">
          {isHovered.booleanVal && <img className='title-person-image' src={isHovered.stringVal}/>}
        </div>
      </div>) : ''
  );
}
