import { Button, Input, InputRef, Popover, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './search.css';
import { ChangeEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { setVisibleTitlesAfterSearch } from '../../store/slices/current-genre-titles/current-genre-titles';

export default function SearchButton() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef<InputRef>(null);

  const handleChange = (data: ChangeEvent<HTMLInputElement>) => {
    setValue(data.target.value);
    dispatch(setVisibleTitlesAfterSearch(
      {
        letter: data.target.value,
        isOpen: true,
      }
    ));
  };

  const content = (
    <div>
      <Input
        placeholder="Введите название"
        className='ant-search-input'
        onChange={(data) => handleChange(data)}
        value={value}
        ref={inputRef}
      />
    </div>
  );

  const handleFocus = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleClick = () => {
    setValue('');
    dispatch(setVisibleTitlesAfterSearch(
      {
        letter: '',
        isOpen: false,
      }
    ));
  };

  return (
    <Space title="Поиск">
      <Popover
        trigger='click'
        placement="right"
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

