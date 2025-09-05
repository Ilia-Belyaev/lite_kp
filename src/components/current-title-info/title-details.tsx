import cn from 'classnames';
import { MAX_PERSONS_LENGTH, PERSONS_NAMESPACE } from '../../constants';
import { TitleInfo } from '../../models/models';
import { MemoRoleMarkup } from '../role-markup/role-markup';
import WatchabilityItem from '../watchability-item/watchability-item';
import { CurrentTitleInfoHOC } from './current-title-info-hoc';
import RatingInfo from './rating-info';
import { calculateStringEnd } from '../../utilites/utilites';
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

  const onClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
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
          {votes.kp && <div>{calculateStringEnd(votes.kp)}</div>}
        </div>
        <Description description={description} shortDescription={shortDescription} classes={classes}/>
        <p className='watchability'>
          {items && items.map((item) => <WatchabilityItem item={item} key={item.url}/>)}
        </p>
      </section>
      <section className='details-title-person-container title-person-container'>
        <div className='role-markup-container'>
          {persons && PERSONS_NAMESPACE.map((name) => <MemoRoleMarkup name={name.name} key={name.name} persons={persons.slice(0,MAX_PERSONS_LENGTH)}/>)}
        </div>
        {persons && persons?.length > MAX_PERSONS_LENGTH && <button className='show-more-persons' onClick={handleClick}>Ещё</button>}
        {isModalOpen &&
        <Modal >
          <div className='modal-container'>
            <button className='back-portal-btn' onClick={() => onClose()}>Close</button>
            {persons && PERSONS_NAMESPACE.map((name) => <MemoRoleMarkup name={name.name} key={name.name} persons={persons}/>)}
          </div>
        </Modal>}
      </section>
    </div>
  );
}

export const Details = memo(CurrentTitleInfoHOC(TitleDetails), (prev, next) => prev === next);

