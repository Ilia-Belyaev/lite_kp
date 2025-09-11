import Image from '../../images/nothing_not_found.png';
import './not-found-title-card.css';

export default function NotFoundTitleCards() {
  return(
    <div className='not_found_outer_container'>
      <div className='not_found_container'>
        <img className='not_found_image' src={Image}/>
        <div className='not_found_text'>
          К сожалению, ничего не найдено
        </div>
      </div>
    </div>
  );
}
