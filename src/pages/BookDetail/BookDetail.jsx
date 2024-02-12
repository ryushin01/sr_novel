import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from 'axios';
import { customAxios } from '@/config';
import Button from '@components/Button/Button';
import ToggleButton from './components/ToggleButton/ToggleButton';
import FilterButton from './components/FilterButton/FilterButton';
import BadgeGroup from '@components/BadgeGroup/BadgeGroup';

import './BookDetail.scss';
import EpisodeListSection from './components/episodeListSection/episodeListSection';

const BookDetail = () => {
  const [bookItemInfo, setBookItemInfo] = useState([]);
  const [bookDetailData, setBookDetailData] = useState([]);
  const [descriptionToggle, setDescriptionToggle] = useState(true);

  const params = useParams();
  const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;
  const API_URL = `ttb/api/ItemLookUp.aspx?ttbkey=${API_KEY}&itemIdType=ISBN&ItemId=${params.isbn13}&Cover=Big&output=js&Version=20131101&
  OptResult=ebookList,usedList,fileFormatList,previewImgList`;

  useEffect(() => {
    getBookDetailInfo();
    getDetailData();
  }, []);

  const getBookDetailInfo = async () => {
    try {
      const response = await customAxios.get(API_URL);
      setBookItemInfo(response?.data?.item);
    } catch (error) {
      console.error(error);
    }
  };

  const getDetailData = async () => {
    try {
      const response = await axios.get('../data/DetailData.json');

      if (params.isbn13 % 3 === 0) {
        setBookDetailData(
          response?.data?.result.filter(data => data.type === 'A'),
        );
      } else if (params.isbn13 % 3 === 1) {
        setBookDetailData(
          response?.data?.result.filter(data => data.type === 'B'),
        );
      } else {
        setBookDetailData(
          response?.data?.result.filter(data => data.type === 'C'),
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDescriptionToggle = () => {
    setDescriptionToggle(!descriptionToggle);
  };

  return (
    <main className="book-detail-container">
      <section className="book-detail-info-wrap">
        {bookItemInfo.map(info => {
          return (
            <div className="book-detail-info" key={info.isbn13}>
              <div className="book-detail-info-img">
                <img src={info.cover} alt={info.title} />
              </div>
              {bookDetailData.map(data => {
                return (
                  <div className="book-detail-info-text" key={data.interests}>
                    <div className="book-detail-info-badge">
                      <BadgeGroup contents={data.badge.join(', ')} />
                    </div>
                    <span className="book-detail-info-category">
                      {info.categoryName}
                    </span>
                    <h2 className="book-detail-info-title">{info.title}</h2>
                    <span className="book-detail-info-author">
                      {info.author} | {info.publisher}
                    </span>
                    <span className="book-detail-info-standard-price">
                      정가 : {info.priceStandard.toLocaleString()}원
                    </span>
                    <span className="book-detail-info-sales-price">
                      판매가 : {info.priceSales.toLocaleString()}원
                    </span>
                    <div className="book-detail-info-publish-wrap">
                      <span>{data.genre}</span>
                      <span>{data.age}</span>
                      <span>총 {data.chapters}화</span>
                      <span>{data.chapterFee}화 무료</span>
                      <span>
                        {data.payChapters}화 유료 (정가/판매가 회당
                        {data.chapterFee}원)
                      </span>
                    </div>
                    <div className="book-detail-info-eval-wrap">
                      <span>조회수 {data.views.toLocaleString()}</span>
                      <span>관심작품 {data.interests.toLocaleString()}</span>
                      <span>별점 {data.totalRating}</span>
                      <span>댓글 {data.totalComments.toLocaleString()}</span>
                    </div>
                    <div className="book-detail-info-description">
                      <p className={`${descriptionToggle ? 'active' : ''}`}>
                        {info.description}
                      </p>
                      <ToggleButton
                        handleDescriptionToggle={handleDescriptionToggle}
                        descriptionToggle={descriptionToggle}
                      />
                    </div>
                    <div className="book-detail-info-hashtag">
                      {data.tag.map(tag => {
                        return (
                          <Button
                            key={tag}
                            size="small"
                            content={`#${tag}`}
                            color="grayscale"
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
      <section className="book-detail-content-buy-wrap">
        <h3 className="book-detail-content-buy">보유 이용권 : 0 개</h3>
        {bookItemInfo.map(({ link }) => {
          return (
            <Button
              key={link}
              size="small"
              content="구매하기"
              color="primary"
              onClick={() => {
                window.location.href = link; // onClick 시 외부링크로 이동하기 위한 방법
              }}
            />
          );
        })}
      </section>
      <div className="book-detail-event-banner" />
      <div className="book-detail-first-episode-btn">
        <Button size="large" content="첫화 무료로 보러가기" color="primary" />
      </div>

      <section className="book-detail-episode-list-wrapper">
        <h3 className="book-detail-episode-list-title">
          <span>최신 업데이트</span>
        </h3>
        <EpisodeListSection episodeData={bookDetailData} />
      </section>
    </main>
  );
};

export default BookDetail;
