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

// chartjs import
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const dataChart = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


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

      <Pie data={dataChart} />;
    </>
  );
};

export default HomePage;
