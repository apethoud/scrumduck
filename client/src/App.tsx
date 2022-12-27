import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import MarketingPage from './components/MarketingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteHeader />}>
          <Route index element={<MarketingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
