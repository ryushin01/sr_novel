import { Link } from 'react-router-dom';
import BookEval from '@components/BookEval/BookEval';

const ListContentsTitle = ({ bookData, rank }) => {
  const { isbn13, title, author, bestRank } = bookData;

  const authorSplit = author.split('(지은이)');

  return (
    <h3 className="book-list-contents-title">
      {rank && <span>북 랭킹 : {bestRank}</span>}
      <Link to={`/detail/${isbn13}`}>{title}</Link>
      <span>{authorSplit}</span>
      <BookEval isbn13={isbn13} />
    </h3>
  );
};

export default ListContentsTitle;
