import './Input.scss';

/**
 * input Component 입니다.
 * @property {string} type - 버튼의 타입입니다. (ex - text, password, number...)
 * @property {string} id - input의 id입니다.
 * @property {string} placeholder - input의 placeholder입니다.
 * @property {function} onChange - input의 onChange 이벤트입니다.
 * @property {string} name - input의 name입니다.
 * @property {boolean} disabled - input의 disabled 여부입니다.
 * @property {string} value - input의 value입니다.
 * @property {string} size - input의 size입니다. (ex - small, medium, large)
 * @property {string} contents - input의 label에 들어갈 내용을 적습니다.
 * @property {string} shape - input의 shape입니다. (ex - round, border)
 * @property {string} purpose - input의 목적입니다. (ex - login, sign-up)
 */
const Input = ({
  type,
  id,
  placeholder,
  onChange,
  name,
  disabled,
  value,
  size = 'medium',
  shape = 'round',
  contents,
  purpose,
}) => {
  return (
    <div className="input-container">
      {contents && (
        <label
          htmlFor={id}
          className={`label ${purpose ? `label-${purpose}` : ''}`}
        >
          {contents}
        </label>
      )}
      <input
        id={id}
        className={`input ${shape} ${size} ${purpose ? `input-${purpose}` : ''}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        disabled={disabled}
        value={value}
        size={size}
        shape={shape}
      />
    </div>
  );
};

export default Input;
