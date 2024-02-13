import BookList from './components/BookList/BookList';
import MainTitle from '../MainTitle/MainTitle';

/**
 * BookList를 조합하는 최상위 컴포넌트 입니다.
 * @property {string} link - Main-Title onClick 시 이동할 링크를 입력합니다.
 * @property {string} title - Main-Title에 표시할 텍스트를 입력합니다.
 * @property {array} bookData - 화면에 표시할 책 데이터에 대한 배열을 입력합니다.
 * @property {string} direction - List의 방향을 입력합니다. (가로: true, 세로: false) 디폴트 값은 false 입니다.
 * @property {string} rank - List의 순위를 입력합니다. (순위: true, 순위 없음: false) 디폴트 값은 false 입니다.
 */
const BookListSection = ({
  link,
  title,
  bookData,
  direction = false,
  rank = false,
}) => {
  return (
    <div className="book-list-wrap">
      <MainTitle link={link} title={title} />
      <BookList bookData={bookData} direction={direction} rank={rank} />
    </div>
  );
};

export default BookListSection;
