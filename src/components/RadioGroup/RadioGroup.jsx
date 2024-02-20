import Radio from '@components/Radio/Radio';
import './RadioGroup.scss';

const RadioGroup = ({ data, onChange, checked }) => {
  return (
    <div className="radio-group-container">
      {data.map(({ id, name, value }) => {
        return (
          <Radio
            key={id}
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
