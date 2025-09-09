import KpLogo from '../../images/kinopoisk-logo.svg';
import { Rating } from '../../models/models';
import { fixedRating } from '../../utilites/utilites';

type RatingInfoProps = {
  rating: Rating;
}
export default function RatingInfo ({rating}: RatingInfoProps) {
  return rating ? (
    <div className='rating'>
      <div className='rating-container kp-rating'>
        <img src={KpLogo} />
        <div>{fixedRating(rating.kp)}</div>
      </div>
    </div>
  ) : '';
}
