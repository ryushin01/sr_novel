import BookListItem from './components/BookListItem/BookListItem';
import './BookList.scss';

const BookList = ({ bookData }) => {
  return (
    <ul className="book-list">
      {bookData.length > 0 ? (
        bookData.map((data, index) => {
          return <BookListItem key={index} bookData={data} />;
        })
      ) : (
        <span className="no-data">검색 결과가 없습니다.</span>
      )}
    </ul>
  );
};

export default BookList;
