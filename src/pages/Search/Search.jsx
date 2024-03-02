import { useState } from 'react';
import SearchForm from '@pages/Search/components/SearchForm/SearchForm';
import RecommendKeywords from '@pages/Search/components/RecommendKeywords/RecommendKeywords';
import SearchResult from '@pages/Search/components/SearchResult/SearchResult';
import './Search.scss';

const Search = () => {
  const [isCompletedSearch, setIsCompletedSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResultData, setSearchResultData] = useState([]);

  const handleCompletedSearch = () => {
    setIsCompletedSearch(true);
  };

  const handleQuery = value => {
    setQuery(value);
  };

  const handleSearchResultData = value => {
    setSearchResultData(value);
  };

  return (
    <main className="search">
      <div className="outer-wrap">
        <div className="inner-wrap">
          <SearchForm
            handleCompletedSearch={handleCompletedSearch}
            handleQuery={handleQuery}
            // handleTotalResults={handleTotalResults}
            handleSearchResultData={handleSearchResultData}
          />
        </div>
        {isCompletedSearch ? (
          <SearchResult query={query} searchResultData={searchResultData} />
        ) : (
          <RecommendKeywords />
        )}
      </div>
    </main>
  );
};

export default Search;
