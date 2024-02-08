import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { customAxios } from '../../config';

import './BookDetail.scss';

const BookDetail = () => {
  const [bookItemInfo, setBookItemInfo] = useState([]);

  const params = useParams();
  const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;
  const API_URL = `ttb/api/ItemLookUp.aspx?ttbkey=${API_KEY}&itemIdType=ISBN&ItemId=${params.isbn13}&output=js&Version=20131101&
  OptResult=ebookList,usedList,reviewList`;

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

  return (
    <main className="book-detail-container">
      <section className="book-detail-info-wrap"></section>
      <section className="book-detail-episode-list-wrap"></section>
    </main>
  );
};

export default BookDetail;
