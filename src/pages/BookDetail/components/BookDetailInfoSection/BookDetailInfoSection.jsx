import BookDetailInfoWrap from './components/BookDetailInfoWrap';
import BookImage from './components/bookImage';

const BookDetailInfoSection = ({
  bookItemInfo,
  bookDetailData,
  descriptionToggle,
  handleDescriptionToggle,
}) => {
  return (
    <section className="book-detail-info-wrap">
      {bookItemInfo.map(info => {
        return (
          <div className="book-detail-info" key={info.isbn13}>
            <BookImage data={info} />
            <BookDetailInfoWrap
              aladinData={info}
              bookDetailData={bookDetailData}
              descriptionToggle={descriptionToggle}
              handleDescriptionToggle={handleDescriptionToggle}
            />
          </div>
        );
      })}
    </section>
  );
};

export default BookDetailInfoSection;
