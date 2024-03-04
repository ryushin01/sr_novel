import { Link } from 'react-router-dom';
import './ViewerMetadata.scss';

const ViewerMetadata = ({ title }) => {
  return (
    <div className="viewer-metadata">
      <div>
        <h1>{title}</h1>
        <h2>1화</h2>
      </div>

      <ul className="metadata-list">
        <li>
          <span>별점 5</span>
        </li>
        <li>
          <span>댓글 2</span>
        </li>
      </ul>

      <Link to="/main">소설 홈으로 가기</Link>
    </div>
  );
};

export default ViewerMetadata;
