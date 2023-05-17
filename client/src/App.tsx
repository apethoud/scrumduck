import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SiteHeader from './components/SiteHeader';
import MarketingPage from './routes/MarketingPage';
import Login from './routes/Login';
import SprintView from './routes/SprintView/SprintView';
import AppContainer from './routes/AppContainer';
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteHeader />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MarketingPage />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "app",
        element: <AppContainer />,
        children: [
          {
            path: "sprint/:sprintId",
            element: <SprintView />
          }
        ]
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
