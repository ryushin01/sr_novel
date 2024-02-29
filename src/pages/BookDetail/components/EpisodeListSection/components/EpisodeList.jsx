import EpisodeListItem from './EpisodeListItem';

const EpisodeList = ({ episodeData, episodeSort }) => {
  return (
    <div className="book-detail-episode-list-wrap">
      <ul className="book-detail-episode-list">
        <EpisodeListItem episodeData={episodeData} episodeSort={episodeSort} />
      </ul>
    </div>
  );
};

export default EpisodeList;
