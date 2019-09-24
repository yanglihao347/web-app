import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store'
import Login from './containers/login';
import Main from './containers/main';


class App extends React.Component {
    render (){
        return (
            <Provider store={store} >
                <HashRouter>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route component={Main}></Route>
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));