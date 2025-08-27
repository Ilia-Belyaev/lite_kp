import { Person } from '../../models/models';

type TitleDetailsPersonsProps = {
  person: Person;
  hover: React.Dispatch<React.SetStateAction<{
    stringVal: string;
    booleanVal: boolean;
}>>;
}

export default function TitleDetailsPersons({person, hover}: TitleDetailsPersonsProps) {
  const {name, description, photo} = person;

  return name ? (
    <li
      className='title-person-inner-container'
      onMouseMove={() => hover({stringVal: photo, booleanVal: true})}
      onMouseLeave={() => hover({stringVal: '', booleanVal: false})}
    >
      <div>{name}</div>
      {description && <div className='title-details-hero-description'>Персонаж: {description}</div>}
    </li>
  ) : '';
}
