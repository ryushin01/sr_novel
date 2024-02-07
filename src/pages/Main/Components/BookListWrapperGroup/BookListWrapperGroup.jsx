import BookListSection from '../BookListSection/BookListSection';

const BookListWrapperGroup = ({
  specialBooksData,
  editorBooksData,
  blogBooksData,
}) => {
  return (
    <section className="book-list-container">
      <BookListSection
        link="#"
        title="[NEW] 주목할만한 신간 리스트"
        bookData={specialBooksData}
      />
      <BookListSection
        link="#"
        title="[PICK] 편집자들의 PICK!"
        bookData={editorBooksData}
      />
      <BookListSection
        link="#"
        title="[BEST] 파워 블로거들의 선택!"
        bookData={blogBooksData}
      />
    </section>
  );
};

export default BookListWrapperGroup;
