import { Link } from 'react-router-dom';


import "./index.css";

export default function IndexPage() {
  return (
    <div className='body_temp font-mono'>
      <h1 className='text-center p-4 text-lg'>Welcome to homepage VTI</h1>
      <div>
        <ul className='text-right align-baseline p-3 flex flex-nowrap fade-in-2'>
          <li className='m-3'>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li className='m-3'>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li className='m-3'>
            <Link to="/admin">Admin Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
