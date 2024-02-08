import { Link } from 'react-router-dom';

const ListContentsImg = ({ bookData }) => {
  const { isbn13, title, cover } = bookData;

  return (
    <div className="book-list-contents-img">
      <Link to={`/detail/${isbn13}`}>
        <img src={cover} alt={title} />
      </Link>
    </div>
  );
};

export default ListContentsImg;
