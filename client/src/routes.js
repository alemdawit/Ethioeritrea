import React from 'react';
import { Route,Switch} from 'react-router-dom';

import UserView from './components/userview';
import Home from './components/home';
import User from './components/userview';

import NotFound from './components/404';

export default () => (
    <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/userview" user={false} component={UserView}/>
        <Route path ="/userview/:id" user={true} component={UserView}/>
       
        <Route exact component={NotFound}/>
    </Switch>
);