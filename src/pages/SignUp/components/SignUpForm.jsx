import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInput } from '@customHooks/useInput';
import { RegExp } from '@/RegExp';

import axios from 'axios';
import { API } from '@/config';

import TermsOfUseForm from './TermsOfUseForm';
import UserInfo from './UserInfo';
import FooterBtn from './FooterBtn';

const SignUpForm = () => {
  const [signUpInputData, setSignUpInputData] = useInput({
    id: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    birth: '',
    code: '',
  });

  const [signUpData, setSignUpData] = useState({
    email: 'naver.com',
    gender: '',
  });

  const [selectedOptions, setSelectedOptions] = useState({
    all: false,
    termsOfUse: false,
    collection: false,
    consignment: false,
    advertising: false,
    night: false,
  });

  const combineSignUpData = {
    ...signUpInputData,
    ...signUpData,
    ...selectedOptions,
    email: `${signUpInputData.id}@${signUpData.email}`,
  };

  const navigate = useNavigate();
  const compareId = RegExp.ID.test(combineSignUpData.email);
  const comparePassword = RegExp.PASSWORD.test(combineSignUpData.password);
  const comparePwCheck =
    combineSignUpData.password === combineSignUpData.passwordCheck;
  const compareName = RegExp.NAME.test(combineSignUpData.nickname);
  const compareBirth = RegExp.birth.test(combineSignUpData.birth);
  const compareGender = combineSignUpData.gender !== '';
  const compareCheckBox = Object.keys(selectedOptions).every(
    key =>
      selectedOptions.termsOfUse &&
      selectedOptions.collection &&
      selectedOptions.consignment,
  );
  const postSignUpData = async () => {
    if (!compareId) {
      alert('아이디의 형식이 올바르지 않습니다. 이메일 형식으로 입력해주세요.');
    } else if (!comparePassword) {
      alert(
        '비밀번호는 특수문자와 영문자, 숫자를 포함한 8자 이상으로 입력해주세요.',
      );
    } else if (!comparePwCheck) {
      alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
    } else if (!compareName) {
      alert('닉네임은 2자 이상 10자 이하로 입력해주세요.');
    } else if (!compareBirth) {
      alert('생년월일을 정확히 입력해주세요.');
    } else if (!compareGender) {
      alert('성별을 선택해주세요.');
    } else if (!compareCheckBox) {
      alert('필수 약관에 동의해주세요.');
    } else {
      try {
        const response = await axios.post(
          `${API.DATA}/SignUpData.json`,
          combineSignUpData,
        );

        if (response.status === 200) {
          alert('회원가입이 완료되었습니다.');
          navigate('/');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const SignUpDataSubmit = e => {
    e.preventDefault();
    postSignUpData();
  };

  return (
    <form className="sign-up-form" onSubmit={SignUpDataSubmit}>
      <fieldset>
        <legend>회원가입</legend>
        <UserInfo
          setSignUpInputData={setSignUpInputData}
          setSignUpData={setSignUpData}
        />
        <TermsOfUseForm
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <FooterBtn onClick={SignUpDataSubmit} />
      </fieldset>
    </form>
  );
};

export default SignUpForm;
