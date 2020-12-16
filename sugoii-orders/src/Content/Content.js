import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import RecordOrders from '../Pages/RecordPage/RecordPage';
import OrderPage from '../Pages/OrderPage/OrderPage';

const content = (props) => (
    <React.Fragment>
      <Route path="/records" component={RecordOrders}/>
      <Route path="/" exact component={OrderPage}/>
    </React.Fragment>
)

export default content;