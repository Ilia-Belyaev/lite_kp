import './loading.css';

export default function Loading() {
  return (
    <div className='loader_outer_container'>
      <div className="loader_container">
        <span className="loader"></span>
        <div className='loader_text'>Loading...</div>
      </div>
    </div>
  );
}
