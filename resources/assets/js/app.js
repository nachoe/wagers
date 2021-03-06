
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//
// require('./components/index');


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import Nav from './components/nav'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BetIndex from './components/bet_index'
import BetNew from './components/bet_new'
import BetView from './components/bet_view'
import BetEdit from './components/bet_edit'
import BetParticipant from './components/bet_participant'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="container">
                <Nav/>
                <Switch>
                    <Route path="/bet/new" component={BetNew}/>
                    <Route path="/bet/edit/:id" component={BetEdit}/>
                    <Route path="/bet/:bet_id/join/:p_id?" component={BetParticipant}/>
                    <Route path="/bet/view/:id" component={BetView}/>
                    <Route path="/" component={BetIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.app-container'));