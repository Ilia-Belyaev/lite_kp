import { MY_SITES } from '../../constants';
import { MemoCommunicationItem } from './communication-item';

export default function AboutMe () {
  return (
    <div>
      <div>
        <h3 className='about-me'>Обо мне</h3>
        <p className='paragraph-info paragraph-info-ru'>Меня зовут Илья. Я начинающий frontend-разработчик, мне нравится писать на React + Redux Toolkit. Это мой первый pet-проект.</p>
        <p className='paragraph-info paragraph-info-en'>My name is Ilia. I am junior frontend-developer, and I enjoy coding in React + Redux Toolkit. This is my first pet-project.</p>
      </div>
      <div className='communication-item-container-sites'>
        {MY_SITES.map((item) => <MemoCommunicationItem item={item} key={item.contact} isMySites={item.isSites}/>)}
      </div>
    </div>
  );
}
