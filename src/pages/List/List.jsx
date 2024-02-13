import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import { LIST_SELECT_DATA } from '@data/ConstantData';
import SelectBox from '@components/SelectBox/SelectBox';
import Pagination from '@components/Pagination/Pagination';
import Loading from '../Loading/Loading';

import { customAxios } from '../../config';

import './List.scss';

const List = () => {
  const [listData, setListData] = useState([]);
  const [selectValue, setSelectValue] = useState('51122');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const queryType = params.queryType;
  const title = searchParams.get('title');
  const pageSize = 20;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;
  const API_URL = `ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=${queryType}&MaxResults=100&start=1&SearchTarget=Book&output=js&Cover=Big&CategoryId=${selectValue}&Version=20131101`;

  useEffect(() => {
    getListData();
  }, [selectValue, currentPage]);

  const getListData = async () => {
    try {
      const response = await customAxios.get(API_URL);
      setListData(response?.data?.item);
      setTotalPage(Math.ceil(response?.data.item.length / pageSize));

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = e => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      {loading && <Loading />}
      <main className="list-container">
        <h2 className="list-main-title">
          <span>{title}</span>
          <SelectBox onChange={handleSelectChange} data={LIST_SELECT_DATA} />
        </h2>
        <section className="list-section-wrap">
          {listData?.slice(startIndex, endIndex).map(data => {
            return (
              <div className="list-items-wrap" key={data.title}>
                <div className="list-items-img">
                  <Link to={`/detail/${data.isbn13}`}>
                    <img src={data.cover} alt={data.title} />
                  </Link>
                </div>
                <h3 className="list-items-title">
                  <Link to={`/detail/${data.isbn13}`}>{data.title}</Link>
                  <span>{data.author}</span>
                </h3>
              </div>
            );
          })}
        </section>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
          pageLimit={5}
        />
      </main>
    </>
  );
};

export default List;
