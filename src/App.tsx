import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import dataTablePreview from './pages/data-table-preview/data-table-preview';
import CustomSelectPreview from './pages/custom-select/custom-select-preview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={dataTablePreview} path="/data-table" />
        <Route Component={CustomSelectPreview} path="/custom-select" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
