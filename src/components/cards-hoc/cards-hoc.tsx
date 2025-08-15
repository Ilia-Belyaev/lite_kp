import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenre } from '../../store/slices/genres/selectors';
import { getPopularFilms } from '../../store/slices/popular-films/selectors';
import Cards from './cards';
import { getCurrentGenreFilms } from '../../store/slices/current-genre-films/selectors';
import { setCurrentGenreFilms } from '../../store/slices/current-genre-films/current-genre-films';

export default function CardsHOC() {
  const dispatch = useAppDispatch();

  const genre = useAppSelector(getGenre);
  const films = useAppSelector(getPopularFilms);

  useEffect(() => {
    if (films.length) {
      dispatch(setCurrentGenreFilms([films, genre]));
    }
  }, [films, genre, dispatch]);

  const cards = useAppSelector(getCurrentGenreFilms);

  return <Cards cards={cards}/>;
}
