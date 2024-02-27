import BookListSection from '../BookListSection/BookListSection';

const BookListWrapperGroup = ({
  specialBooksData,
  editorBooksData,
  blogBooksData,
  rankBooksData,
  rank,
}) => {
  return (
    <section className="book-list-container">
      {rank ? (
        <>
          <BookListSection
            link="/list/Bestseller?title=[BEST] 치열한 전장에서 살아남은 책들"
            title="[BEST] 북 랭킹 1 ~ 5위"
            bookData={rankBooksData.slice(0, 5)}
            rank={rank}
          />
          <BookListSection
            link="/list/Bestseller?title=[BEST] 치열한 전장에서 살아남은 책들"
            title="[BEST] 북 랭킹 6 ~ 10위"
            bookData={rankBooksData.slice(5, 10)}
            rank={rank}
          />
          <BookListSection
            link="/list/Bestseller?title=[BEST] 치열한 전장에서 살아남은 책들"
            title="[BEST] 북 랭킹 11 ~ 15위"
            bookData={rankBooksData.slice(10, 15)}
            rank={rank}
          />
        </>
      ) : (
        <>
          <BookListSection
            link="/list/ItemNewSpecial?title=[NEW] 주목할만한 신간 리스트"
            title="[NEW] 따끈따끈 신간 리스트"
            bookData={specialBooksData}
          />
          <BookListSection
            link="/list/ItemEditorChoice?title=[PICK] 편집자들의 PICK!"
            title="[PICK] 편집자들의 PICK!"
            bookData={editorBooksData}
          />
          <BookListSection
            link="#"
            title="[BEST] 파워블로거들의 선택!"
            bookData={blogBooksData}
          />
        </>
      )}
    </section>
  );
};

export default BookListWrapperGroup;
