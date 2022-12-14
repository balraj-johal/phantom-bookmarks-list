import './styles/App.css';

import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Overview from './components/Overview';
import Success from './components/Success';
import Header from './components/Header';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Overview />} />
          <Route path="page/:pageNumber" element={<Overview />} />
          <Route path="link-saved/:linkID" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function Layout(props) {
  return(
    <>
    <BackgroundCanvas />
      <Header text="Bookmarks" />
      <div className="container" data-testid="App">
        <Outlet />
      </div>
    </>
  )
}

export default App;
