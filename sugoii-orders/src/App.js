import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import RecordOrders from './Pages/RecordPage/RecordPage';
import OrderPage from './Pages/OrderPage/OrderPage'
import SideNav from './SideNav/SideNav';
import Content from './Content/Content';

function App() {
  return (
    <Router>
    <div className="App">
      <SideNav/>
      <Switch>
      <Content/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
