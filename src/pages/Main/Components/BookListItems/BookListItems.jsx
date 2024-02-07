import ListItemImg from './components/ListItemImg';
import ListItemTitle from './components/ListItemTitle';

const BookListItems = ({ bookData, direction }) => {
  return direction ? (
    <div className="book-list-item">
      <ListItemImg bookData={bookData} />
      <ListItemTitle bookData={bookData} direction={direction} />
    </div>
  ) : (
    <li className="book-list-item">
      <ListItemImg bookData={bookData} />
      <ListItemTitle bookData={bookData} direction={direction} />
    </li>
  );
};

export default BookListItems;
