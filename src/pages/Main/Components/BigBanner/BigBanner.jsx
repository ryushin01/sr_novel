import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { API } from '@/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Controller } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './BigBanner.scss';

const BigBanner = () => {
  const [bigBannerData, setBigBannerData] = useState([]);

  const getBigBannerData = async () => {
    try {
      const response = await axios.get(API.BIG_BANNER_DATA);
      setBigBannerData(response.data.result);
    } catch (error) {
      alert('BigBanner.jsx > BigBannerData.json 통신 에러입니다.');
    }
  };

  useEffect(() => {
    getBigBannerData();
  }, []);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="swiper-wrap">
      <Swiper
        loop={true} // 무한 반복 여부
        centeredSlides={true} // 슬라이드 중앙 정렬
        slidesPerView={'auto'}
        allowTouchMove={false}
        // slidesPerView={'1'} // 한 화면에 보여줄 슬라이드 개수
        speed={500} // 슬라이드 속도
        // spaceBetween={10} // 슬라이드 사이 여백
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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="big-swiper"
      >
        {bigBannerData.map(({ src, alt }, index) => {
          return (
            <SwiperSlide key={index}>
              <span className="image-wrap">
                <img src={src} alt={alt} />
              </span>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress-wrap">
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default BigBanner;
