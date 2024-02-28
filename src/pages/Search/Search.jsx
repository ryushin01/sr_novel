import { useState } from 'react';
import SearchForm from '@pages/Search/components/SearchForm/SearchForm';
import RecommendKeywords from '@pages/Search/components/RecommendKeywords/RecommendKeywords';
import SearchResult from '@pages/Search/components/SearchResult/SearchResult';
import './Search.scss';

const Search = () => {
  const [isCompletedSearch, setIsCompletedSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [totalResults, setTotalResults] = useState(0);

  const handleCompletedSearch = () => {
    setIsCompletedSearch(true);
  };

  const handleQuery = value => {
    setQuery(value);
  };

  const handleTotalResults = value => {
    setTotalResults(value);
  };

  // totalResults 및 각 카테고리 검색 결과 객체로 SearchResult > Tab까지 전달 필요

  return (
    <main className="search">
      <div className="outer-wrap">
        <div className="inner-wrap">
          <SearchForm
            handleCompletedSearch={handleCompletedSearch}
            handleQuery={handleQuery}
            handleTotalResults={handleTotalResults}
          />
        </div>
        {isCompletedSearch ? (
          <SearchResult query={query} totalResults={totalResults} />
        ) : (
          <RecommendKeywords />
        )}
      </div>
    </main>
  );
};

export default Search;
