import { useNavigate } from 'react-router-dom';
import Button from '@components/Button/Button';
import './NoticeModal.scss';

const NoticeModal = () => {
  const navigate = useNavigate();

  return (
    <section className="notice-modal-section">
      <div className="text-area">
        <h3>공지</h3>
        <p>
          안녕하세요. 이 프로젝트는 백엔드 개발자 없이 개발되어 현재{' '}
          <span>CORS 이슈를 프록시 서버 구축으로 해결 중</span>에 있습니다.
        </p>
        <p>
          번거롭게 해드려 죄송합니다만, 아래{' '}
          <kbd className="primary">좌측 버튼</kbd>을 눌러 페이지 이동 후{' '}
          <kbd className="grayscale">
            Request temporary access to the demo server
          </kbd>{' '}
          버튼을 클릭하신 이후 다시 돌아와{' '}
          <kbd className="secondary">우측 버튼</kbd>을 눌러 입장해 주시면
          감사하겠습니다.
        </p>
      </div>
      <div className="btn-group">
        <a
          href="https://cors-anywhere.herokuapp.com/corsdemo"
          target="_blank"
          rel="noopener noreferrer"
        >
          서버 활성화
        </a>
        <Button
          size="large"
          color="secondary"
          content="프로젝트 입장"
          onClick={() => navigate('/main')}
        />
      </div>
    </section>
  );
};

export default NoticeModal;
