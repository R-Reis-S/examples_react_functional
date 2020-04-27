import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../Main';
import Props from '../examples/props';
import PropsInput from '../examples/props_input';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/props" component={Props} />
                <Route path="/propsInput" component={PropsInput} />
            </Switch>
        </BrowserRouter>
    )
}