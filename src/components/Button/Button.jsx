import './Button.scss';

/**
 * Button props
 * [Style] 태그가 붙은 경우는 오직 스타일링에만 사용합니다.
 * @property {string} type: button / submit / reset             - 버튼 타입
 * @property {string} content                                   - 버튼 내부 텍스트 및 WAI-ARIA 처리
 * @property {boolean} disabled                                 - 버튼 비활성화 여부
 * @property {function} onClick                                 - 버튼 클릭 시 실행 함수
 * @property {string} size: medium / small / large / xSmall              - [Style] 버튼 크기
 * @property {string} color: primary / secondary / grayscale    - [Style] 버튼 색상
 */

const Button = ({
  type = 'button',
  content,
  disabled,
  onClick,
  size,
  color,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn ${size ? size : ''} ${color ? color : ''}`}
      aria-label={content}
    >
      {content}
    </button>
  );
};

export default Button;
