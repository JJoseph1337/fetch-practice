const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";

const getData = (url: string) => async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getPhotos = () => console.log("photos");

export const mockService = {
  getPosts: getData(POSTS_URL),
  getUsers: getData(USERS_URL),
  getPhotos,
};
