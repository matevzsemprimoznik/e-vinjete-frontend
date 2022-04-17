import React from 'react';
import { Menubar } from 'primereact/menubar';
import { navigationItems } from '../constants/navigation';

const Navigation = () => {
  return <Menubar model={navigationItems} />;
};

export default Navigation;
