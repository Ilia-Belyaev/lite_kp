import { Button, Input, InputRef, Popover, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './search.css';
import { ChangeEvent, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setVisibleTitlesAfterSearch } from '../../store/slices/current-genre-titles/current-genre-titles';
import { debounce } from '../../utilites/utilites';
import { TooltipPlacement } from 'antd/es/tooltip';
import { MAX_WINDOW_WIDTH } from '../../constants';
import { getIsOpenSearch, getPopoverText } from '../../store/slices/searchPopover/selectors';
import { setSearchPopoverOpen, setTextPopover } from '../../store/slices/searchPopover/searchPopover';

function SearchButton() {
  const dispatch = useAppDispatch();
  const inputRef = useRef<InputRef>(null);
  const [placement, setPlacement] = useState<TooltipPlacement>('left');
  const isPopoverOpened = useAppSelector(getIsOpenSearch);
  const value = useAppSelector(getPopoverText);
  const spaceRef = useRef<HTMLDivElement>(null);

  const searchHandler = useCallback((searchValue: string) => {
    dispatch(setVisibleTitlesAfterSearch({
      letter: searchValue,
      isOpen: true,
    }));
  }, [dispatch]);

  const debouncedDispatch = useMemo(() => debounce(searchHandler, 300), [searchHandler]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    dispatch(setTextPopover(newValue));
    debouncedDispatch(newValue);
  }, [debouncedDispatch, dispatch]);

  const content = useMemo(() => (
    <div>
      <Input
        placeholder="Введите название"
        className='ant-search-input'
        onChange={handleChange}
        value={value}
        ref={inputRef}
      />
    </div>
  ), [handleChange, value]);

  const handleFocus = useCallback(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }, []);

  const handleReset = useCallback(() => {
    dispatch(setTextPopover(''));
    dispatch(setVisibleTitlesAfterSearch({
      letter: '',
      isOpen: false,
    }));
  }, [dispatch]);

  const togglePopover = useCallback(() => {
    dispatch(setSearchPopoverOpen(!isPopoverOpened));
    if (isPopoverOpened) {
      handleReset();
    } else {
      handleFocus();
    }
  }, [dispatch, isPopoverOpened, handleReset, handleFocus]);

  useEffect(() => {
    const handleResize = () => {
      setPlacement(window.innerWidth >= MAX_WINDOW_WIDTH ? 'left' : 'bottom');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Space ref={spaceRef} title="Поиск">
      <Popover
        open={isPopoverOpened}
        placement={placement}
        content={content}
        getPopupContainer={(trigger) => trigger}
      >
        <Button
          className='ant-search-button'
          shape="circle"
          icon={<SearchOutlined />}
          onClick={togglePopover}
        />
      </Popover>
    </Space>
  );
}

export const MemoizedSearch = memo(SearchButton);
