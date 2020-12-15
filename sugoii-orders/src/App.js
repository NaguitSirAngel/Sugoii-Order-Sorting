import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import RecordOrders from './Pages/RecordPage/RecordPage';
import OrderPage from './Pages/OrderPage/OrderPage'

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to ="/" >Current Orders</Link>
          </li>
          <li>
            <Link to ="/records" >Order Records</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/records" component={RecordOrders}/>
      <Route path="/" component={OrderPage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
