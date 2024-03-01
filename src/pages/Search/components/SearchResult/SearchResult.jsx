import Tab from '@components/Tab/Tab';
import { SEARCH_RESULT_TAB_DATA } from '@data/ConstantData';
import './SearchResult.scss';

const SearchResult = ({ query, searchResultData }) => {
  return (
    <section className="search-result-section">
      <h2>
        <span>&lsquo;{query}&rsquo;</span>에 대한 검색 결과가{' '}
        {searchResultData[0].data.totalResults}건이 있습니다.
      </h2>

      <Tab tabData={SEARCH_RESULT_TAB_DATA} panelData={searchResultData} />
    </section>
  );
};

export default SearchResult;
