import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '@/config';
import './BookEval.scss';

const BookEval = ({ isbn13 }) => {
  const [bookDetailData, setBookDetailData] = useState([]);

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailData = async () => {
    try {
      const response = await axios.get(API.DETAIL_DATA);

      if (isbn13 % 3 === 0) {
        setBookDetailData(
          response?.data?.result.filter(data => data.type === 'A'),
        );
      } else if (isbn13 % 3 === 1) {
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
  return bookDetailData.map(el => {
    // Intl 객체를 이용하여 만 이상의 숫자를 2만과 같이 표현
    const compactNumberFormatter = new Intl.NumberFormat('ko', {
      notation: 'compact',
    });

    const compactNumber = num => {
      return compactNumberFormatter.format(num);
    };

    return (
      <div key={el.views} className="list-item-eval-wrap">
        <ul>
          <li>{compactNumber(el.views)}</li>
          <li>{compactNumber(el.interests)}</li>
          <li>{el.totalRating}</li>
        </ul>
      </div>
    );
  });
};

export default BookEval;
