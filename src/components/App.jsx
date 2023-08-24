import React, { Component } from 'react';
import { Layout, StyledVortex } from './Layout';
import 'modern-normalize';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Container } from 'styles/GlobalStyle';
import { Vortex } from 'react-loader-spinner';

const apiKey = '38025411-600b4c6c49c6550b6dbadacb0';

//axios.defaults.baseURL = `https://pixabay.com/api/?q=${searchRequest}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

export class App extends Component {
  state = {
    images: [],
    searchRequest: `${Date.now()}/`,
    page: 1,
    loading: false,
  };
  handleSearch = async searchRequest => {
    try {
      this.setState({ loading: true });

      if (this.state.searchRequest !== searchRequest || this.state.page !== 1) {
        const index = searchRequest.indexOf('/');
        const response = await axios.get(
          `https://pixabay.com/api/?q=${searchRequest.slice(
            index + 1
          )}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        );

        const allDatas = response.data.hits;
        console.log(allDatas);
        const imgUrls = allDatas.map(image => ({
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
          tags: image.tags,
        }));
        this.setState({ images: imgUrls, searchRequest, page: 2 });
      }

      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  handleLoadMore = async () => {
    try {
      const { searchRequest, page } = this.state;
      console.log('Current page:', page);
      const index = searchRequest.indexOf('/');
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchRequest.slice(
          index + 1
        )}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const newDatas = response.data.hits;
      const newImgUrls = newDatas.map(image => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
        tags: image.tags,
      }));
      this.setState(prevState => ({
        images: [...prevState.images, ...newImgUrls],
        page: parseInt(prevState.page) + 1,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { images, loading } = this.state;

    return (
      <Layout>
        <Container>
          <Searchbar onSearch={this.handleSearch} />

          {loading ? (
            <StyledVortex>
              <Vortex
                visible={true}
                height="180"
                width="180"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
              />
            </StyledVortex>
          ) : (
            <>
              <ImageGallery images={images} />
              {images.length > 0 && (
                <Button handleLoadMore={this.handleLoadMore} />
              )}
            </>
          )}
        </Container>
      </Layout>
    );
  }
}
