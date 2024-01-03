function Header(props) {
  console.log(props, 'props');
  //{
  //     "propChildName": "simpleLove",
  //     "propChildAge": 18,
  //     "address": "badinh hanoi"
  // }
  return (
    // jsx
    // babel tranform jsx  => javascript
    <>
      Danh sach component header
      <ul>
        <li>{props.propChildName}</li>
        <li>{props.propChildAge}</li>
        <li>{props.address}</li>
      </ul>
    </>
  );
}

export default Header;
