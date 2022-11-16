import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getSearchResults = async (searchTerm) => {
        setErrorMessage('');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 10,
                    term: searchTerm,
                    location: 'london'
                }
            });
            setResults(response.data);
        }
        catch (error) {
            console.log(error);
            setErrorMessage('Something went wrong');
        }
    };

    return [ getSearchResults, results, errorMessage ];
};