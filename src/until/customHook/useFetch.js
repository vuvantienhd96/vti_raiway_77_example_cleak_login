import { useState, useEffect } from 'react';
import axios from 'axios';

// writing common funtion call or fetch api

const useFetchApi = (url) => {
  const [dataCommon, setDataCommon] = useState(null);

  useEffect(() => {
    return () => axios.get(url).then((res) => setDataCommon(res));
  }, [url]);

  return dataCommon;
};

export default useFetchApi;
