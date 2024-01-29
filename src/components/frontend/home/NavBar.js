import React, {Component} from 'react';
import './Navbar.css';
import {Link, withRouter} from 'react-router-dom';

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false,
            isMenuOpen: false,
            isSmallScreen: window.innerWidth <= 768,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            isSmallScreen: window.innerWidth <= 768,
        });
    };

    toggleDropdown = () => {
        this.setState((prevState) => ({
            isDropdownOpen: !prevState.isDropdownOpen,
        }));
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    };

    setActivePage = (page) => {
        this.setState({
            activePage: page,
        });
    };

    render() {
        return (
            <nav className="navbar">
                <button className={'btn'}>Home</button>
                <button className={'btn'}>Games</button>
                <button className={'btn'}>Store</button>
                <button className={'btn'}>News</button>
            </nav>
        );
    }
}
