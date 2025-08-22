import { ComponentType, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { TitleInfo } from '../../models/models';
import { getCurrentTitleInfo } from '../../store/slices/current-title-info/selectors';
import cn from 'classnames';

type CurrentTitleInfoProps = {
  title: TitleInfo;
  classes: (customClass: string, effect: string) => string;
}

export const CurrentTitleInfoHOC = (Component: ComponentType<CurrentTitleInfoProps>) => {
  const WrapperComponent = () => {
    const title = useAppSelector(getCurrentTitleInfo);
    const [isVisible, setIsVisible] = useState(false);
    const tagClasses = (customClass: string, effect: string) => cn(customClass, isVisible ? effect : '');

    useEffect(() => {
      setIsVisible(true);
    }, []);
    return <Component title={title} classes={tagClasses}/>;
  };

  return WrapperComponent;
};

