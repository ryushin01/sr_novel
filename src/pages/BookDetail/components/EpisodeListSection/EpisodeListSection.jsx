import { useState } from 'react';

import EpisodeList from './components/EpisodeList';
import EpisodeListTitle from './components/EpisodeListTitle';

const EpisodeListSection = ({ episodeData }) => {
  const [episodeSort, setEpisodeSort] = useState('last');

  return (
    <section className="book-detail-episode-list-wrapper">
      <EpisodeListTitle
        title="최신 업데이트"
        episodeSort={episodeSort}
        setEpisodeSort={setEpisodeSort}
      />
      <EpisodeList episodeData={episodeData} episodeSort={episodeSort} />
    </section>
  );
};

export default EpisodeListSection;
