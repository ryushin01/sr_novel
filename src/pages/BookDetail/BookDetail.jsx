import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { customAxios } from '../../config';
import Button from '@components/Button/Button';

import './BookDetail.scss';
import ToggleButton from './ToggleButton/ToggleButton';

const BookDetail = () => {
  const [bookItemInfo, setBookItemInfo] = useState([]);
  const [descriptionToggle, setDescriptionToggle] = useState(true);

  const params = useParams();
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;
  const API_URL = `ttb/api/ItemLookUp.aspx?ttbkey=${API_KEY}&itemIdType=ISBN&ItemId=${params.isbn13}&Cover=Big&output=js&Version=20131101&
  OptResult=ebookList,usedList,fileFormatList,previewImgList`;

  useEffect(() => {
    getBookDetailInfo();
  }, []);

  const getBookDetailInfo = async () => {
    try {
      const response = await customAxios.get(API_URL);
      setBookItemInfo(response?.data?.item);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDescriptionToggle = () => {
    setDescriptionToggle(!descriptionToggle);
  };

  console.log(bookItemInfo);

  return (
    <main className="book-detail-container">
      <section className="book-detail-info-wrap">
        {bookItemInfo.map(info => {
          return (
            <div className="book-detail-info" key={info.isbn13}>
              <div className="book-detail-info-img">
                <img src={info.cover} alt={info.title} />
              </div>
              <div className="book-detail-info-text">
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
                  <Button size="small" content="#판타지" color="grayscale" />
                  <Button size="small" content="#환상소설" color="grayscale" />
                </div>
              </div>
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
          <div className="book-detail-filter-btn-wrap">
            <button type="button" className="book-detail-filter-btn-1">
              최신화부터
            </button>
            <button type="button" className="book-detail-filter-btn-2">
              첫화부터
            </button>
          </div>
        </h3>
        <div className="book-detail-episode-list-wrap">
          <ul className="book-detail-episode-list">
            <li className="book-detail-episode-list-items">
              <div className="episode-list-items-wrap">
                <h4 className="episode-list-items-title">
                  <Link to="#">1화 - 모험의 시작</Link>
                  <span>2021.08.02</span>
                </h4>
                <span>별점, 댓글</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default BookDetail;
