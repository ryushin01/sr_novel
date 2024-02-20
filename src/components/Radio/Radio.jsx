import './Radio.scss';

/**
 * Radio Component 입니다.
 * @property {string} name - radio의 name입니다.
 * @property {string} id - radio의 id입니다.
 *
 */
const Radio = ({ name, id, value, checked, onChange, disabled }) => {
  return (
    <section className={`radio-container`}>
      <label className="radio-label" htmlFor={id}>
        <input
          className="radio-input"
          type="radio"
          id={id}
          name={name}
          aria-label={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {value}
      </label>
    </section>
  );
};

export default Radio;
