import { TitleInfo } from '../../models/models';
import { setPhotoUrl } from '../../utilites/utilites';
import KpLogo from '../../images/kinopoisk-logo.svg';
import IMDBLogo from '../../images/IMDb-logo.svg';
import UndefinedImage from '../../images/undefined_photo.jpg';
import { CurrentTitleInfoHOC } from './current-title-info-hoc';

type AboutTitleProps = {
  title: TitleInfo;
  classes: (customClass: string, effect: string) => string;
}

function AboutTitle({title, classes}: AboutTitleProps) {
  const {description, rating, poster, backdrop, shortDescription,} = title;

  return(
    <>
      <div className='current-title-poster-container'>
        <img className={classes('current-title-poster', 'showFromRight')} src={setPhotoUrl(poster, backdrop, UndefinedImage)}/>
      </div>
      <div className='current-info'>
        <div className={classes('description-container', 'showFromLeft')}>
          <div className='description'>Описание</div>
          <div className='description-text'>
            {shortDescription ?? description}
          </div>
        </div>
      </div>
      <div className={classes('rating', 'showFromTop')}>
        <div className='rating-container kp-rating'>
          <img src={KpLogo} />
          <div>{rating && rating.kp}</div>
        </div>
        <div className='rating-container imdb-rating'>
          <img src={IMDBLogo} />
          <div>{rating && rating.imdb}</div>
        </div>
      </div>
    </>
  );
}

export const About = CurrentTitleInfoHOC(AboutTitle);
