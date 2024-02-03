import { useEffect, useState } from 'react';
import { customAxios } from '../../config';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import BestBand from './BestBand/BestBand';

import 'swiper/scss';
import 'swiper/scss/pagination';

import './Main.scss';

const Main = () => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  // VITE에서 환경변수를 사용하기 위해서는 import.meta.env를 사용해야 한다.
  const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;
  const API_URL = `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=20&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId=51122&OptResult=ebookList,usedList,fileFormatList&Version=20131101`;

  useEffect(() => {
    getAladdinBooksData();
  }, []);

  const getAladdinBooksData = async () => {
    try {
      const response = await customAxios.get(API_URL);
      setBooksData(response?.data?.item);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main className="container">
        <section className="mainContainer">
          <div className="swiperWrap">
            <Swiper
              loop={true} // 무한 반복 여부
              centeredSlides={true} // 슬라이드 중앙 정렬
              grabCursor={true} // 마우스 커서 모양 변경
              slidesPerView={'auto'} // 한 화면에 보여줄 슬라이드 개수
              speed={500} // 슬라이드 속도
              pagination={{
                type: 'bullets', // 페이지 번호
                clickable: true, // 페이지 번호 클릭 가능 여부
              }}
              autoplay={{
                // 자동 슬라이드 설정
                delay: 3500, // 슬라이드 시간 간격
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
            </Swiper>
          </div>
          <div className="contentWrap">
            <BestBand booksData={booksData} loading={loading} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
