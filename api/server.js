import axios from 'axios';

export const api = axios.create({
	baseURL:
		'https://s3.us-east-2.amazonaws.com/bunkiebooker.bucket/chunks/data/data.json',
});

export const getPosts = async () => {
	const requestURL =
		'https://s3.us-east-2.amazonaws.com/bunkiebooker.bucket/chunks/data/data.json';

	const response = axios
		.get(requestURL)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error('Error fetching data: ', error);
		});

	return response.data;
};
