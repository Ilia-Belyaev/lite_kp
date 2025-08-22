import { PERSONS_NAMESPACE } from '../../constants';
import { TitleInfo } from '../../models/models';
import { setGenresInline } from '../../utilites/utilites';
import RoleMarkup from '../role-markup/role-markup';
import WatchabilityItem from '../watchability-item/watchability-item';
import { CurrentTitleInfoHOC } from './current-title-info-hoc';

type TitleDetailsProps = {
  title: TitleInfo;
  classes: (customClass: string, effect: string) => string;
}
export default function TitleDetails({title, classes}:TitleDetailsProps) {
  const {persons, shortDescription, description, genres, watchability, countries} = title;
  const items = watchability?.items ?? '';

  return (
    <>
      <div className='current-info'>
        <div className={classes('description-container', 'showFromLeft')}>
          <div className='description'>Описание</div>
          <div className='description-text'>
            {description ?? shortDescription}
          </div>
          <p className='current-info-genre'>
            <div>
              Жанр:
            </div>
            {`${setGenresInline(genres)}`}
          </p>
        </div>
        <div className='watchability'>
          {items && items.map((item) => <WatchabilityItem item={item} key={item.url}/>)}
        </div>
      </div>
      <div className='title-person-container'>
        {persons && PERSONS_NAMESPACE.map((name) => <RoleMarkup name={name.name} key={name.name} persons={persons}/>)}
      </div>
    </>
  );
}

export const Details = CurrentTitleInfoHOC(TitleDetails);

