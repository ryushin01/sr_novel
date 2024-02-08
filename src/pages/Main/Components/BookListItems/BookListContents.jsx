import ListContentsImg from './components/ListContentsImg';
import ListContentsTitle from './components/ListContentsTitle';

const BookListContents = ({ bookData, direction, rank }) => {
  return (
    <div className="book-list-content">
      <ListContentsImg bookData={bookData} />
      <ListContentsTitle
        bookData={bookData}
        direction={direction}
        rank={rank}
      />
    </div>
  );
};

export default BookListContents;
