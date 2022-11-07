import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../redux/slices/utilsSlice';
import axios from 'axios';

/*
  Custom hook for performing GET API request
*/
const useFetch = (url, method = 'GET', body) => {
  const [apiData, setApiData] = useState({});
  const [serverError, setServerError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(true));

    const fetchData = async () => {
      try {
        const response = await axios({
          method,
          url,
          data: body,
        });
        const data = await response?.data;
        setApiData(data);
        dispatch(setIsLoading(false));
      } catch (error) {
        setServerError(error);
        dispatch(setIsLoading(false));
      }
    };

    setTimeout(fetchData, 1000);
  }, [url, method, body]);

  return { apiData, serverError };
};
export default useFetch;
