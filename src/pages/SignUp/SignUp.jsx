import SignUpForm from './components/SignUpForm';

import './SignUp.scss';

const SignUp = () => {
  return (
    <main className="sign-up-container">
      <div className="sign-up-inner-wrap">
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUp;
