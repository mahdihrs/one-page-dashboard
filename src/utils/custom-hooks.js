import * as React from 'react';
import axios from 'axios';
import api from './api';

export default function useFetch() {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const res = await api.get('/', {
          cancelToken: source.token
        });

        const data = res?.data.data;

        setLoading(false);
        setResponse(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return {
    response,
    loading,
    error
  };
}