import React from 'react';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
import Story from './Components/Story'
import Rsv from './Components/Rsv'
import Info from './Components/Info'
import Qa from './Components/Qa'
import GuestList from './Components/GuestList'
import Login from './Components/Login'

const App = () =>{
    return(
        <Router>
            <div className="App">
                <Nav />
                <Route exact path='/' component={Home} />
                <Route path='/story' component={Story} />
                <Route path='/rsv' component={Rsv} />
                <Route path='/info' component={Info} />
                <Route path='/qa' component={Qa} />
                <Route path='/guestlist' component={GuestList} />
                <Route path='/login' component={Login} />
            </div>
        </Router>
    );
}

export default App;