import { useState } from 'react';
import ViewerHeader from '@pages/Viewer/components/ViewerHeader/ViewerHeader';
import ViewerMain from '@pages/Viewer/components/ViewerMain/ViewerMain';
import ViewerFooter from '@pages/Viewer/components/ViewerFooter/ViewerFooter';
import './Viewer.scss';

const Viewer = ({ chapterNumber }) => {
  const [fontMode, setFontMode] = useState('pretendard');
  const [themeMode, setThemeMode] = useState('default');

  const selectFondMode = e => {
    setFontMode(e.target.value);
  };

  const selectThemeMode = e => {
    setThemeMode(e.target.value);
  };

  return (
    <main>
      <ViewerHeader
        selectFondMode={selectFondMode}
        selectThemeMode={selectThemeMode}
        fontMode={fontMode}
      />
      <ViewerMain fontMode={fontMode} themeMode={themeMode} />
      <ViewerFooter />
    </main>
  );
};

export default Viewer;
