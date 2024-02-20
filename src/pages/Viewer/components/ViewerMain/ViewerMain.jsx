import ViewerContent from '@pages/Viewer/components/ViewerMain/components/ViewerContent/ViewerContent';
import ViewerMetadata from '@pages/Viewer/components/ViewerMain/components/ViewerMetadata/ViewerMetadata';
import './ViewerMain.scss';

const ViewerMain = ({ fontMode, themeMode }) => {
  return (
    <section className="viewer-main">
      <ViewerContent fontMode={fontMode} themeMode={themeMode} />
      <ViewerMetadata />
    </section>
  );
};

export default ViewerMain;
