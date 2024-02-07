import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '@svg/right_arrow.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/navigation';

import './NewSpecial.scss';
import MainTitle from '../MainTitle/MainTitle';

const NewSpecial = ({ specialBooksData }) => {
  return (
    <section className="new-special-container">
      <MainTitle link="#" title="[NEW] 신간 특선" />
      <div className="new-special-swiper-wrap">
        <Swiper
          slidesPerView="3"
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="new-special-swiper"
        >
          {specialBooksData &&
            specialBooksData
              ?.slice(0, 3)
              .map(({ itemId, isbn13, title, link, author, cover }) => {
                const authorSplit = author.split('(지은이)');

                return (
                  <SwiperSlide key={itemId}>
                    <div className="new-special-wrap">
                      <div className="new-special-ranking">
                        <span>1</span>
                      </div>
                      <div className="new-special-img">
                        <img src={cover} alt={title} />
                      </div>
                      <div className="new-special-title">
                        <h3>{title}</h3>
                        <h4>{authorSplit[0]}</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          <SwiperSlide>
            <div className="new-special-wrap">
              <ul>
                <li>
                  <div className="new-special-ranking">
                    <span>1</span>
                  </div>
                  <div className="new-special-img">
                    <img src="https://picsum.photos/id/131/1024/1280" />
                  </div>
                  <div className="new-special-title">
                    <h3>신간1</h3>
                    <h4>작가1</h4>
                  </div>
                </li>
                <li>
                  <div className="new-special-ranking">
                    <span>1</span>
                  </div>
                  <div className="new-special-img">
                    <img src="https://picsum.photos/id/131/1024/1280" />
                  </div>
                  <div className="new-special-title">
                    <h3>신간1</h3>
                    <h4>작가1</h4>
                  </div>
                </li>
                <li>
                  <div className="new-special-ranking">
                    <span>1</span>
                  </div>
                  <div className="new-special-img">
                    <img src="https://picsum.photos/id/131/1024/1280" />
                  </div>
                  <div className="new-special-title">
                    <h3>신간1</h3>
                    <h4>작가1</h4>
                  </div>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default NewSpecial;
