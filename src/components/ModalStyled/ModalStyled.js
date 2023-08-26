import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.3s ease-in-out',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'opacity 0.3s ease-in-out',
  },
};

export const ModalStyled = ({
  isOpen,
  onRequestClose,
  contentLabel,
  onKeyDown,
  src,
  alt,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={contentLabel}
      onKeyDown={onKeyDown}
    >
      <img src={src} alt={alt} />
    </Modal>
  );
};
