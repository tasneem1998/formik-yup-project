import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import BasicForm from './components/BasicForm';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <BasicForm />
    </>
  );
}

export default App;
