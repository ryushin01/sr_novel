import EpisodeListItem from './EpisodeListItem';

const EpisodeList = ({ episodeData }) => {
  return (
    <div className="book-detail-episode-list-wrap">
      <ul className="book-detail-episode-list">
        <EpisodeListItem episodeData={episodeData} />
      </ul>
    </div>
  );
};

export default EpisodeList;
