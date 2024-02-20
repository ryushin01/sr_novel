import { Link } from 'react-router-dom';

const EpisodeListItem = ({ episodeData }) => {
  return episodeData?.map(data => {
    return data.chapterList.map(episode => {
      return (
        <li
          className="book-detail-episode-list-items"
          key={episode.chapterNumber}
        >
          <div className="episode-list-items-wrap">
            <div className="episode-list-items-is-free">
              <span>{episode.chapterNumber}</span>
              <span>{`${episode.isFree ? '무료' : '유료'}`}</span>
            </div>
            <h4 className="episode-list-items-title-wrap">
              <Link to="#">{episode.chapterTitle}</Link>
              <div className="episode-list-items-date-wrap">
                <span>{episode.updateDate}</span>
                <span>{episode.totalLetters}자</span>
              </div>
              <div className="episode-list-items-eval-wrap">
                <span>{episode.rating}</span>
                <span>{episode.comments}</span>
              </div>
            </h4>
          </div>
        </li>
      );
    });
  });
};

export default EpisodeListItem;
