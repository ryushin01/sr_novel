import { useState } from 'react';
import BackButton from '@components/BackButton/BackButton';
import ViewerModeSwitcher from '@pages/Viewer/components/ViewerHeader/components/ViewerModeSwitcher/ViewerModeSwitcher';
import './ViewerHeader.scss';

const ViewerHeader = ({ title, selectFondMode, selectThemeMode, fontMode }) => {
  const [isOpenViewerModeSwitcher, setIsOpenViewerModeSwitcher] =
    useState(true);

  const toggleViewerModeSwitcherLayer = () => {
    setIsOpenViewerModeSwitcher(!isOpenViewerModeSwitcher);
  };

  return (
    <section className="viewer-header">
      <div className="inner-wrap">
        <BackButton />

        <h2>
          {title ||
            '작품명이 길어지면 말줄임 처리가 됩니다. 작품명이 길어지면 말줄임 처리가 됩니다. 작품명이 길어지면 말줄임 처리가 됩니다.'}
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
