import { useEffect, useState } from 'react';
import { customAxios } from '../../config';
import { Link } from 'react-router-dom';
import { BEST_SELLER_DATA } from '@data/ConstantData';
import SelectBox from '../../components/SelectBox/SelectBox';
import './BestSeller.scss';

const BestSeller = () => {
  const [bestSellerData, setBestSellerData] = useState([]);
  const [selectValue, setSelectValue] = useState('최신순');

  const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;
  const API_URL = `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=20&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId=51122&Version=20131101`;

  useEffect(() => {
    getBestSellerData();
  }, []);

  const getBestSellerData = async () => {
    try {
      const response = await customAxios.get(API_URL);
      setBestSellerData(response?.data?.item);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = e => {
    setSelectValue(e.target.value);
  };

  return (
    <main className="bestSellerContainer">
      <section className="bestSellerItemList">
        <div className="bestSellerTitleWrap">
          <h2>베스트셀러</h2>
          <SelectBox onChange={handleSelectChange} data={BEST_SELLER_DATA} />
        </div>
        <div className="bestSellerItem">
          {bestSellerData &&
            bestSellerData?.map(data => {
              return (
                <div className="bestSellerWrap" key={data.itemId}>
                  <div className="bestSellerImg">
                    <Link to={data.link}>
                      <img src={data.cover} alt={data.title} />
                    </Link>
                  </div>
                  <div className="bestSellerTitle">
                    <Link to={data.link}>
                      <h3>{data.title}</h3>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default BestSeller;
