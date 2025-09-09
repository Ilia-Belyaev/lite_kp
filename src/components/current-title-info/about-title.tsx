import { TitleInfo } from '../../models/models';
import { setCountriesInline, setGenresInline, setPhotoUrl } from '../../utilites/utilites';
import UndefinedImage from '../../images/undefined_photo.jpg';
import { CurrentTitleInfoHOC } from './current-title-info-hoc';
import cn from 'classnames';
import RatingInfo from './rating-info';
import Description from './description';

type AboutTitleProps = {
  title: TitleInfo;
  button: string;
  classes: (customClass: string, effect: string) => string;
}

function AboutTitle({title, classes, button}: AboutTitleProps) {
  const {description, rating, poster, backdrop, shortDescription, genres, countries, year} = title;
  return(
    <div className='about-container'>
      <section className='about-section-info'>
        <div className='current-title-name-container'>
          <div className={cn('current-title-name', button === 'Детали' ? 'current-title-name-transform' : '')}>{title.name}</div>
        </div>
        <div className={classes('rating-year-genre-countries_container', 'showFromRight')}>
          <RatingInfo rating={rating}/>
          {year && <div>{`${year} г.`}</div>}
          {genres && <div>{setGenresInline(genres)}</div>}
          {countries && <div>{setCountriesInline(countries)}</div>}
        </div>
        <Description description={description} shortDescription={shortDescription} classes={classes}/>
      </section>
      <section className='about-section-poster'>
        <div className='current-title-poster-container'>
          <img className={classes('current-title-poster', 'showFromRight')} src={setPhotoUrl(poster, backdrop, UndefinedImage)}/>
        </div>
      </section>
    </div>
  );
}

export const About = CurrentTitleInfoHOC(AboutTitle);
