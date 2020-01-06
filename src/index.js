import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store'
import Login from './containers/login';
import Test from './containers/test';
import Main from './containers/main';


class App extends React.Component {
    render (){
        return (
            <Provider store={store} >
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/test' component={Test}></Route>
                        <Route component={Main}>
                          {/* <Route path="/inventory" component></Route> */}
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));