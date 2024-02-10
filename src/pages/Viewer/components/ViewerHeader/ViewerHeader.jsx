import BackButton from '@components/BackButton/BackButton';
import './ViewerHeader.scss';

const ViewerHeader = ({ title }) => {
  return (
    <section className="viewer-header">
      <div className="inner-wrap">
        <BackButton />

        <h2>
          {title ||
            '작품명이 길어지면 말줄임 처리가 됩니다. 작품명이 길어지면 말줄임 처리가 됩니다. 작품명이 길어지면 말줄임 처리가 됩니다. '}
        </h2>

        <button type="button" className="btn-viewer-setting">
          뷰어 설정
        </button>
      </div>
    </section>
  );
};

export default ViewerHeader;
