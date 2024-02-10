import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-wrap">
        <div>
          <ul className="footer-link-list">
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
            <li>고객센터</li>
            <li>회사소개</li>
          </ul>
        </div>
        <h1>SR NOVEL</h1>
        <div>
          <ul className="company-info-list">
            <li>주식회사 SR</li>
            <li>
              <address>서울특별시 종로구</address>
            </li>
            <li>대표 박요진</li>
            <li>TEL. 02-000-0000</li>
            <li>사업자등록번호 000-00-00000</li>
            <li>통신판매업신고 제 2024-서울종로-0000 호</li>
          </ul>

          <span className="copyright">
            COPYRIGHT ⓒ SR. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
