import ListContentsImg from './components/ListContentsImg';
import ListContentsTitle from './components/ListContentsTitle';

const BookListContents = ({ bookData, direction }) => {
  return (
    <div className="book-list-content">
      <ListContentsImg bookData={bookData} />
      <ListContentsTitle bookData={bookData} direction={direction} />
    </div>
  );
};

export default BookListContents;
