import { Person } from '../../models/models';
import { getPersonsCurrentRole, upperCaseLetter } from '../../utilites/utilites';
import TitleDetailsPersons from '../current-title-info/title-details-persons';

type RoleMarkupProps = {
  name: string;
  persons: Person[];
}

export default function RoleMarkup({name, persons}:RoleMarkupProps) {
  const rolePersons = getPersonsCurrentRole(persons, name);

  return (
    rolePersons ?
      <ul className='person-proffesion'> {upperCaseLetter(name)}
        {rolePersons.map((person) => <TitleDetailsPersons person={person} key={person.id}/>)}
      </ul> : ''
  );
}
