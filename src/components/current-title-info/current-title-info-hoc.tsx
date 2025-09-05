import { ComponentType, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { TitleInfo } from '../../models/models';
import { getCurrentTitleInfo } from '../../store/slices/current-title-info/selectors';
import cn from 'classnames';
import { getBtn } from '../../store/slices/current-title-nav-btn/selectors';

type CurrentTitleInfoProps = {
  title: TitleInfo;
  button: string;
  classes: (customClass: string, effect: string) => string;
}

export const CurrentTitleInfoHOC = (Component: ComponentType<CurrentTitleInfoProps>) => {
  const WrapperComponent = () => {
    const title = useAppSelector(getCurrentTitleInfo);
    const currentBtn = useAppSelector(getBtn);
    const [isVisible, setIsVisible] = useState(false);
    const tagClasses = (customClass: string, effect: string) => cn(customClass, isVisible ? effect : '');

    useEffect(() => {
      setIsVisible(true);
    }, [currentBtn]);
    return <Component title={title} classes={tagClasses} button={currentBtn}/>;
  };

  return WrapperComponent;
};

