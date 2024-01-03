import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

// useId, useState, useRef

// uncontrolled component
const FormUserComponent = () => {
  // get param from url browser
  let { id } = useParams();
  const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/userInfo';

  // dependency -- Phu thuoc
  useEffect(() => {
    if (id) {
      const detailItem = axios
        .get(api + `/${id}`)
        .then((res) => {
          nameRef.current.value = res.data.name;
          addressRef.current.value = res.data.address;
          ageRef.current.value = res.data.age;
          infoRef.current.value = res.data.info;
        })
        .catch((err) => console.log(err, 'err'));
    }
  }, []);

  // useRef = use referent
  const nameRef = useRef('');
  const addressRef = useRef('');
  const ageRef = useRef('');
  const infoRef = useRef('');
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const validateItem = () => {
    //b1 get value from form
    const newObj = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      address: addressRef.current.value,
      info: infoRef.current.value,
    };
    //b2 validate
    const { name, age, address, info } = newObj;
    if (name.trim() === '' || !age || address.trim() === '') {
      // nếu như name nhập vao là không có gì, hoặc chưa tồn tại age, hoặc address chưa được nhâp
      setErr({
        des: 'Dữ liệu không được để trống, vui lòng kiểm tra lại',
      });
      // stop fruntion
      return false;
    }

    return newObj;
  };
  // edit and add
  const addNewItem = () => {
    // valdate item
    const newObj = validateItem();
    if (!newObj) {
      return;
    }
    // update index
    axios
      .post(api, newObj)
      .then((res) => {
        navigate('/userlist');
      })
      .catch((err) => {
        console.log(err);
        alert('da co loi xay ra !');
      });
  };

  const editItem = () => {
    // valdate item
    const newObj = validateItem();
    if (!newObj) {
      return;
    }
    // update index
    axios
      .put(api + `/${id}`, newObj)
      .then((res) => {
        navigate('/userlist');
      })
      .catch((err) => {
        console.log(err);
        alert('da co loi xay ra !');
      });
  };

  const resetForm = () => {
    nameRef.current.value = '';
    ageRef.current.value = '';
    addressRef.current.value = '';
    setErr(null);
  };

  return (
    <>
      <h2>{id ? 'Edit item User' : 'Add item user'}</h2>
      <div className="w-80 mt-5">
        <div className="flex justify-between">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            name
          </label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div className="w-80 mt-5">
        <div className="flex justify-between">
          <label htmlFor="age" className="form-label">
            age
          </label>
          <input
            ref={ageRef}
            type="number"
            className="form-control"
            id="age"
            placeholder="0978899xxx"
          />
        </div>
      </div>
      <div className="w-80 mt-5">
        <div className="flex justify-between">
          <label htmlFor="address" className="form-label">
            address
          </label>
          <textarea
            ref={addressRef}
            className="form-control"
            id="address"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="w-80 mt-5">
        <div className="flex justify-between">
          <label htmlFor="info" className="form-label">
            info
          </label>
          <textarea
            ref={infoRef}
            className="form-control"
            id="info"
            rows="3"
          ></textarea>
        </div>
      </div>
      {!id && (
        <button type="button" onClick={addNewItem} className="btn btn-primary">
          add new item
        </button>
      )}

      {id && (
        <button
          type="button"
          onClick={editItem}
          className="btn btn-primary ms-2"
        >
          Edit
        </button>
      )}

      <button
        type="button"
        onClick={resetForm}
        className="btn btn-primary ms-2"
      >
        reset
      </button>
      <Link to="/userlist">
        <button type="button" className="btn btn-primary ms-2">
          Cancel
        </button>
      </Link>
      {err?.des && (
        <div className="alert alert-danger mt-2" role="alert">
          {err.des}
        </div>
      )}
    </>
  );
};

export default FormUserComponent;
