import { CUSTOM_GENRES } from '../../constants';
import { MemoizedGenreFilm } from './genre-title';
import './genres.css';
import { Carousel } from 'antd';

export default function Genres() {
  return (
    <Carousel arrows infinite className='carousel' slidesToShow={1}>
      {CUSTOM_GENRES.map((genre) => <MemoizedGenreFilm genre={genre} key={genre.name}/>)}
    </Carousel>
  );
}
