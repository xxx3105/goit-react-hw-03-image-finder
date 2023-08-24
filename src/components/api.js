import axios from 'axios';

const apiKey = '38025411-600b4c6c49c6550b6dbadacb0';

export const fetchData = async (searchRequest, page) => {
  try {
    const index = searchRequest.indexOf('/');
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchRequest.slice(
        index + 1
      )}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const allDatas = response.data.hits;
    return allDatas.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    }));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
