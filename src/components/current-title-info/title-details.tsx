import { TitleInfo } from '../../models/models';
import { setGenresInline } from '../../utilites/utilites';
import TitleDetailsPersons from './title-details-persons';

type TitleDetailsProps = {
  title: TitleInfo;
}
export default function TitleDetails({title}:TitleDetailsProps) {
  const {persons, shortDescription, description, genres, watchability, countries} = title;

  return (
    <>
      <div className='current-info'>
        <div className='description-container'>
          <div className='description'>Описание</div>
          <div className='description-text'>
            {description ?? shortDescription}
          </div>
          <div className='current-info-genre'>{`Жанр: ${setGenresInline(genres)}`}</div>
        </div>
      </div>
      <div className='title-person-container'>
        {persons && persons.map((person) => <TitleDetailsPersons person={person} key={person.id}/>)}
      </div>
    </>
  );
}

