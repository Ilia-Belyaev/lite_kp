import { useAppSelector } from '../../hooks';
import { getBtn } from '../../store/slices/current-title-nav-btn/selectors';
import { About } from './about-title';
import { Details } from './title-details';

export default function CurrentTitleInfo() {
  const currentBtn = useAppSelector(getBtn);

  switch(currentBtn) {
    case 'Детали' :
      return <Details />;
    default:
      return <About />;
  }
}
