import './SearchForm.scss';

const SearchForm = () => {
  return (
    <form className="search-form">
      <fieldset>
        <legend>검색 폼</legend>
        <label>
          <input
            id="search"
            type="search"
            placeholder="작품명, 작가명, 태그, 닉네임 입력"
          />
        </label>
        <span className="btn-group">
          <button type="reset">검색창 초기화</button>
          <button type="submit">검색하기</button>
        </span>
      </fieldset>
    </form>
  );
};

export default SearchForm;
