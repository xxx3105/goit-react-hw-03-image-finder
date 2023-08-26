import React, { Component } from 'react';
import { Layout } from './Layout';
import 'modern-normalize';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Container } from 'styles/GlobalStyle';
import { fetchData } from './api';
import { LoaderComp } from './Loader/LoaderComp';

//const apiKey = '38025411-600b4c6c49c6550b6dbadacb0';

export class App extends Component {
  state = {
    images: [],
    searchRequest: `${Date.now()}/`,
    page: 1,
    loading: false,
  };

  // componentDidMount() {
  //   this.fetchData();
  // }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchRequest !== this.state.searchRequest ||
      prevState.page !== this.state.page
    ) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { searchRequest, page } = this.state;
    try {
      this.setState({ loading: true });

      const imgUrls = await fetchData(searchRequest, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...imgUrls],
        loading: false,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = searchText => {
    const searchRequest = `${Date.now()}/${searchText}`;
    this.setState({ searchRequest, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading } = this.state;
    const hasImages = images.length > 0;
    const shouldDisplayLoadMore = hasImages && !loading && images.length >= 12;

    return (
      <Layout>
        <Container>
          <Searchbar onSearch={this.handleSearch} />

          {loading ? (
            <LoaderComp />
          ) : (
            <>
              <ImageGallery images={images} />
              {shouldDisplayLoadMore && (
                <Button handleLoadMore={this.handleLoadMore} />
              )}
            </>
          )}
        </Container>
      </Layout>
    );
  }
}
