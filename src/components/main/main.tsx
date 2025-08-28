import Footer from '../footer/footer';
import Header from '../header/header';
import PopularTitles from '../popular-titles/popular-titles';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import './main.css';

export default function Main() {
  return (
    <div className='main-container'>
      <Header />
      <PopularTitles />
      <ShowMoreBtn />
      <Footer />
    </div>
  );
}
