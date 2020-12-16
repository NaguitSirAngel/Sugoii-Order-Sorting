import React from 'react';
import {Link} from 'react-router-dom';

const sideNav = (props) => (
    <React.Fragment>
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
    </React.Fragment>
)

export default sideNav;