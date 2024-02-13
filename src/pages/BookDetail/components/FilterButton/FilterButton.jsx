const FilterButton = () => {
  return (
    <div className="book-detail-filter-btn-wrap">
      <button type="button" className="book-detail-filter-btn-1">
        최신화부터
      </button>
      <button type="button" className="book-detail-filter-btn-2">
        첫화부터
      </button>
    </div>
  );
};

export default FilterButton;
