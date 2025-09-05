type DescriptionProps = {
  description: string | null;
  shortDescription: string | null;
  classes: (customClass: string, effect: string) => string;
}

export default function Description({description, shortDescription, classes}: DescriptionProps) {
  return (
    <div className='current-info'>
      <div className={classes('description-container', 'showFromLeft')}>
        <div className='description-text'>
          {(shortDescription || description) ? shortDescription ?? description : 'Здесь пока ещё нет описания'}
        </div>
      </div>
    </div>
  );
}
