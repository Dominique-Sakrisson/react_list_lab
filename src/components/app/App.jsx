import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from '../../containers/HomePage/AvatarContainer.jsx';
import DetailsPage from '../../containers/DetailsPage/AvatarItemContainer.jsx';


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
                render={(routerProps) => <DetailsPage{...routerProps}/>}
            />
          </Switch>
        </Router>
      </header>
    </div>
  )
}
