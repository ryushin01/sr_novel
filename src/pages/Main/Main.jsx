import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { customAxios } from '../../config';
import { API_URL } from '@data/ApiUrl';

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
  const [editorBooksData, setEditorBooksData] = useState([]);
  const [blogBooksData, setBlogBooksData] = useState([]);
  const [loading, setLoading] = useState(true);
  // VITE에서 환경변수를 사용하기 위해서는 import.meta.env를 사용해야 한다.

  const API_ENDPOINTS = [
    API_URL.BEST_SELLER,
    API_URL.NEW_BOOK,
    API_URL.SPECIAL,
    API_URL.EDITOR,
    API_URL.BLOG,
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

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(blogBooksData);

  return (
    <>
      {loading && <Loading />}
      <main className="main-container">
        <section className="main-body-wrap">
          <BigBanner />
          <div className="book-list-wrap">
            <div className="new-special-list">
              <div className="new-special-main-title">
                <Link to="#">
                  <h2>[NEW] 주목할만한 신간 리스트</h2>
                </Link>
              </div>
              <ul>
                {specialBooksData.map(
                  ({ author, itemId, cover, title, pubDate }) => {
                    const authorSplit = author.split('(지은이)');
                    return (
                      <li key={itemId}>
                        <div className="new-special-img">
                          <img src={cover} alt={title} />
                        </div>
                        <div className="new-special-title">
                          <h3>{title}</h3>
                          <h4>{authorSplit}</h4>
                          <span>출판일 : {pubDate}</span>
                        </div>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
            <div className="new-special-list">
              <div className="new-special-main-title">
                <Link to="#">
                  <h2>[NEW] 주목할만한 신간 리스트</h2>
                </Link>
              </div>
              <ul>
                {editorBooksData.map(
                  ({ author, itemId, cover, title, pubDate }) => {
                    const authorSplit = author.split('(지은이)');
                    return (
                      <li key={itemId}>
                        <div className="new-special-img">
                          <img src={cover} alt={title} />
                        </div>
                        <div className="new-special-title">
                          <h3>{title}</h3>
                          <h4>{authorSplit}</h4>
                          <span>출판일 : {pubDate}</span>
                        </div>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
            <div className="new-special-list">
              <div className="new-special-main-title">
                <Link to="#">
                  <h2>[NEW] 주목할만한 신간 리스트</h2>
                </Link>
              </div>
              <ul>
                {blogBooksData.map(
                  ({ author, itemId, cover, title, pubDate }) => {
                    const authorSplit = author.split('(지은이)');
                    return (
                      <li key={itemId}>
                        <div className="new-special-img">
                          <img src={cover} alt={title} />
                        </div>
                        <div className="new-special-title">
                          <h3>{title}</h3>
                          <h4>{authorSplit}</h4>
                          <span>출판일 : {pubDate}</span>
                        </div>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
          </div>
          <div className="content-wrap">
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
