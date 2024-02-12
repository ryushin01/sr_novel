import ViewerContent from '@pages/Viewer/components/ViewerMain/components/ViewerContent/ViewerContent';
import ViewerMetadata from '@pages/Viewer/components/ViewerMain/components/ViewerMetadata/ViewerMetadata';
import './ViewerMain.scss';

const ViewerMain = () => {
  return (
    <section className="viewer-main">
      <ViewerContent />
      <ViewerMetadata />
    </section>
  );
};

export default ViewerMain;
