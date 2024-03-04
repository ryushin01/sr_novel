import { useState } from 'react';
import Modal from '@components/Modal/Modal';
import NoticeModal from '@components/Modal/components/NoticeModal';
import './Gateway.scss';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="gateway">
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title="SR NOVEL"
          content={<NoticeModal />}
        />
      )}
    </div>
  );
};

export default Main;
