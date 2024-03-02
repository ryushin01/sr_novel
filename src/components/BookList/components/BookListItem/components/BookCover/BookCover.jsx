import { Link } from 'react-router-dom';

const BookCover = ({ bookData }) => {
  const { isbn13, title, cover } = bookData;

  return (
    <div className="book-cover">
      <Link to={`/detail/${isbn13}`}>
        <img src={cover} alt={title} />
      </Link>
    </div>
  );
};

export default BookCover;
