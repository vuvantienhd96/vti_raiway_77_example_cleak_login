import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import RenderArrayObject from './components/renderArrayObj';
import FormUserComponent from './components/formUser';

// axios call api
import axios from 'axios';

// controller component
function App() {
  // api end poin
  const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/userInfo';
  const [objInfo, setObjInfo] = useState([]);

  const callApi = () => {
    setLoading(true);
    // promise
    // const result = fetch(api)
    //   .then((response) => response.json()) // pass to json
    //   .then((json) => {
    //     // set data
    //     setObjInfo(json);
    //     console.log(json);
    //   })
    //   .catch((err) => console.log(err, 'err'))
    //   .finally(() => {
    //     setLoading(false);
    //   });
    // call api with axios
    const resultAxios = axios
      .get(api)
      .then((response) => {
        console.log('res', response);
        setObjInfo(response.data);
      })
      .catch((err) => console.log(err, 'err'))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    //callApi();
    return () => callApi();
  }, []);

  const [isloading, setLoading] = useState(false);

  // remove item user
  const onRemove = (itemDetail, index) => {
    axios
      .delete(`${api}/${itemDetail.id}`)
      .then((el) => {
        alert('ban da xoa ban ghi thanh cong !');
        // delete success
        // recall api
        callApi();
      })
      .catch((err) => {
        alert('da co loi xay ra ' + err);
      })
      .finally(() => {
        // always executed
        console.log('finally');
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <RenderArrayObject
              result={objInfo}
              onDelete={onRemove}
              isloading={isloading}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
