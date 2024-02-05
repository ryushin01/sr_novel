import './SelectBox.scss';

const SelectBox = ({ name, onChange, data }) => {
  return (
    <section className="select-container">
      <select className="select-box" name={name} onChange={onChange}>
        {data.map(data => {
          return (
            <option key={data.id} value={data.value}>
              {data.name}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default SelectBox;
