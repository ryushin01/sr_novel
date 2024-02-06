import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

import './BigBanner.scss';

const BigBanner = () => {
  return (
    <div className="swiperWrap">
      <Swiper
        loop={true} // 무한 반복 여부
        centeredSlides={true} // 슬라이드 중앙 정렬
        slidesPerView={'1'} // 한 화면에 보여줄 슬라이드 개수
        speed={500} // 슬라이드 속도
        spaceBetween={10} // 슬라이드 사이 여백
        pagination={{
          type: 'bullets', // 페이지 번호
          clickable: true, // 페이지 번호 클릭 가능 여부
        }}
        autoplay={{
          // 자동 슬라이드 설정
          delay: 4000, // 슬라이드 시간 간격
          disableOnInteraction: false, // 슬라이드 이동 후 자동 슬라이드 정지 여부
          pauseOnMouseEnter: true, // 마우스 호버 시 자동 슬라이드 정지 여부
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://picsum.photos/id/131/1024/1280" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/id/131/1024/1280" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/id/131/1024/1280" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/id/131/1024/1280" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/id/131/1024/1280" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BigBanner;
