import { Link } from 'react-router-dom';

import Loading from '../../Loading/Loading';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';

import './BestBand.scss';

const BestBand = ({ booksData, loading }) => {
  return (
    <>
      {loading && <Loading />}
      <div className="bestSellerMainTitle">
        <Link className="BestTitle" to="/bestseller">
          <h2>TOP 10 베스트셀러 모음집!</h2>
        </Link>
      </div>
      <section className="bestSeller">
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
          className="mySwiper"
        >
          {booksData &&
            booksData?.map(data => {
              return (
                <SwiperSlide key={data.itemId}>
                  <div className="bestWrap">
                    <div className="bestItemImg">
                      <Link to={`/detail:${data.isbn13}`}>
                        <img src={data.cover} alt={data.title} />
                      </Link>
                    </div>
                    <div className="bestItemTitle">
                      <Link to={data.link}>
                        <h3>{data.title}</h3>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </>
  );
};

export default BestBand;
