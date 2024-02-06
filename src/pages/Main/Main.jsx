import { useEffect, useState } from 'react';
import { API_URL } from '@data/ApiUrl';

import axios from 'axios';
import { customAxios } from '../../config';

import BestBand from './Components/BestBand/BestBand';
import BigBanner from './Components/BigBanner/BigBanner';
import NewBook from './Components/NewBook/NewBook';
import Loading from '@pages/Loading/Loading';

import './Main.scss';
import NewSpecial from './Components/NewSpecial/NewSpecial';

const Main = () => {
  const [bsBooksData, setBsBooksData] = useState([]);
  const [newBooksData, setNewBooksData] = useState([]);
  const [specialBooksData, setSpecialBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  // VITE에서 환경변수를 사용하기 위해서는 import.meta.env를 사용해야 한다.

  const API_ENDPOINTS = [
    API_URL.BEST_SELLER,
    API_URL.NEW_BOOK,
    API_URL.SPECIAL,
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

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <main className="main-container">
        <section className="main-body-wrap">
          <BigBanner />
          <div className="contentWrap">
            <NewBook newBooksData={newBooksData} />
            <BestBand booksData={bsBooksData} />
            <NewSpecial specialBooksData={specialBooksData} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
