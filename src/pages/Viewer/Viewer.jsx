import ViewerHeader from '@pages/Viewer/components/ViewerHeader/ViewerHeader';
import ViewerMain from '@pages/Viewer/components/ViewerMain/ViewerMain';
import ViewerFooter from '@pages/Viewer/components/ViewerFooter/ViewerFooter';
import './Viewer.scss';

const Viewer = ({ chapterNumber }) => {
  return (
    <main>
      <ViewerHeader />
      <ViewerMain />
      <ViewerFooter />
    </main>
  );
};

export default Viewer;
