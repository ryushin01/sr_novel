import UserInfo from './UserInfo';
import TermsOfUse from './TermsOfUse';
import FooterBtn from './FooterBtn';

const SignUpForm = () => {
  return (
    <form className="sign-up-form">
      <fieldset>
        <legend>회원가입</legend>
        <UserInfo />
        <TermsOfUse />
        <FooterBtn />
      </fieldset>
    </form>
  );
};

export default SignUpForm;
