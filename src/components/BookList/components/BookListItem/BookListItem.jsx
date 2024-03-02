import BookCover from './components/BookCover/BookCover';
import BookMetadata from './components/BookMetadata/BookMetadata';

const BookListItem = ({ bookData }) => {
  return (
    <li className="book-list-item">
      <BookCover bookData={bookData} />
      <BookMetadata bookData={bookData} />
    </li>
  );
};

export default BookListItem;
