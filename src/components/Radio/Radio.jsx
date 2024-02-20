import './Radio.scss';

const Radio = ({
  type = 'radio',
  name,
  value,
  defaultChecked,
  text,
  onChange,
}) => {
  return (
    <label className="input-radio">
      <input
        type={type}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
        aria-label={text}
      />
      <span>가</span>
    </label>
  );
};

export default Radio;
