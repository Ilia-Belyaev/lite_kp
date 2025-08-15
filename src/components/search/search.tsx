import '../../css/search.css';

export default function Search() {
  return (
    <form action="" method="get">
      <input name="s" placeholder="поиск по названию..." type="search" />
      <button className='search-button' type="submit"></button>
    </form>
  );
}
