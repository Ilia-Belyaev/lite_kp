import Footer from './footer';
import Header from './header';
import PopularFilms from './popular-films/popular-films';
import ShowMoreBtn from './show-more-btn/show-more-btn';

export default function Main() {
  return (
    <>
      <Header />
      <PopularFilms />
      <ShowMoreBtn />
      <Footer />
    </>
  );
}
