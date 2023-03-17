import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import MarketingPage from './components/MarketingPage';
import Login from './components/Login';
import SprintView from './components/SprintView';
import AppContainer from './components/AppContainer';
import NotFound from './components/NotFound';
import StoryView from './components/StoryView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteHeader />}>
          <Route index element={<MarketingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppContainer />}>
            <Route path="sprint/:sprintId" element={<SprintView />} />
            <Route path="story/:storyId" element={<StoryView />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
