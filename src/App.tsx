import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppRoute } from './constants';
import Main from './components/main';
import { useAppSelector } from './hooks';
import { getErrorStatus, getLoadStatus } from './store/slices/popular-films/selectors';
import Error from './pages/error/error';
import Loading from './components/loading/loading';
import FilmHOC from './pages/film-hoc/film-hoc';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';

export default function App() {
  const isError = useAppSelector(getErrorStatus);
  const isLoad = useAppSelector(getLoadStatus);

  if(isLoad) {
    return <Loading />;
  }

  if (isError) {
    return <Error/>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmHOC/>}
        />
        <Route
          path={AppRoute.Error}
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
