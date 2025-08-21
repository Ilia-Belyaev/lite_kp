import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenre } from '../../store/slices/genres/selectors';
import { getPopularTitles } from '../../store/slices/popular-titles/selectors';
import Cards from './cards';
import { getCurrentGenreTitles } from '../../store/slices/current-genre-titles/selectors';
import { setCurrentGenreTitles } from '../../store/slices/current-genre-titles/current-genre-titles';
import NotFoundTitleCards from '../not-found-title-cards/not-found-title-cards';
import { setEmptyVisibleTitles, setVisibleTitles } from '../../store/slices/visible-titles/visible-titles';
import { getVisibleTitles } from '../../store/slices/visible-titles/selectors';

export default function CardsHOC() {
  const dispatch = useAppDispatch();

  const genre = useAppSelector(getGenre);
  const titles = useAppSelector(getPopularTitles);

  useEffect(() => {
    if (titles.length) {
      dispatch(setCurrentGenreTitles([titles, genre]));
    }
  }, [titles, genre, dispatch]);

  const cards = useAppSelector(getCurrentGenreTitles);

  useEffect(() => {
    dispatch(setEmptyVisibleTitles());
    dispatch(setVisibleTitles(cards));
  }, [cards, dispatch]);

  const visibleCards = useAppSelector(getVisibleTitles);

  return cards.length > 0 ? <Cards cards={visibleCards}/> : <NotFoundTitleCards/>;
}
