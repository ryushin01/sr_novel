import './Badge.scss';

/**
 * Badge props
 * @property {string} content: new / hot / end        - 뱃지 라벨 및 색상
 */

const Badge = ({ content }) => {
  let refinedContent;
  switch (content) {
    case 'new':
      refinedContent = 'NEW';
      break;
    case 'hot':
      refinedContent = 'HOT';
      break;
    case 'end':
      refinedContent = '완결';
      break;
    default:
      alert(`${content} 에러입니다.`);
  }

  return (
    <span
      className={`badge ${content ? content : ''}`}
      aria-label={refinedContent}
    >
      {refinedContent}
    </span>
  );
};

export default Badge;
