import { useState } from 'react';
import { useInput } from '@customHooks/useInput';
import { RegExp } from '@/RegExp';
import UserInfo from './UserInfo';
import TermsOfUse from './TermsOfUse';
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

  const combineSignUpData = {
    ...signUpInputData,
    ...signUpData,
    email: `${signUpInputData.id}@${signUpData.email}`,
  };

  // const comparePassword = RegExp.PASSWORD.test(signUpInputData.password);
  // const comparePwCheck =
  //   signUpInputData.password === signUpInputData.passwordCheck;
  // const compareName = RegExp.NAME.test(signUpInputData.nickname);
  // const compareBirth = RegExp.birth.test(signUpInputData.birth);

  console.log(combineSignUpData);

  return (
    <form className="sign-up-form">
      <fieldset>
        <legend>회원가입</legend>
        <UserInfo
          setSignUpInputData={setSignUpInputData}
          setSignUpData={setSignUpData}
        />
        <TermsOfUse />
        <FooterBtn />
      </fieldset>
    </form>
  );
};

export default SignUpForm;
