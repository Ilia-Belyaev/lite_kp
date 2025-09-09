import { useEffect, useRef } from 'react';
import { CUSTOM_GENRES } from '../../constants';
import { MemoizedGenreFilm } from './genre-title';
import './genres.css';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { useAppSelector } from '../../hooks';
import { getGenre } from '../../store/slices/genres/selectors';

export default function Genres() {
  const refCarousel = useRef<CarouselRef>(null);
  const currentGenre = useAppSelector(getGenre);

  useEffect(() => {
    if (currentGenre.name === 'все жанры') {
      refCarousel.current?.goTo(0);
    }
  });

  return (
    <Carousel ref={refCarousel} arrows infinite className='carousel' slidesToShow={1}>
      {CUSTOM_GENRES.map((genre) => <MemoizedGenreFilm genre={genre} key={genre.name}/>)}
    </Carousel>
  );
}
