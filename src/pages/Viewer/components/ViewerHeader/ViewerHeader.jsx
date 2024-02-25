import { useState } from 'react';
import BackButton from '@components/BackButton/BackButton';
import ViewerModeSwitcher from '@pages/Viewer/components/ViewerHeader/components/ViewerModeSwitcher/ViewerModeSwitcher';
import './ViewerHeader.scss';

const ViewerHeader = ({ selectFondMode, selectThemeMode, fontMode, title }) => {
  const [isOpenViewerModeSwitcher, setIsOpenViewerModeSwitcher] =
    useState(false);

  const toggleViewerModeSwitcherLayer = () => {
    setIsOpenViewerModeSwitcher(!isOpenViewerModeSwitcher);
  };

  return (
    <section className="viewer-header">
      <div className="inner-wrap">
        <BackButton />

        <h2>
          {title}
          <span>&nbsp;-&nbsp;1화</span>
        </h2>

        <div className="viewer-mode-switcher-wrap">
          <button
            type="button"
            className={`btn-viewer-mode-switcher ${isOpenViewerModeSwitcher ? 'active' : ''}`}
            onClick={toggleViewerModeSwitcherLayer}
          >
            뷰어 설정
          </button>
          {isOpenViewerModeSwitcher && (
            <ViewerModeSwitcher
              selectFondMode={selectFondMode}
              selectThemeMode={selectThemeMode}
              fontMode={fontMode}
              toggleViewerModeSwitcherLayer={toggleViewerModeSwitcherLayer}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ViewerHeader;
