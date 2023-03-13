import Video from '../components/Video';

const Videos = ({videos}) => {
  return (
    <>
    {
      (videos.length > 0) ? videos.map(({title, dateAdded, channel, thumbnail, description}, index) => 
        <Video
          key={index}
          title={title}
          dateAdded={dateAdded}
          channel={channel}
          thumbnail={thumbnail}
          description={description}
          rate={0} />
      )
      : <p>No hay resultados</p>
    }
    </>
  );
}

export default Videos;