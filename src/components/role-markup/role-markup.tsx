import { memo } from 'react';
import { Person } from '../../models/models';
import { getPersonsCurrentRole, upperCaseLetter } from '../../utilites/utilites';
import { MemoTitleDetailsPersons } from '../current-title-info/title-details-persons';

type RoleMarkupProps = {
  name: string;
  persons: Person[];
}

function RoleMarkup({name, persons}:RoleMarkupProps) {
  const rolePersons = getPersonsCurrentRole(persons, name);
  const check = rolePersons.length > 0;

  return (
    check ? (
      <div className='person-profession-container'>
        <p className='title-person-outer-container profession'>{upperCaseLetter(name)}</p>
        <ul className='person-proffesion'>
          {rolePersons.map((person) => <MemoTitleDetailsPersons person={person} key={person.id}/>)}
        </ul>
      </div>) : ''
  );
}

export const MemoRoleMarkup = memo(RoleMarkup, (prevProps, nextProps) => prevProps === nextProps);

