import { useEffect, useState } from 'react';
import { customAxios } from '@/config';
import { useInput } from '@customHooks/useInput';
import SearchLoading from '@pages/Search/components/SearchLoading/SearchLoading';
import './SearchForm.scss';

const SearchForm = ({
  handleCompletedSearch,
  handleQuery,
  handleTotalResults,
}) => {
  const [loading, setLoading] = useState(false);
  const [searchKeywordData, setSearchKeywordData] = useInput({
    query: '',
  });
  const [CategoryId, setCategoryId] = useState(1);
  const [searchResultData, setSearchResultData] = useState({});

  // SEARCH_RESULT_TAB_DATA에서 CategoryId 필요

  const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;
  const API_URL = `ttb/api/ItemSearch.aspx?ttbkey=${API_KEY}&Query=${searchKeywordData.query}&QueryType=Keyword&CategoryId=${CategoryId}&MaxResults=100&start=1&SearchTarget=Book&output=js&Version=20131101`;

  const getCategoryList = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await customAxios.get(API_URL);
      setSearchResultData(response?.data);
      // setBookItemInfo(response?.data?.item);
      // console.log(response);
      handleQuery(response?.data?.query);
      handleTotalResults(response?.data?.totalResults);
      handleCompletedSearch();
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(searchResultData);

  // const { query, totalResults } = searchResultData;

  // useEffect(() => {

  // }, []);
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
