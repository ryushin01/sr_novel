import { Link } from 'react-router-dom';
import Title from './components/Title/Title';
import Author from './components/Author/Author';
import BookEval from '@components/BookEval/BookEval';

const BookMetadata = ({ bookData }) => {
  const { isbn13, title, author } = bookData;

  return (
    <div className="book-metadata">
      <Link to={`/detail/${isbn13}`}>
        <Title title={title} />
        <Author author={author} />
      </Link>

      <BookEval />
    </div>
  );
};

export default BookMetadata;
