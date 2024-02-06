import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '@svg/right_arrow.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

import './NewBook.scss';

const NewBook = ({ newBooksData }) => {
  return (
    <section className="new-container">
      <div className="new-main-title">
        <Link className="new-sub-title" to="/newbook">
          <h2>이번에 나온 따끈따끈한 신작!</h2>
          <Arrow />
        </Link>
      </div>
      <div className="new-swiper-wrap">
        {/* 스와이퍼 형식으로 변경 해보자 */}
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
          className="main-swiper"
        >
          {newBooksData &&
            newBooksData?.map(
              ({ itemId, isbn13, title, link, author, cover }) => {
                const authorSplit = author.split('(지은이)');

                return (
                  <SwiperSlide key={itemId}>
                    <div className="new-swiper-wrap">
                      <div className="new-item-img">
                        <Link to={`/detail:${isbn13}`}>
                          <img src={cover} alt={title} />
                        </Link>
                      </div>
                      <div className="new-item-title">
                        <Link to={link}>
                          <h3>{title}</h3>
                        </Link>
                      </div>
                      <span>{authorSplit}</span>
                    </div>
                  </SwiperSlide>
                );
              },
            )}
        </Swiper>
      </div>
    </section>
  );
};

export default NewBook;
