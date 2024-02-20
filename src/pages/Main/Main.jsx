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

  const getAladdinBooksData = async () => {
    try {
      const response = await axios.all(
        API_ENDPOINTS.map(endpoint => customAxios.get(endpoint)),
      );

      setBsBooksData(response[0]?.data?.item);
      setNewBooksData(response[1]?.data?.item);
      setSpecialBooksData(response[2]?.data?.item);
      setEditorBooksData(response[3]?.data?.item);
      setBlogBooksData(response[4]?.data?.item);
      setRankBooksData(response[5]?.data?.item);

      setLoading(false);
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
