import { useEffect, useState } from 'react';
import axios from 'axios';
import { customAxios } from '@/config';
import { useInput } from '@customHooks/useInput';
import SearchLoading from '@pages/Search/components/SearchLoading/SearchLoading';
import './SearchForm.scss';

const SearchForm = ({
  handleCompletedSearch,
  handleQuery,
  handleSearchResultData,
}) => {
  const [loading, setLoading] = useState(false);
  const [searchKeywordData, setSearchKeywordData] = useInput({
    query: '',
  });

  const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;
  const categoryArr = ['all', 'romance', 'fantasy', 'light'];

  const categoryIdSwitcher = value => {
    let categoryId;

    switch (value) {
      case 'all':
        categoryId = 1;
        break;
      case 'romance':
        categoryId = 51125;
        break;
      case 'fantasy':
        categoryId = 51122;
        break;
      default:
        categoryId = 50927;
    }

    return `ttb/api/ItemSearch.aspx?ttbkey=${API_KEY}&Query=${searchKeywordData.query}&QueryType=Keyword&CategoryId=${categoryId}&MaxResults=100&start=1&SearchTarget=Book&output=js&Version=20131101`;
  };

  const getCategoryList = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.all(
        categoryArr.map(categoryArr =>
          customAxios.get(categoryIdSwitcher(categoryArr)),
        ),
      );

      handleQuery(response[0].data.query);
      handleSearchResultData(response);
      handleCompletedSearch();
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        className="search-form"
        onChange={setSearchKeywordData}
        onSubmit={getCategoryList}
      >
        <fieldset>
          <legend>검색 폼</legend>
          <label>
            <input
              id="search"
              type="search"
              name="query"
              placeholder="작품명, 작가명, 태그, 닉네임 입력"
            />
          </label>
          <span className="btn-group">
            <button type="reset">검색창 초기화</button>
            <button type="submit">검색하기</button>
          </span>
        </fieldset>
      </form>
      {loading && <SearchLoading />}
    </>
  );
};

export default SearchForm;
