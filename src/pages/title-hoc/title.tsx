import { TitleInfo } from '../../models/models';
import '../../css/current-title.css';
import CurrentTitleInfo from '../../components/current-title-info/current-title-info';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { createNavBtnArray } from '../../utilites/utilites';
import NavBtn from '../../components/nav-btn/nav-btn';
import cn from 'classnames';
import { useAppSelector } from '../../hooks';
import { getBtn } from '../../store/slices/current-title-nav-btn/selectors';


type FilmProps = {
  title: TitleInfo;
}

export default function Title({title}: FilmProps) {
  const btnArray = createNavBtnArray(title.type, 'Детали');
  const currentBtn = useAppSelector(getBtn);

  return(
    <>
      <Header />
      <section className='current-title-container'>
        <div className={cn('current-title-name', currentBtn === 'Детали' ? 'current-title-name-transform' : '')}>{title.name}</div>
        <div className='current-title-nav'>
          <ul className='nav-ul'>
            {btnArray.map((btn) => <NavBtn btn={btn} key={btn}/>)}
          </ul>
        </div>
        <CurrentTitleInfo title={title}/>
      </section>
      <Footer />
    </>
  );
}
