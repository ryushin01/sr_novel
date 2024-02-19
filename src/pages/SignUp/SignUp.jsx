import Input from '@components/Input/Input';
import SelectBox from '@components/SelectBox/SelectBox';
import Button from '@components/Button/Button';
import {EMAIL_SELECT_DATA} from '@data/ConstantData';
import './SignUp.scss';

const SignUp = () => {
  return (
    <main className='sign-up-container'>
      <div className="sign-up-inner-wrap">
        <section className='sign-up-form-section'>
            <form>
                <fieldset>
                    <legend>회원가입</legend>
                        <h2 className='sign-up-form-title'>회원정보</h2>
                        <div className='sign-up-form-wrap'>

                         <div className="sign-up-id-wrap">
                            <Input type='text' contents='아이디(이메일)' placeholder='아이디' purpose="sign-up" size="small" require/>

                            <span> @ </span>

                            <SelectBox data={EMAIL_SELECT_DATA}/>
                        
                            <Button type='button' content='중복확인' color="primary" size="small"/>
                        </div>   

                        <div className='sign-up-password-wrap'>
                          <Input type='password' contents='비밀번호' placeholder='비밀번호' purpose="sign-up" size="small" require/>
                          <span>영문,숫자,특수문자(@#$%^&*) 혼합하여 8자리 이상</span>
                        </div>

                        <Input type='password' contents='비밀번호 확인' placeholder='비밀번호 확인' purpose="sign-up" size="small" require/>

                        <div className='sign-up-name-wrap'>
                          <Input type='text' contents='닉네임' placeholder='닉네임' purpose="sign-up" size="small" require/>
                          <span>영문, 한글, 숫자 2~10자리</span>
                        </div>

                        <div className='sign-up-birth-wrap'>
                        <Input type='text' contents='생년월일' placeholder='생년월일' purpose="sign-up" size="small" require/>
                        <span>생년월일 숫자 8자리 (ex: 19840326)</span>
                        </div>
                        
                        <input type='radio' ></input>

                        <div className='sign-up-event-wrap'>
                        <Input type='text' contents='프로모션코드'
                          placeholder='프로모션코드(선택)' purpose="sign-up" size="small"/>
                        <span>제휴 이벤트 쿠폰번호는 가입 후 마이페이지에서 등록 가능</span>
                        </div>
                        </div>
                </fieldset>
            </form>
        </section>
        <section>

        </section>
      </div>
    </main>
  )
}

export default SignUp
