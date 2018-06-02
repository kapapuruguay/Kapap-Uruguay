import React, { Component } from 'react';
//import logo from '../logo.svg';
import './AppBar.css';
//import SvgIcon from '@material-ui/core/SvgIcon'
import logo from './kapap-svg.svg'
//import flag from './Flag_of_Uruguay.svg'

class AppBar extends Component {
    render() {
        return (
            <div className="AppBar">
                <header className="AppBar-header">
                    <img src={logo} className="AppBar-logo" alt="logo" />
                    <h1 className="AppBar-title">Kapap Uruguay</h1>
                </header>
            </div>
        );
    }

}

export default AppBar;
