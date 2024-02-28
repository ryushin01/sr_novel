import Lottie from 'lottie-react';
import loading from '@lottie/SearchLoading.json';
import './SearchLoading.scss';

const SearchLoading = () => {
  return (
    <div className="search-loading">
      <Lottie animationData={loading} />
    </div>
  );
};

export default SearchLoading;
