import FilterButton from '../../FilterButton/FilterButton';

const EpisodeListTitle = ({ title }) => {
  return (
    <h3 className="book-detail-episode-list-title">
      {title}
      <FilterButton />
    </h3>
  );
};

export default EpisodeListTitle;
