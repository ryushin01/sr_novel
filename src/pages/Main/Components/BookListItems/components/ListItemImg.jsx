import { Link } from 'react-router-dom';

const ListItemImg = ({ bookData }) => {
  const { isbn13, title, cover } = bookData;

  return (
    <div className="book-list-item-img">
      <Link to={`/detail:${isbn13}`}>
        <img src={cover} alt={title} />
      </Link>
    </div>
  );
};

export default ListItemImg;
