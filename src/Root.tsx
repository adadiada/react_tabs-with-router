import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Homepage } from './components/Home';
import { Tabspage } from './components/Tabs';
// import { Navigate } from 'react-router-dom';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="tabs">
          <Route index element={<Tabspage />} />
          <Route path=":tabId" element={<Tabspage />} />
          {/* <Route path="/home" element={<Navigate to="/" replace />} /> */}
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
