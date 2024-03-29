import { EMAIL_SELECT_DATA } from '@data/ConstantData';
import { RADIO_DATA } from '@data/ConstantData';

import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import SelectBox from '@components/SelectBox/SelectBox';
import RadioGroup from '@components/RadioGroup/RadioGroup';

const UserInfo = ({ setSignUpInputData, setSignUpData }) => {
  const handleRadioChange = e => {
    if (e.target.checked) {
      setSignUpData(prev => ({
        ...prev,
        gender: e.target.value,
      }));
      return { ...RADIO_DATA, checked: true };
    } else {
      return { ...RADIO_DATA, checked: false };
    }
  };

  const handleSelectChange = e => {
    setSignUpData(prev => ({
      ...prev,
      email: e.target.value,
    }));
  };

  return (
    <section className="sign-up-user-info-form-section">
      <h2 className="sign-up-user-info-form-title">회원정보</h2>
      <div className="sign-up-user-info-wrap">
        <div className="sign-up-id-wrap">
          <Input
            type="text"
            contents="아이디(이메일)"
            placeholder="아이디"
            purpose="sign-up"
            size="small"
            name="id"
            onChange={setSignUpInputData}
            require
          />

          <span> @ </span>

          <SelectBox data={EMAIL_SELECT_DATA} onChange={handleSelectChange} />

          <Button
            type="button"
            content="중복확인"
            color="primary"
            size="small"
          />
        </div>

        <div className="sign-up-password-wrap">
          <Input
            type="password"
            contents="비밀번호"
            placeholder="비밀번호"
            purpose="sign-up"
            size="small"
            name="password"
            onChange={setSignUpInputData}
            require
          />
          <span>영문,숫자,특수문자(@#$%^&*) 혼합하여 8자리 이상</span>
        </div>

        <Input
          type="password"
          contents="비밀번호 확인"
          placeholder="비밀번호 확인"
          purpose="sign-up"
          size="small"
          name="passwordCheck"
          onChange={setSignUpInputData}
          require
        />

        <div className="sign-up-name-wrap">
          <div className="sign-up-name-inner-wrap">
            <Input
              type="text"
              contents="닉네임"
              placeholder="닉네임"
              purpose="sign-up"
              size="small"
              name="nickname"
              onChange={setSignUpInputData}
              require
            />
            <Button
              type="button"
              content="중복확인"
              color="primary"
              size="small"
            />
          </div>
          <span>영문, 한글, 숫자 2~10자리</span>
        </div>

        <div className="sign-up-birth-wrap">
          <Input
            type="text"
            contents="생년월일"
            placeholder="생년월일"
            purpose="sign-up"
            size="small"
            name="birth"
            onChange={setSignUpInputData}
            require
          />
          <span>생년월일 숫자 8자리 (ex: 19840326)</span>
        </div>

        <div className="sign-up-radio-wrap">
          <span className={`radio-text require`}>성별</span>
          <RadioGroup data={RADIO_DATA} onChange={handleRadioChange} />
        </div>

        <div className="sign-up-event-wrap">
          <Input
            type="text"
            contents="프로모션코드"
            placeholder="프로모션코드(선택)"
            purpose="sign-up"
            size="small"
            name="code"
            onChange={setSignUpInputData}
          />
          <span>제휴 이벤트 쿠폰번호는 가입 후 마이페이지에서 등록 가능</span>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
