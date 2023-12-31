import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:42069/api',
});

export const getPosts = async () => {
	const response = await api.get('/getChunks');
	return response.data;
};

export const getProducts = async () => {
	const response = await api.get('/store/getProducts');
	return response.data;
};
