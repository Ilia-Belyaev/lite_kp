import { useParams } from 'react-router-dom';
import Film from './film';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFilmInfoAction } from '../../store/api-actions';
import { getCurrentFilmInfo } from '../../store/slices/current-film-info/selectors';
import { getPopularFilms } from '../../store/slices/popular-films/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';


export default function FilmHOC() {
  const dispatch = useAppDispatch();
  const {id} = useParams<{id: string}>();
  const popularFilms = useAppSelector(getPopularFilms);

  const currentFilm = popularFilms.find((film) => film.id === Number(id));

  useEffect(() => {
    if (currentFilm) {
      dispatch(fetchFilmInfoAction(Number(id)));
    }
  },[dispatch, id, currentFilm]);

  const film = useAppSelector(getCurrentFilmInfo);

  if (!currentFilm) {
    return <NotFoundScreen />;
  }

  return <Film film={film}/>;
}
