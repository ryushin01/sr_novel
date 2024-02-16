import './IconButton.scss';

/**
 * IconButton component 입니다.
 * @property {string} shape - 버튼 모양을 결정합니다. (ex. 'close')
 * @property {string} type - 버튼 타입은 button 고정입니다.
 * @property {function} onClick - 버튼 클릭 시 실행될 함수를 결정합니다.
 * @property {function} onChange - 버튼 변경 시 실행될 함수를 결정합니다.
 */
const IconButton = ({ shape, onClick, onChange }) => {
  return (
    <div className="icon-btn-container">
      <button
        className={`icon-btn ${shape}`}
        type="button"
        onClick={onClick}
        onChange={onChange}
      />
    </div>
  );
};

export default IconButton;
