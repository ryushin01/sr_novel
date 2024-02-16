import { useEffect, useRef } from 'react';
import IconButton from '@components/IconButton/IconButton';
import './Modal.scss';

const Modal = ({ isModalOpen, setIsModalOpen, title, content }) => {
  const ref = useRef();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const close = e => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', close);

    return () => {
      window.removeEventListener('keydown', close);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isModalOpen])

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <section className="modal-container">
          <div className="modal-outer-wrap" />
          <div className="modal-box-container" ref={ref}>
            <IconButton shape="close" onClick={handleModalToggle} />
            <div className="modal-header" />
            <h2 className="modal-title">{title}</h2>
            <div className="modal-wrap-inner">{content}</div>
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;
