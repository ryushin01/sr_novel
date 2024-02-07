import BookListSection from '../BookListSection/BookListSection';

const BookListWrapper = ({ link, title, bookData, direction = false }) => {
  return (
    <section
      className={`${direction ? 'new-container' : 'book-list-container'}`}
    >
      <BookListSection
        link={link}
        title={title}
        bookData={bookData}
        direction={direction}
      />
    </section>
  );
};

export default BookListWrapper;
