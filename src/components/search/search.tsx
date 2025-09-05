import { Button, Input, InputRef, Popover, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './search.css';
import { ChangeEvent, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { setVisibleTitlesAfterSearch } from '../../store/slices/current-genre-titles/current-genre-titles';
import { debounce } from '../../utilites/utilites';
import { TooltipPlacement } from 'antd/es/tooltip';
import { MAX_WINDOW_WIDTH } from '../../constants';

function SearchButton() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const [placement, setPlacement] = useState<TooltipPlacement>('left');

  const debouncedDispatch = useCallback(
    debounce((searchValue: string) => {
      dispatch(setVisibleTitlesAfterSearch({
        letter: searchValue,
        isOpen: true,
      }));
    }, 300),
    [dispatch]
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedDispatch(newValue);
  }, [debouncedDispatch]);

  const content = useMemo(() => (
    <div>
      <Input
        placeholder="Введите название"
        className='ant-search-input'
        onChange={(data) => {
          setValue(data.target.value);
          handleChange(data);
        }}
        value={value}
        ref={inputRef}
      />
    </div>
  ), [handleChange, value]);


  const handleFocus = useCallback(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }, []);

  const handleClick = useCallback(() => {
    setValue('');
    dispatch(setVisibleTitlesAfterSearch({
      letter: '',
      isOpen: false,
    }));
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setPlacement(window.innerWidth >= MAX_WINDOW_WIDTH ? 'left' : 'bottom');
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Space title="Поиск">
      <Popover
        trigger='click'
        placement={placement}
        content={content}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            handleClick();
          } else {
            handleFocus();
          }
        }}
      >
        <Button
          className='ant-search-button'
          shape="circle"
          icon={<SearchOutlined />}
        />
      </Popover>
    </Space>
  );
}

export const MemoizedSearch = memo(SearchButton);
