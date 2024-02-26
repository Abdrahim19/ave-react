// apiService.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getBigRequests = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bigRequests`);
    return response.data;
  } catch (error) {
    console.error('Error fetching big requests:', error);
    throw error;
  }
};

export const getReviews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};


export const getAllPostes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};
