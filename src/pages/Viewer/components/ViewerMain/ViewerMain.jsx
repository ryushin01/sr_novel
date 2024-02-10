import ViewerContent from '@pages/Viewer/components/ViewerMain/components/ViewerContent/ViewerContent';
import ViewerMetadata from '@pages/Viewer/components/ViewerMain/components/ViewerMetadata/ViewerMetadata';
import './ViewerMain.scss';

const ViewerMain = () => {
  return (
    <section>
      <ViewerContent />
      <ViewerMetadata />
    </section>
  );
};

export default ViewerMain;
