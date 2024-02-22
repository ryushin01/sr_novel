import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useInput } from '@customHooks/useInput';
import { RegExp } from '@/RegExp';
import { API } from '@/config';
import CheckBox from '@components/CheckBox/CheckBox';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import axios from 'axios';
import './LoginModal.scss';

const LoginModal = ({ isModalOpen, setIsModalOpen }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);
  const [loginData, handleChangeValue] = useInput({
    id: '',
    password: '',
  });
  const compareId = RegExp.ID.test(loginData.id);
  const comparePassword = RegExp.PASSWORD.test(loginData.password);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      handleChangeValue({ ...loginData, id: cookies.rememberUserId });
      setIsChecked(true);
    }
  }, []);

  const handleCheckedToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleLoginInfo = async () => {
    const params = loginData;

    if (!compareId) {
      alert('아이디의 형식이 올바르지 않습니다. 이메일 형식으로 입력해주세요.');
    } else if (!comparePassword) {
      alert(
        '비밀번호는 특수문자와 영문자, 숫자를 포함한 8자 이상으로 입력해주세요.',
      );
    }

    try {
      const response = await axios.post(`${API.DATA}/LoginData.json`, params);

      if (isChecked) {
        removeCookie('rememberUserId');
        setCookie('rememberUserId', loginData.id);
      } else {
        removeCookie('rememberUserId');
      }

      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.access_token);
        setIsModalOpen(!isModalOpen);
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert('아이디를 확인해주세요.');
      } else if (error.response.status === 401) {
        alert('비밀번호를 확인해주세요.');
      }
    }
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    handleLoginInfo();
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <fieldset className="login-modal-container">
        <legend>Login</legend>
        <div className="login-modal-input-wrap">
          <Input
            type="text"
            placeholder="아이디 (이메일)"
            shape="border"
            contents="아이디"
            purpose="login"
            name="id"
            value={loginData.id}
            onChange={handleChangeValue}
          />
          <Input
            type="password"
            placeholder="비밀번호 (특수문자, 영문자 포함 8자 이상)"
            shape="border"
            contents="비밀번호"
            purpose="login"
            name="password"
            value={loginData.password}
            onChange={handleChangeValue}
          />
        </div>
        <div className="login-modal-check-box-wrap">
          <CheckBox
            label="아이디 저장"
            id="id-save"
            onChange={handleCheckedToggle}
            checked={isChecked}
            size="small"
          />
        </div>
        <div className="login-modal-btn-wrap">
          <Button
            type="submit"
            content="로그인"
            color="primary"
            size="large"
            onClick={handleLoginSubmit}
          />
        </div>
        <div className="login-modal-link-wrap">
          <button
            type="button"
            onClick={() => {
              setIsModalOpen(false);
              navigate('/signup');
            }}
          >
            회원가입
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginModal;
