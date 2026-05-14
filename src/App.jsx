import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Sources from './pages/Sources';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sources' element={<Sources />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;