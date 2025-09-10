import cn from 'classnames';
import { MAX_PERSONS_LENGTH, MAX_PERSONS_LENGTH_IN_THE_CENTER, PERSONS_NAMESPACE } from '../../constants';
import { TitleInfo } from '../../models/models';
import { MemoRoleMarkup } from '../role-markup/role-markup';
import WatchabilityItem from '../watchability-item/watchability-item';
import { CurrentTitleInfoHOC } from './current-title-info-hoc';
import RatingInfo from './rating-info';
import { calculateStringEnd, getLengthPerson } from '../../utilites/utilites';
import Description from './description';
import { memo, useState } from 'react';
import Modal from '../modal/modal';

type TitleDetailsProps = {
  title: TitleInfo;
  button: string;
  classes: (customClass: string, effect: string) => string;
}

function TitleDetails({title, classes, button}:TitleDetailsProps) {
  const {persons, shortDescription, description, watchability, votes, rating} = title;
  const items = watchability?.items ?? '';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlex, setFlex] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
    setFlex(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
    setFlex(true);
  };

  return (
    <div className='details-container'>
      <section className='details-section-info'>
        <div className='current-title-name-container'>
          <p className={cn('current-title-name', button === 'Детали' ? 'current-title-name-transform' : '')}>{title.name}</p>
          {title.alternativeName && button === 'Детали' && <p className={cn('current-title-alternative-name', button === 'Детали' ? 'current-title-name-transform' : '')}>{`(${title.alternativeName})`}</p>}
        </div>
        <div className='rating-votes'>
          <RatingInfo rating={rating}/>
          {votes.kp && <div className='votes'>{calculateStringEnd(votes.kp)}</div>}
        </div>
        <Description description={description} shortDescription={shortDescription} classes={classes}/>
        <p className='watchability'>
          {items && items.map((item) => <WatchabilityItem item={item} key={item.url}/>)}
        </p>
      </section>
      <section className='title-person-container details-title-person-container'>
        <div className='role-markup-container'>
          {persons && PERSONS_NAMESPACE.map((name) => <MemoRoleMarkup name={name.name} key={name.name} persons={persons.slice(0,MAX_PERSONS_LENGTH)}/>)}
        </div>
        {persons && persons?.length > MAX_PERSONS_LENGTH && <button className='show-more-persons' onClick={handleClick}>Ещё</button>}
        {isModalOpen &&
        <Modal >
          <div className={cn(persons && getLengthPerson(persons) < MAX_PERSONS_LENGTH_IN_THE_CENTER ? 'modal-container' : 'modal-big-container')}>
            {persons && PERSONS_NAMESPACE.map((name) => <MemoRoleMarkup name={name.name} key={name.name} persons={persons} isFlex={isFlex}/>)}
            <button className='back-portal-btn' onClick={() => onClose()}>Закрыть</button>
          </div>
        </Modal>}
      </section>
    </div>
  );
}

export const Details = memo(CurrentTitleInfoHOC(TitleDetails), (prev, next) => prev === next);

