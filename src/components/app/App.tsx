import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppRoute } from '../../constants';
import Main from '../main/main';
import { useAppSelector } from '../../hooks';
import { getErrorStatus, getLoadStatus } from '../../store/slices/popular-titles/selectors';
import Error from '../../pages/error/error';
import Loading from '../loading/loading';
import TitleHOC from '../../pages/title-hoc/title-hoc';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

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
          path={AppRoute.Title}
          element={<TitleHOC/>}
        />
        <Route
          path={AppRoute.Error}
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
