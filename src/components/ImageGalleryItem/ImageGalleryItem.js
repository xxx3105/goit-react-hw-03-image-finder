import React, { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
import Modal from 'react-modal';

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

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    document.body.style.overflow = '';
  };

  closerOfModal = event => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { imageKey, webformatURL, largeImageURL, tags } = this.props;

    return (
      <li>
        <GalleryItem
          key={imageKey}
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel={tags}
          onKeyDown={this.closerOfModal}
        >
          <img src={largeImageURL} alt={tags} onClick={this.closeModal} />
        </Modal>
      </li>
    );
  }
}
