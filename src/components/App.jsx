import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { CheckboxProvider } from './CheckboxContext';
import Main from './main/main';
import Secondstep from './secondstep/secondstep';
import Thirdstep from './thirdstep/thirdstep';
import Finalstep from './finalstep/finalstep';

export const App = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/secondstep':
        setProgress(25);
        break;
      case '/thirdstep':
        setProgress(50);
        break;
      case '/finalstep':
        setProgress(100);
        break;
      default:
        setProgress(0);
    }
  }, [location.pathname]);

  return (
    <>
      <CheckboxProvider>
        <LinearProgress variant="determinate" value={progress} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/secondstep" element={<Secondstep />} />
          <Route path="/thirdstep" element={<Thirdstep />} />
          <Route path="/finalstep" element={<Finalstep />} />
        </Routes>
      </CheckboxProvider>
    </>
  );
};
