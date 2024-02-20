import Radio from '@pages/Viewer/components/ViewerHeader/components/Radio/Radio';
import './RadioGroup.scss';

const RadioGroup = ({ data, name, value, defaultChecked, text, onChange }) => {
  return (
    <div className="radio-group">
      {data?.map(item => {
        return (
          <Radio
            key={item.id}
            id={item.id}
            name={name}
            value={item.value}
            text={item.text}
            defaultChecked={item.defaultChecked}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
