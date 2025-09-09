import { TitleInfo } from '../../models/models';
import '../../css/current-title.css';
import CurrentTitleInfo from '../../components/current-title-info/current-title-info';
import Header from '../../components/header/header';
import { createNavBtnArray } from '../../utilites/utilites';
import NavBtn from '../../components/nav-btn/nav-btn';

type FilmProps = {
  title: TitleInfo;
}

export default function Title({title}: FilmProps) {
  const btnArray = createNavBtnArray(title.type, 'Детали');

  return(
    <div className='title-big-container'>
      <Header />
      <section className='current-title-container'>
        <div className='current-title-nav'>
          <ul className='nav-ul'>
            {btnArray.map((btn) => <NavBtn btn={btn} key={btn}/>)}
          </ul>
        </div>
        <CurrentTitleInfo />
      </section>
    </div>
  );
}
