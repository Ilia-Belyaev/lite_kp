import { useAppDispatch } from '../../hooks';
import { fetchPopularTitleAction } from '../../store/api-actions';
import Image from '../../images/lost-connect.svg';
import '../../css/error.css';

export default function Error () {
  const dispatch = useAppDispatch();

  return (
    <div className='outer_error_container'>
      <img className='error_image' src={Image}/>
      <p className="error__text">Не удалось загрузить фильмы</p>
      <button
        onClick={() => {
          dispatch(fetchPopularTitleAction());
        }}
        className="replay--error"
        type="button"
      >
         Попробовать ещё раз
      </button>
    </div>
  );
}
