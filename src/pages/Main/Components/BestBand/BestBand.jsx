import { Link } from 'react-router-dom';

import MainTitle from '../../../../components/MainTitle/MainTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

import './BestBand.scss';

const BestBand = ({ booksData }) => {
  return (
    <section className="best-seller-container">
      <MainTitle link="/bestseller" title="[BEST] 베스트셀러 리스트" />
      <div className="best-seller-wrap">
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
          {booksData &&
            booksData?.map(({ itemId, isbn13, title, link, author, cover }) => {
              const authorSplit = author.split('(지은이)');

              return (
                <SwiperSlide key={itemId}>
                  <div className="best-swiper-wrap">
                    <div className="best-item-img">
                      <Link to={`/detail:${isbn13}`}>
                        <img src={cover} alt={title} />
                      </Link>
                    </div>
                    <div className="best-item-title">
                      <Link to={link}>
                        <h3>{title}</h3>
                      </Link>
                    </div>
                    <span>{authorSplit}</span>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default BestBand;
