import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


export default function App() {
  return (
    <div className='App'>
      <header>
        <Router>
          <Switch>
            <Route 
            path='/'
              exact 
                render={(routerProps) => <HomePage{...routerProps}/>}
            /> 
            <Route 
            path='/:id'
              exact 
                render={(routerProps) => <HomePage{...routerProps}/>}
            />
          </Switch>
        </Router>
      </header>
    </div>
  )
}
