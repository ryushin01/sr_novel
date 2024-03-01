import BookListItem from './components/BookListItem/BookListItem';
import './BookList.scss';

const BookList = ({ bookData }) => {
  return (
    <ul className="book-list">
      {bookData.map((data, index) => {
        return <BookListItem key={index} bookData={data} />;
      })}
    </ul>
  );
};

export default BookList;
