import FilterButton from '../../FilterButton/FilterButton';

const EpisodeListTitle = ({ title, episodeSort, setEpisodeSort }) => {
  return (
    <h3 className="book-detail-episode-list-title">
      {title}
      <FilterButton episodeSort={episodeSort} setEpisodeSort={setEpisodeSort} />
    </h3>
  );
};

export default EpisodeListTitle;
