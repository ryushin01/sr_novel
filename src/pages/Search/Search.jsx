import SearchForm from '@pages/Search/components/SearchForm/SearchForm';
import RecommendKeywords from '@pages/Search/components/RecommendKeywords/RecommendKeywords';
import './Search.scss';

const Search = () => {
  return (
    <main className="search">
      <div className="inner-wrap">
        <SearchForm />
        <RecommendKeywords />
      </div>
    </main>
  );
};

export default Search;
