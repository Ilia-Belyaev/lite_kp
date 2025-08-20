import { Person } from '../../models/models';

type PersonProps = {
  person: Person;
}

export default function FilmPerson({person}: PersonProps) {
  const {photo, name, description, profession} = person;

  return name ? (
    <div className='film-person-inner-container'>
      <img className='film-person-image' src={photo}/>
      <div>{`${name}, ${profession}`}</div>
      <div>{description}</div>
    </div>
  ) : '';
}
