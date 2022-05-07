import {
    useState,
    useEffect
} from 'react';
import API_KEY from '../keys';
import resultsJson from '../../assets/searchResults.json';

const CONTEXT_KEY = "9ec571f86697d07ac";

const useGoogleSearchApi = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataPromise = async () => {
            if (term && term.length) {
                fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                    .then(response => response.json())
                    .then(result => {
                        if (result?.error?.code === 429) {
                            setData(resultsJson);
                        } else {
                            setData(result);
                        }
                    })
                    .catch(error => console.log(error));
            }

        };

        fetchDataPromise().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term]);

    return {
        data
    };
};

export default useGoogleSearchApi;
