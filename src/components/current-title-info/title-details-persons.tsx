import { Person } from '../../models/models';

type TitleDetailsPersonsProps = {
  person: Person;
}

export default function TitleDetailsPersons({person}: TitleDetailsPersonsProps) {
  const {photo, name, description, profession} = person;

  return name ? (
    <div className='title-person-inner-container'>
      <img className='title-person-image' src={photo}/>
      <div>{`${name}, ${profession}`}</div>
      <div>{description}</div>
    </div>
  ) : '';
}
