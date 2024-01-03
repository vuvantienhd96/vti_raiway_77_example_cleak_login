import { useContext, useRef, useState, useEffect } from 'react';
import { ThemeContext } from './../main';

import { useSelector, useDispatch } from 'react-redux';
import Button from 'antd/es/button';
import {
  changeState,
  changeTextWithIp,
  changeTextWithMultiValue,
} from '../reducer/titleReducer';

import { fetchUserById } from '../reducer/callApiReducer';

const HomePage = () => {
  const themeContext = useContext(ThemeContext);
  // use redux

  const dispath = useDispatch();
  const initStateRedux = useSelector((state) => state.counterSlice);

  const initStateReduxTitle = useSelector((state) => state.titleReducer);
  const textRef = useRef('');

  const updateStatusTxt = () => {
    const value = textRef.current.value;
    dispath(changeTextWithIp(value));
  };

  // update call api with redux
  const [data, setData] = useState(true);

  const dataRedux = useSelector((state) => state.RecallApiLoading);

  useEffect(() => {
    if (data) {
      dispath(fetchUserById());
    }
  }, [data]);

  const multiParams = (name, description) => {
    dispath(
      changeTextWithMultiValue({
        name,
        description,
      })
    );
  };

  return (
    <>
      ============ context
      <div>{themeContext.theme ? 'homepage' : themeContext.title}</div>
      ============ redux
      <h3>count: {initStateRedux.value}</h3>
      <div>title: {initStateReduxTitle.title}</div>
      <input type="text" ref={textRef} />
      <Button onClick={() => updateStatusTxt()}>change title</Button>
      <Button onClick={() => multiParams('john', 'text sum')}>
        update multi value
      </Button>
      init state multi: {initStateReduxTitle.title}:{' '}
      {initStateReduxTitle.description}
      ==========
      {console.log(dataRedux.responApi, 'table here')}
    </>
  );
};

export default HomePage;
