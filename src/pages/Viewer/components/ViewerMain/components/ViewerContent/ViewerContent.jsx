import './ViewerContent.scss';

const ViewerContent = ({ fontMode, themeMode, summary, authorComment }) => {
  return (
    <div className={`viewer-content ${fontMode} ${themeMode}`}>
      <p>{summary}</p>

      <div className="author-comment">
        <h3>작가의 말</h3>
        <p>{authorComment}</p>
      </div>
    </div>
  );
};

export default ViewerContent;
