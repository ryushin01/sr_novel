import { useEffect, useState } from 'react';
import { customAxios } from '@/config';
import './Tab.scss';

const Tab = ({ query, data }) => {
  const [currentTab, setCurrentTab] = useState(0);
  // const API_KEY = import.meta.env.VITE_ALADDIN_API_KEY;
  // const API_URL = `ttb/api/ItemSearch.aspx?ttbkey=${API_KEY}&Query=${query}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=xml&Version=20131101`;

  const selectTab = index => {
    setCurrentTab(index);
  };

  // const getCategoryList = async () => {
  //   try {
  //     const response = await customAxios.get(API_URL);
  //     // setBookItemInfo(response?.data?.item);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <div className="tabs" role="tablist">
        {data.map((el, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            className={index === currentTab ? 'tab selected' : 'tab'}
            onClick={() => selectTab(index)}
          >
            {el.name}
          </button>
        ))}
      </div>
      <div className="tab-panel">{data[currentTab].content}</div>
    </div>
  );
};

export default Tab;
