import axios from 'axios';
const POST_API = 'http://localhost:3001/api';

export function getPosts() {
  return axios.get(`${POST_API}/posts`);
}

export function getPost(id) {
  return axios.get(`${POST_API}/posts/${id}`);
}

export function deletePost(id) {
  return axios.delete(`${POST_API}/posts/${id}`);
}

export function putPost(data) {
  const newPost = {
    title: data.title,
    description: data.description,
    picture: data.picture,
    order: data.order,
  };
  return axios.put(`${POST_API}/posts/${id}`, newPost);
}

export function patchPost(data) {
  return axios.patch(`${POST_API}/posts/${id}`, data);
}