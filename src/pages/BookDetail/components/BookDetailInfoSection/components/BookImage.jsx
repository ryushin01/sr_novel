const BookImage = ({ data }) => {
  return (
    <div className="book-detail-info-img">
      <img src={data.cover} alt={data.title} />
    </div>
  );
};

export default BookImage;
