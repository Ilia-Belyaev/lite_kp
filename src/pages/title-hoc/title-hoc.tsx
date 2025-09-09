import { useParams } from 'react-router-dom';
import Title from './title';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchTitleInfoAction } from '../../store/api-actions';
import { getCurrentTitleInfo } from '../../store/slices/current-title-info/selectors';
import { getPopularTitles } from '../../store/slices/popular-titles/selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { setBtn } from '../../store/slices/current-title-nav-btn/current-title-nav-btn';


export default function TitleHOC() {
  const dispatch = useAppDispatch();
  const {id} = useParams<{id: string}>();
  const popularTitles = useAppSelector(getPopularTitles);

  const currentTitle = popularTitles.find((title) => title.id === Number(id));

  useEffect(() => {
    if (currentTitle) {
      dispatch(fetchTitleInfoAction(Number(id)));
    }
  },[dispatch, id, currentTitle]);

  const title = useAppSelector(getCurrentTitleInfo);

  useEffect(()=> {
    dispatch(setBtn(title.type));
  });

  if (!currentTitle) {
    return <NotFoundScreen />;
  }

  return <Title title={title}/>;
}
