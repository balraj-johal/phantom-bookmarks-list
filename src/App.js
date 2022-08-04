import './styles/App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from './components/Overview';
import Success from './components/Success';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container" data-testid="App">
        <Router>
          <Routes>
            <Route path="/">
              <Route path="" element={<Overview />} />
              <Route path=":pageNumber" element={<Overview />} />
            </Route>
            <Route path="/link-saved/:linkID" element={<Success />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
