import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Header from './component/Header';

const App = () => {
   return(
      <Route>
         <Header/>
      </Route>
   )
};

export default App;