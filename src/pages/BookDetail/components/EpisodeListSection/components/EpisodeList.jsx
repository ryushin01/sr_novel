import EpisodeListItem from './EpisodeListItem';

const EpisodeList = ({ episodeData }) => {
  return (
    <ul className="book-detail-episode-list">
      <EpisodeListItem episodeData={episodeData} />
    </ul>
  );
};

export default EpisodeList;
