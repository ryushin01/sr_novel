import EpisodeList from './components/EpisodeList';
import EpisodeListTitle from './components/EpisodeListTitle';

const EpisodeListSection = ({ episodeData }) => {
  return (
    <section className="book-detail-episode-list-wrapper">
      <EpisodeListTitle title="최신 업데이트" />
      <EpisodeList episodeData={episodeData} />
    </section>
  );
};

export default EpisodeListSection;
