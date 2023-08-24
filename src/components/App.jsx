import React, { Component } from 'react';
import { Layout, StyledVortex } from './Layout';
import 'modern-normalize';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Container } from 'styles/GlobalStyle';
import { Vortex } from 'react-loader-spinner';
import { fetchData } from './api';

//const apiKey = '38025411-600b4c6c49c6550b6dbadacb0';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchRequest: `${Date.now()}/`,
      page: 1,
      loading: false,
    };
  }

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
        images: page === 1 ? imgUrls : [...prevState.images, ...imgUrls],
        loading: false,
      }));
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  handleSearch = searchText => {
    const searchRequest = `${Date.now()}/${searchText}`;
    this.setState({ searchRequest, page: 1 });
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
            <StyledVortex>
              <Vortex
                visible={true}
                height="180"
                width="180"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['grau', 'silver', 'grau', 'silver', 'grau', 'silver']}
              />
            </StyledVortex>
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

// import React, { Component } from 'react';
// import { Layout, StyledVortex } from './Layout';
// import 'modern-normalize';
// import axios from 'axios';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
// import { Container } from 'styles/GlobalStyle';
// import { Vortex } from 'react-loader-spinner';

// const apiKey = '38025411-600b4c6c49c6550b6dbadacb0';

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [],
//       searchRequest: `${Date.now()}/`,
//       page: 1,
//       loading: false,
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.searchRequest !== this.state.searchRequest ||
//       prevState.page !== this.state.page
//     ) {
//       this.fetchData();
//     }
//   }

//   fetchData = async () => {
//     try {
//       const { searchRequest, page } = this.state;
//       this.setState({ loading: true });

//       const index = searchRequest.indexOf('/');
//       const response = await axios.get(
//         `https://pixabay.com/api/?q=${searchRequest.slice(
//           index + 1
//         )}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
//       );

//       const allDatas = response.data.hits;
//       const imgUrls = allDatas.map(image => ({
//         id: image.id,
//         webformatURL: image.webformatURL,
//         largeImageURL: image.largeImageURL,
//         tags: image.tags,
//       }));

//       this.setState(prevState => ({
//         images: page === 1 ? imgUrls : [...prevState.images, ...imgUrls],
//         loading: false,
//       }));
//     } catch (error) {
//       console.log(error);
//       this.setState({ loading: false });
//     }
//   };

//   handleSearch = searchText => {
//     const searchRequest = `${Date.now()}/${searchText}`;
//     this.setState({ searchRequest, page: 1 });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { images, loading } = this.state;

//     return (
//       <Layout>
//         <Container>
//           <Searchbar onSearch={this.handleSearch} />

//           {loading ? (
//             <StyledVortex>
//               <Vortex
//                 visible={true}
//                 height="180"
//                 width="180"
//                 ariaLabel="vortex-loading"
//                 wrapperStyle={{}}
//                 wrapperClass="vortex-wrapper"
//                 colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
//               />
//             </StyledVortex>
//           ) : (
//             <>
//               <ImageGallery images={images} />
//               {images.length > 0 && (
//                 <Button handleLoadMore={this.handleLoadMore} />
//               )}
//             </>
//           )}
//         </Container>
//       </Layout>
//     );
//   }
// }
