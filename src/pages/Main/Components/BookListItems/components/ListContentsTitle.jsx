import { Link } from 'react-router-dom';

const ListContentsTitle = ({ bookData, direction }) => {
  const { isbn13, title, author, pubDate } = bookData;

  const authorSplit = author.split('(지은이)');

  return (
    <div className="book-list-contents-title">
      <h3>
        <Link to={`/detail:${isbn13}`}>{title}</Link>
      </h3>
      <h4>{authorSplit}</h4>
      {!direction && <span>출판일 : {pubDate}</span>}
    </div>
  );
};

export default ListContentsTitle;
