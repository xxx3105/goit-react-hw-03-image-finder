import React, { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
import { ModalStyled } from '../ModalStyled/ModalStyled';

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
        <ModalStyled
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel={tags}
          onKeyDown={this.closerOfModal}
          src={largeImageURL}
          alt={tags}
        />
      </li>
    );
  }
}
