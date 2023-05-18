import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import Convert from '../../pages/Convert/Convert';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/convert" element={<Convert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
