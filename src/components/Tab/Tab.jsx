import { useEffect, useState } from 'react';
import BookList from '@components/BookList/BookList';
import './Tab.scss';

const Tab = ({ tabData, panelData }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentTabData, setCurrentTabData] = useState([]);

  let totalResultsArr = panelData
    .flat(Infinity)
    .map(el => el.data.totalResults);

  const selectTab = index => {
    setCurrentTab(index);
    setCurrentTabData(panelData[index].data.item);
  };

  useEffect(() => {
    selectTab(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panelData]);

  return (
    <div>
      <div className="tabs" role="tablist">
        {tabData.map((el, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            className={index === currentTab ? 'tab selected' : 'tab'}
            onClick={() => selectTab(index)}
          >
            {el.name}{' '}
            <span className="total-results">({totalResultsArr[index]})</span>
          </button>
        ))}
      </div>
      <div className="tab-panel">
        <BookList bookData={currentTabData} />
      </div>
    </div>
  );
};

export default Tab;
