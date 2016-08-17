import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './App.jsx';
import {Provider} from 'react-redux';

import IdentityHomeMain from './views/IdentityHomeMain.jsx';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={IdentityHomeMain}/>

            
        </Route>
    </Router>), document.getElementById('root'));
