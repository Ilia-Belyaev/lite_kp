import { useAppDispatch } from '../../hooks';
import { fetchPopularFilmAction } from '../../store/api-actions';
import Image from '../../images/error_img.svg';
import '../../css/error.css';

export default function Error () {
  const dispatch = useAppDispatch();

  return (
    <div className='outer_error_container'>
      <img className='error_image' src={Image}/>
      <p className="error__text">Не удалось загрузить фильмы</p>
      <button
        onClick={() => {
          dispatch(fetchPopularFilmAction());
        }}
        className="replay--error"
        type="button"
      >
         Попробовать ещё раз
      </button>
    </div>
  );
}
