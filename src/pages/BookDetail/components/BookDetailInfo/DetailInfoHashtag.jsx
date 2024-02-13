import Button from '@components/Button/Button';

const DetailInfoHashtag = ({ data }) => {
  return (
    <div className="book-detail-info-hashtag">
      {data.tag.map(tag => {
        return (
          <Button
            key={tag}
            size="small"
            content={`#${tag}`}
            color="grayscale"
          />
        );
      })}
    </div>
  );
};

export default DetailInfoHashtag;
