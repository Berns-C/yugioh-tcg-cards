import React from 'react';
import '@Assets/styles/app.css';
import ContextWrapper from '@Contexts/ContextWrapper';
import Routes from '@Routes/routes';

const App = () => {
  return (
    <ContextWrapper>
      <Routes />
    </ContextWrapper>
  );
};

export default App;
