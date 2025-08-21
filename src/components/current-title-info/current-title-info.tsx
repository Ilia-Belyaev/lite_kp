import { useAppSelector } from '../../hooks';
import { TitleInfo } from '../../models/models';
import { getBtn } from '../../store/slices/current-title-nav-btn/selectors';
import AboutTitle from './about-title';
import TitleDetails from './title-details';

type CurrentTitleInfoProps = {
  title: TitleInfo;
}

export default function CurrentTitleInfo({title}: CurrentTitleInfoProps) {
  const currentBtn = useAppSelector(getBtn);

  switch(currentBtn) {
    case 'Детали' :
      return <TitleDetails title={title}/>;
    default:
      return <AboutTitle title={title}/>;
  }
}
