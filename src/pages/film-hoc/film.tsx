// import FilmPerson from '../../components/film-person/film-person';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { FilmInfo } from '../../models/models';
import { createNavBtnArray, setPhotoUrl } from '../../utilites/utilites';
import UndefinedImage from '../../images/undefined_photo.jpg';
import '../../css/current-film.css';
import KpLogo from '../../images/kinopoisk-logo.svg';
import IMDBLogo from '../../images/IMDb-logo.svg';
import NavBtn from '../../components/nav-btn/nav-btn';

type FilmProps = {
  film: FilmInfo;
}

export default function Film({film}: FilmProps) {
  const {name, description, rating, poster, persons, backdrop, shortDescription, type} = film;
  const btnArray = createNavBtnArray(type, 'Детали');

  return(
    <>
      <Header />
      <section className='current-film-container'>
        <div className='current-film-name'>{name}</div>
        <img className='current-film-poster' src={setPhotoUrl(poster, backdrop, UndefinedImage)} />
        <div className='current-film-nav'>
          {btnArray.map((btn) => <NavBtn btn={btn} key={btn}/>)}
        </div>
        <div className='current-info'>
          <div className='description-container'>
            <div className='description'>Описание</div>
            <div className='description-text'>
              {shortDescription ?? description}
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
          {/* <div className='film-person-container'>
            {persons && persons.map((person) => <FilmPerson person={person} key={person.id}/>)}
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
}
