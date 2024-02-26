import Button from '@components/Button/Button';
import CheckBox from '@components/CheckBox/CheckBox';

const TermsOfUseForm = ({ selectedOptions, setSelectedOptions }) => {
  const handleSelectedOptionsChange = name => {
    setSelectedOptions(selectedOptions => {
      const newChecked = { ...selectedOptions };

      // newChecked의 name과 동일한 key의 checked 상태를 반전
      newChecked[name] = !newChecked[name];

      if (name === 'all') {
        // name이 'all'인 체크박스 선택 시, key가 'all'이 아닌 모든 key의 checked 상태를 변경
        Object.keys(newChecked).forEach(key => {
          key !== 'all' ? (newChecked[key] = newChecked[name]) : '';
        });
      } else {
        // 어느 name 체크박스건 false가 있을 시 'all' 체크박스의 checked 상태를 false로 변경
        if (!newChecked[name]) {
          newChecked.all = false;
        } else {
          // name이 'all' 아닌 체크박스가 모두 true일 시 'all' 체크박스의 checked 상태를 true로 변경
          const allChecked = Object.keys(newChecked).every(key =>
            key !== 'all' ? newChecked[key] : true,
          );

          if (allChecked) {
            newChecked.all = true;
          }
        }
      }

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
              id="all"
              checked={selectedOptions.all}
              onChange={() => handleSelectedOptionsChange('all')}
            />
          </li>
          <li>
            <CheckBox
              label="[필수] 이용약관 동의"
              id="termsOfUse"
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
              id="collection"
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
              id="consignment"
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
              id="advertising"
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
              id="night"
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
