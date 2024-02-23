import Button from '@components/Button/Button';
import CheckBox from '@components/CheckBox/CheckBox';

const TermsOfUseForm = ({ selectedOptions, setSelectedOptions }) => {
  const handleSelectedOptionsChange = name => {
    setSelectedOptions(selectedOptions => {
      const newChecked = { ...selectedOptions };

      newChecked[name] = !newChecked[name];

      return newChecked;
    });
  };

  return (
    <section className="sign-up-terms-of-use-section">
      <h2 className="sign-up-terms-of-use-title">이용약관</h2>
      <div className="sign-up-check-box-wrap">
        <ul className="sign-up-check-box-list">
          <li>
            <CheckBox
              label="전체동의(선택약관 포함)"
              checked={selectedOptions.all}
              onChange={() => handleSelectedOptionsChange('all')}
            />
          </li>
          <li>
            <CheckBox
              label="[필수] 이용약관 동의"
              checked={selectedOptions.termsOfUse}
              onChange={() => handleSelectedOptionsChange('termsOfUse')}
            />
            <Button
              type="button"
              content="전문보기"
              color="primary"
              size="xSmall"
            />
          </li>
          <li>
            <CheckBox
              label="[필수] 개인정보수집 및 이용 동의"
              checked={selectedOptions.collection}
              onChange={() => handleSelectedOptionsChange('collection')}
            />
            <Button
              type="button"
              content="전문보기"
              color="primary"
              size="xSmall"
            />
          </li>
          <li>
            <CheckBox
              label="[필수] 개인정보처리위탁 동의"
              checked={selectedOptions.consignment}
              onChange={() => handleSelectedOptionsChange('consignment')}
            />
            <Button
              type="button"
              content="전문보기"
              color="primary"
              size="xSmall"
            />
          </li>
          <li>
            <CheckBox
              label="[선택] 광고/이벤트 정보 수신 동의"
              checked={selectedOptions.advertising}
              onChange={() => handleSelectedOptionsChange('advertising')}
            />
            <Button
              type="button"
              content="전문보기"
              color="primary"
              size="xSmall"
            />
          </li>
          <li>
            <CheckBox
              label="[선택] 야간수신 약관 동의"
              checked={selectedOptions.night}
              onChange={() => handleSelectedOptionsChange('night')}
            />
            <Button
              type="button"
              content="전문보기"
              color="primary"
              size="xSmall"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TermsOfUseForm;
