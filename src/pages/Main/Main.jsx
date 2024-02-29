import { useEffect, useState } from 'react';

import axios from 'axios';
import { customAxios } from '../../config';
import { API_URL } from '@data/ApiUrl';

import BigBanner from './Components/BigBanner/BigBanner';
import Loading from '@pages/Loading/Loading';
import BookListWrapper from './Components/BookListWrapper/BookListWrapper';
import BookListWrapperGroup from './Components/BookListWrapperGroup/BookListWrapperGroup';

import './Main.scss';

const Main = () => {
  const [bsBooksData, setBsBooksData] = useState([]);
  const [newBooksData, setNewBooksData] = useState([]);
  const [specialBooksData, setSpecialBooksData] = useState([]);
  const [editorBooksData, setEditorBooksData] = useState([]);
  const [blogBooksData, setBlogBooksData] = useState([]);
  const [rankBooksData, setRankBooksData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_ENDPOINTS = [
    API_URL.BEST_SELLER,
    API_URL.NEW_BOOK,
    API_URL.SPECIAL,
    API_URL.EDITOR,
    API_URL.BLOG,
    API_URL.RANK,
  ];

  useEffect(() => {
    getAladdinBooksData();
  }, []);

  /**
   * 페이지 로드 시마다 API를 가져오게 되면 매 페이지 랜더링 마다 Data를 호출하여 계속 로딩이 발생하므로
   * 세션스토리지에 저장된 데이터가 있으면 가져오고 없으면 API를 호출하여 데이터를 가져오도록 수정
   */

  const getAladdinBooksData = async () => {
    try {
      // 캐시된 데이터가 있는 지 확인
      const cachedData = sessionStorage.getItem('BooksData');

      if (cachedData) {
        // 캐싱된 데이터 JSON.parse를 이용하여 파싱
        const parsedData = JSON.parse(cachedData);

        setBsBooksData(parsedData[0]?.data?.item);
        setNewBooksData(parsedData[1]?.data?.item);
        setSpecialBooksData(parsedData[2]?.data?.item);
        setEditorBooksData(parsedData[3]?.data?.item);
        setBlogBooksData(parsedData[4]?.data?.item);
        setRankBooksData(parsedData[5]?.data?.item);

        setLoading(false);
      } else {
        // 캐시된 데이터가 없다면 서버에서 데이터 요청
        const response = await axios.all(
          API_ENDPOINTS.map(endpoint => customAxios.get(endpoint)),
        );

        // 데이터를 세션스토리지에 저장
        sessionStorage.setItem('BooksData', JSON.stringify(response));

        setBsBooksData(response[0]?.data?.item);
        setNewBooksData(response[1]?.data?.item);
        setSpecialBooksData(response[2]?.data?.item);
        setEditorBooksData(response[3]?.data?.item);
        setBlogBooksData(response[4]?.data?.item);
        setRankBooksData(response[5]?.data?.item);

        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <main className="main-container">
        <div className="main-body-wrap">
          <BigBanner />
          <BookListWrapperGroup
            specialBooksData={specialBooksData}
            editorBooksData={editorBooksData}
            blogBooksData={blogBooksData}
            rank={false}
          />
          <div className="main-banner-1" />
          <BookListWrapper
            link="/list/ItemNewAll?title=[NEW] 이번에 나온 따끈따끈한 신작"
            title="[NEW] 이번에 나온 따끈따끈한 신작"
            bookData={newBooksData}
            direction={true}
          />
          <div className="main-banner-2" />
          <BookListWrapper
            link="/list/Bestseller?title=[BEST] 베스트셀러 리스트"
            title="[BEST] 베스트셀러 리스트"
            bookData={bsBooksData}
            direction={true}
          />
          <div className="main-banner-1" />
          <BookListWrapper
            link="/list/ItemNewSpecial?title=[NEW] 주목! 할만한 신간 리스트"
            title="[NEW] 주목! 할만한 신간 리스트"
            bookData={specialBooksData}
            direction={true}
          />
          <div className="main-banner-2" />
          <BookListWrapperGroup
            rankBooksData={rankBooksData && rankBooksData}
            rank={true}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
