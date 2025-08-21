import { TitleInfo } from '../../models/models';
import { setPhotoUrl } from '../../utilites/utilites';
import KpLogo from '../../images/kinopoisk-logo.svg';
import IMDBLogo from '../../images/IMDb-logo.svg';
import UndefinedImage from '../../images/undefined_photo.jpg';

type AboutTitleProps = {
  title: TitleInfo;
}

export default function AboutTitle({title}: AboutTitleProps) {
  const {description, rating, poster, backdrop, shortDescription,} = title;

  return(
    <>
      <div className='current-title-poster-container'>
        <img className='current-title-poster' src={setPhotoUrl(poster, backdrop, UndefinedImage)} />
      </div>
      <div className='current-info'>
        <div className='description-container'>
          <div className='description'>Описание</div>
          <div className='description-text'>
            {shortDescription ?? description}
          </div>
        </div>
      </div>
      <div className='rating'>
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
