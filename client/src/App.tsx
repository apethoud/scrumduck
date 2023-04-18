import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SiteHeader from './components/SiteHeader';
import MarketingPage from './components/MarketingPage';
import Login from './components/Login';
import SprintView from './components/SprintView';
import AppContainer from './components/AppContainer';
import NotFound from './components/NotFound';
import StoryView from './components/StoryView';

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
          },
          {
            path: "story/:storyId",
            element: <StoryView />
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
