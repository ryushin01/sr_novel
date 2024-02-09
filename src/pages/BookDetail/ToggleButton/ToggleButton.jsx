const ToggleButton = ({ handleDescriptionToggle, descriptionToggle }) => {
  return (
    <button
      type="button"
      onClick={handleDescriptionToggle}
      className={`book-detail-info-description-toggle ${descriptionToggle ? 'open' : ''}`}
    >
      {descriptionToggle ? <span>자세히 보기</span> : <span>간략히 보기</span>}
    </button>
  );
};

export default ToggleButton;
