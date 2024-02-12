import EpisodeList from './components/EpisodeList';

const EpisodeListSection = ({ episodeData }) => {
  return (
    <div className="book-detail-episode-list-wrap">
      <EpisodeList episodeData={episodeData} />
    </div>
  );
};

export default EpisodeListSection;
