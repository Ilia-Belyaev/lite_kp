import { FloatButton } from 'antd';
import { BTN_VISIBILITY_HEIGHT } from '../../constants';
import BackToTop from '../../images/back_to_top.png';

export default function BackTopBtn () {
  return (
    <div className='float-button-container'>
      <FloatButton.BackTop
        className='float-button'
        visibilityHeight={BTN_VISIBILITY_HEIGHT}
        icon={<img src={BackToTop}/>}
      >
      </FloatButton.BackTop>
    </div>);
}

