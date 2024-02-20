import ToggleButton from '../ToggleButton/ToggleButton';

const DetailInfoDescription = ({
  descriptionToggle,
  handleDescriptionToggle,
  aladinData,
}) => {
  return (
    <div className="book-detail-info-description">
      <p className={`${descriptionToggle ? 'active' : ''}`}>
        {aladinData.description}
      </p>
      <ToggleButton
        handleDescriptionToggle={handleDescriptionToggle}
        descriptionToggle={descriptionToggle}
      />
    </div>
  );
};

export default DetailInfoDescription;
