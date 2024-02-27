// apiService.ts
import axios from 'axios';
import { ProfileCardProps } from '../types/Types';

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

export const getFavorisUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/favorisUsers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getAllUserOfferCard = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/UserOfferCard`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get<ProfileCardProps[]>(`${BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const postUserData = async (email: string, password: string): Promise<void> => {
  const apiUrl = `${BASE_URL}/users`; // Replace with your actual API endpoint

  try {
    const response = await axios.post(apiUrl, {
      email,
      password,
    });

    // You can handle success here if needed
    console.log('Data submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error;
  }
};