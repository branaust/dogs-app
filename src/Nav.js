import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog => (
            <li className="nav-item" key={dog.name} >
                <NavLink exact to={`/dogs/${dog.name}`} className="nav-link" >
                    {dog.name}
                </NavLink>
            </li >
        ));
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/dogs">
                    Dog App
                </Link>
                <div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navBarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li>
                                <NavLink exact to='/dogs' className='nav-link'>
                                    Home
                                </NavLink>
                            </li>
                            {dogLinks}
                        </ul>
                    </div>


                </div>
            </nav >


        )
    }
}

export default Nav