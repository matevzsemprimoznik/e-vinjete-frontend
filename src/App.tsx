import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import { Paths } from './routes';
import Home from './pages/Home';
import AllVignettes from './pages/AllVignettes';
import AddVignette from './pages/SaveVignette';
import AllPurchases from './pages/AllPurchases';
import AddPurchase from './pages/AddPurchase';
import VignetteValidation from './pages/VignetteValidation';
import VignetteDetails from './pages/VignetteDetails';
import PurchaseDetails from './pages/PurchaseDetails';
import SaveVignette from './pages/SaveVignette';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Router>
        <Routes>
          <Route path={Paths.HOME} element={<Home />} />
          <Route path={Paths.ALL_VIGNETTES} element={<AllVignettes />} />
          <Route path={Paths.VIGNETTE + '/:id'} element={<VignetteDetails />} />
          <Route path={Paths.SAVE_VIGNETTE}>
            <Route path=':id' element={<SaveVignette />} />
            <Route path='' element={<SaveVignette />} />
          </Route>
          <Route path={Paths.PURCHASE + '/:id'} element={<PurchaseDetails />} />
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
