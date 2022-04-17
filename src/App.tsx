import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'primereact/resources/themes/vela-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import { Paths } from './routes';
import Home from './pages/Home';
import AllVignettes from './pages/AllVignettes';
import AddVignette from './pages/AddVignette';
import AllPurchases from './pages/AllPurchases';
import AddPurchase from './pages/AddPurchase';
import VignetteValidation from './pages/VignetteValidation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Router>
        <Routes>
          <Route path={Paths.HOME} element={<Home />} />
          <Route path={Paths.ALL_VIGNETTES} element={<AllVignettes />} />
          <Route path={Paths.ADD_VIGNETTE} element={<AddVignette />} />
          <Route path={Paths.ALL_PURCHASES} element={<AllPurchases />} />
          <Route path={Paths.ADD_PURCHASE} element={<AddPurchase />} />
          <Route
            path={Paths.VIGNETTE_VALIDATION}
            element={<VignetteValidation />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
