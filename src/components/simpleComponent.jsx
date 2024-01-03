import { useState } from 'react';

export const SimpleComponent = ({ namePr, bana }) => {
  return (
    <div>
      {namePr} = {bana}
    </div>
  );
};

// hook useState
const styleCss = { border: '1px solid green' };

export const SimpleComponent2 = ({ infoUser, getValueFromChild, age1 }) => {
  // update trang thai
  const [nameTitle, setNameTitle] = useState(infoUser.title);
  const updateTitle = () => {
    setNameTitle('title changed !');
  };
  return (
    <div style={styleCss}>
      <p>title: {nameTitle}</p>
      <p>id: {infoUser.id}</p>
      <p>age: {age1}</p>
      <input
        onChange={(e) => {
          getValueFromChild(e.target.value);
        }}
      />
      <button type="button" onClick={updateTitle} className="btn btn-primary">
        update title
      </button>
    </div>
  );
};

// prop là môt property object {key: value}
let car = 'oto';
const objTest = {
  car,
};

console.log(objTest.car); //  oto
