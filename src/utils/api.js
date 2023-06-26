import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const getPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`)
  return response.data
}

export const getPostById = async id => {
  const response = await axios.get(`${API_BASE_URL}/posts/${id}`)
  return response.data
}

export const createPost = async post => {
  const response = await axios.post(`${API_BASE_URL}/posts`, post)
  return response.data
}

export const updatePost = async (id, post) => {
  const response = await axios.put(`${API_BASE_URL}/posts/${id}`, post)
  return response.data
}
