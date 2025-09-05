import { memo } from 'react';
import { Person } from '../../models/models';

type TitleDetailsPersonsProps = {
  person: Person;
}

function TitleDetailsPersons({person}: TitleDetailsPersonsProps) {
  const {name, description} = person;

  return name ? (
    <li
      className='title-person-inner-container'
    >
      <div>{name}</div>
      {description && <div className='title-details-hero-description'>Персонаж: {description}</div>}
    </li>
  ) : '';
}

export const MemoTitleDetailsPersons = memo(TitleDetailsPersons, (prevProps, nextProps) => prevProps === nextProps);
