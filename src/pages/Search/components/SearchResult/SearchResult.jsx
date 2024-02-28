import Tab from '@components/Tab/Tab';
import { SEARCH_RESULT_TAB_DATA } from '@data/ConstantData';
import './SearchResult.scss';

const SearchResult = ({ query, totalResults }) => {
  return (
    <section className="search-result-section">
      <h2>
        <span>&lsquo;{query}&rsquo;</span>에 대한 검색 결과가 {totalResults}건이
        있습니다.
      </h2>

      <Tab data={SEARCH_RESULT_TAB_DATA} />
    </section>
  );
};

export default SearchResult;
