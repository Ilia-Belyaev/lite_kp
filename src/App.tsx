import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppRoute } from './constants';
import Main from './components/main';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        {/* <Route
          path={AppRoute.Book}
          element={}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
