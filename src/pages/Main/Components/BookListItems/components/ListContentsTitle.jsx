import { Link } from 'react-router-dom';

const ListContentsTitle = ({ bookData, direction, rank }) => {
  const { isbn13, title, author, pubDate, bestRank } = bookData;

  const authorSplit = author.split('(지은이)');

  return (
    <div className="book-list-contents-title">
      {rank && <span>북 랭킹 : {bestRank}</span>}
      <h3>
        <Link to={`/detail:${isbn13}`}>{title}</Link>
      </h3>
      <h4>{authorSplit}</h4>
      {!direction && !rank && <span>출판일 : {pubDate}</span>}
    </div>
  );
};

export default ListContentsTitle;
