import React from 'react';
import Navigation from './components/Navigation';

import 'primereact/resources/themes/vela-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
    </div>
  );
}

export default App;
