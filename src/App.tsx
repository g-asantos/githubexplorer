import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import GlobalStyle from '../src/styles/global';
import Routes from '../src/routes'


const App: React.FC = () => (
  <>


  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  <GlobalStyle />

  </>
);

export default App;
