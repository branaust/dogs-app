import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog => (
            <li>
                <NavLink exact to={`dogs/${dog.name}`} className="nav-link">HOME>
                    {dog.name}
                </NavLink>
            </li>
        ));
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div>
                    <ul>
                        <li>
                            <NavLink exact to='/dogs' className='nav-link'>
                                Home
                        </NavLink>
                        </li>
                        {dogLinks}
                    </ul>

                </div>
            </nav>


        )
    }
}

export default Nav