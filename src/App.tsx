import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import dataTablePreview from './pages/data-table-preview/data-table-preview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={dataTablePreview} path="/data-table" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
