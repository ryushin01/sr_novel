import './CheckBox.scss';

/**
 * CheckBox Component 입니다.
 * @property {function} onChange - checkbox의 onChange 이벤트입니다.
 * @property {boolean} checked - checkbox의 checked 여부입니다.
 * @property {string} label - checkbox의 label입니다.
 * @property {string} id - checkbox의 id입니다.
 * @property {string} name - checkbox의 name입니다.
 */
const CheckBox = ({ onChange, checked, label, id, name, ...props }) => {
  return (
    <div className="check-box-container">
      <input
        type="checkbox"
        className={`${checked ? 'checked' : 'non-checked'}`}
        id={id}
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <label htmlFor={id} {...props}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
