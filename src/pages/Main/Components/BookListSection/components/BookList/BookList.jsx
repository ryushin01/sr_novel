import BookListContents from '../../../BookListItems/BookListContents';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

/**
 * List를 받아오기 위한 컴포넌트 입니다.
 * @property {array} bookData - 화면에 표시할 책 데이터에 대한 배열을 입력합니다.
 * @property {string} direction - List의 방향을 입력합니다. (가로: true, 세로: false) 디폴트 값은 false 입니다.
 */
const BookList = ({ bookData, direction }) => {
  return direction ? (
    <>
      <div className="book-list-swiper-wrap">
        <Swiper
          slidesPerView="5" // 한 화면에 보여줄 슬라이드 개수
          spaceBetween={10} // 슬라이드 사이 여백
          speed={500} // 슬라이드 속도
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="book-list-swiper"
          wrapperTag="ul"
        >
          {bookData &&
            bookData?.map(data => {
              return (
                <SwiperSlide
                  key={data.itemId}
                  tag="li"
                  className="book-list-swiper-items"
                >
                  <BookListContents bookData={data} direction={direction} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  ) : (
    <ul className="book-list">
      {bookData.map(data => {
        return (
          <li key={data.itemId} className="book-list-items">
            <BookListContents bookData={data} />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
