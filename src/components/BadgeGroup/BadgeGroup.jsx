import Badge from '@components/Badge/Badge';
import './BadgeGroup.scss';

/**
 * BadgeGroup props
 * @property {string} contents: 여러 뱃지가 필요한 경우는 contents="new, hot, end"로 기입합니다.        - 뱃지 그룹 컨텐츠
 */

const BadgeGroup = ({ contents }) => {
  let contentsArr = contents?.split(', ');

  return (
    <div className="badge-group">
      {contentsArr.map((content, index) => {
        return <Badge key={index} content={content} />;
      })}
    </div>
  );
};

export default BadgeGroup;
