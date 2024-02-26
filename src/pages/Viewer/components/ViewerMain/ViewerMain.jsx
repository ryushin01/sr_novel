import ViewerContent from '@pages/Viewer/components/ViewerMain/components/ViewerContent/ViewerContent';
import ViewerMetadata from '@pages/Viewer/components/ViewerMain/components/ViewerMetadata/ViewerMetadata';
import './ViewerMain.scss';

const ViewerMain = ({ fontMode, themeMode, title, summary, authorComment }) => {
  return (
    <section className="viewer-main">
      <ViewerContent
        fontMode={fontMode}
        themeMode={themeMode}
        summary={summary}
        authorComment={authorComment}
      />
      <ViewerMetadata title={title} />
    </section>
  );
};

export default ViewerMain;
