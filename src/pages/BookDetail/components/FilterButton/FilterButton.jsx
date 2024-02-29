import './FilterButton.scss';

const FilterButton = ({ episodeSort, setEpisodeSort }) => {
  return (
    <div className="book-detail-filter-btn-wrap">
      <button
        type="button"
        className={`book-detail-filter-btn-1 ${episodeSort === 'last' && 'active'}`}
        onClick={() => setEpisodeSort('last')}
      >
        최신화부터
      </button>
      <button
        type="button"
        className={`book-detail-filter-btn-2 ${episodeSort === 'first' && 'active'}`}
        onClick={() => setEpisodeSort('first')}
      >
        첫화부터
      </button>
    </div>
  );
};

export default FilterButton;
