import './Button.scss';

/**
 * Button props
 * [Style] 태그가 붙은 경우는 오직 스타일링에만 사용합니다.
 * @property {string} type: button / submit / reset     - 버튼 타입
 * @property {string} content                           - 버튼 내부 텍스트 및 WAI-ARIA 처리
 * @property {boolean} disabled                         - 버튼 비활성화 여부
 * @property {function} onClick                         - 버튼 클릭 시 실행 함수
 * @property {string} color: primary / secondary        - [Style] 버튼 색상
 * @property {string} size: medium / small / large      - [Style] 버튼 크기
 */

const Button = ({
  type = 'button',
  content,
  disabled,
  onClick,
  color,
  size,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`btn ${color ? color : ''} ${size ? size : ''}`}
      aria-label={content}
    >
      {content}
    </button>
  );
};

export default Button;
