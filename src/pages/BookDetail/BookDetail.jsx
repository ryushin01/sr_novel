import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { customAxios } from '@/config';
import Button from '@components/Button/Button';
import EpisodeListSection from './components/episodeListSection/episodeListSection';
import BookDetailInfoSection from './components/bookDetailInfoSection/bookDetailInfoSection';
import Loading from '@pages/Loading/Loading';

import './BookDetail.scss';

const BookDetail = () => {
  const [bookItemInfo, setBookItemInfo] = useState([]);
  const [bookDetailData, setBookDetailData] = useState([]);
  const [descriptionToggle, setDescriptionToggle] = useState(true);
  const [loading, setLoading] = useState(true);

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

      setLoading(false);
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
    <>
      {loading && <Loading />}
      <main className="book-detail-container">
        <BookDetailInfoSection
          bookItemInfo={bookItemInfo}
          bookDetailData={bookDetailData}
          descriptionToggle={descriptionToggle}
          handleDescriptionToggle={handleDescriptionToggle}
        />
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
        <EpisodeListSection episodeData={bookDetailData} />
      </main>
    </>
  );
};

export default BookDetail;
