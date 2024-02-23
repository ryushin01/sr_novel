import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ViewerHeader from '@pages/Viewer/components/ViewerHeader/ViewerHeader';
import ViewerMain from '@pages/Viewer/components/ViewerMain/ViewerMain';
// import ViewerFooter from '@pages/Viewer/components/ViewerFooter/ViewerFooter';
import './Viewer.scss';

const Viewer = () => {
  const [fontMode, setFontMode] = useState('pretendard');
  const [themeMode, setThemeMode] = useState('default');
  const location = useLocation();
  const episodeData = location.state.episodeData;

  if (episodeData === undefined) return;

  // 목업 데이터만 구조 분해 할당합니다.
  const { title, summary, authorComment } = episodeData;

  const selectFondMode = e => {
    setFontMode(e.target.value);
  };

  const selectThemeMode = e => {
    setThemeMode(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ViewerHeader
        selectFondMode={selectFondMode}
        selectThemeMode={selectThemeMode}
        fontMode={fontMode}
        title={title}
      />
      <ViewerMain
        fontMode={fontMode}
        themeMode={themeMode}
        title={title}
        summary={summary}
        authorComment={authorComment}
      />
      {/* <ViewerFooter /> */}
    </main>
  );
};

export default Viewer;
