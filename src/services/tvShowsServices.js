/**
 * /* eslint-disable
 *
 * @format
 */

import axios from 'axios';

export default {
	// Service for API calls
	getRequestDetails(URL) {
		const res = axios({
			url: URL,
			method: 'get'			
		})
			.then((response) => {										
				return response;
			})			
			.catch((error)=> {				
				return error
			})
		return res;
	},		
};