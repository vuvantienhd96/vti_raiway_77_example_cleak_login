import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import FormUserComponent from './components/formUser';
import DetailUser from './components/DetailUser';
import HomePage from './components/HomePage';

// import custom component
import DemoComponenthook from './components/DemoComponenthook';

// import config store from redux
import { Provider } from 'react-redux';
import store from './store/store.js';

// Import the layouts
import RootLayout from './routes/RootLayout';
import IndexPage from './routes/index';
import SignInPage from './auth/SignIn';
import SignUpPage from './auth/SignUp';
import DashboardLayout from './routes/dashboard-layout';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: 'admin',
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/admin',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: '/admin/homepage',
                element: <HomePage />,
              },
              {
                path: '/admin/userList',
                element: <App />,
              },
              {
                path: '/admin/userList/editUser/:id',
                element: <FormUserComponent />,
              },
              {
                path: 'admin/addUser',
                element: <FormUserComponent />,
              },
              {
                path: 'admin/testTaiwind',
                element: <DetailUser />,
              },
              {
                path: 'admin/customHook',
                element: <DemoComponenthook />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

// multi context
export const ThemeContext = createContext(null);
export const TitleContext = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
