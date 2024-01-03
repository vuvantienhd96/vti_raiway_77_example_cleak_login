import { useContext } from 'react';
import { TitleContext } from '../main';

const WithOutContext = () => {
  const title = useContext(TitleContext);
  return <> {title} </>;
};

export default WithOutContext;
