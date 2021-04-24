import React from "react"
import Menubar from './Menubar'
import { Link } from "react-router-dom"
import logo from '../logo.jpg'


class Header extends React.Component {

    state = {
        search:''
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert('This feature is now under construction.');
    }

    render() {
        return (
            <div>
                <section className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <a href="mailto:admin@gmail.com" className="header-email">
                                    <i className="fa fa-envelope"></i> admin@gmail.com
                                </a>
                                <a href="#" className="header-phone">
                                    <i className="fa fa-phone"></i> 123456
                                </a>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <ul className="header-items">
                                    <li>
                                        <Link to="/login"><i className="fa fa-sign-in"></i> Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/register"><i className="fa fa-user-plus"></i> Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <Link to="/">
                                    <img className="header-logo" src={logo} alt="Logo"/>
                                </Link>
                            </div>
                            <div className="col-sm-6 offset-md-3">
                                <div className="header-search">
                                    <form action="#" method="POST">
                                        <div className="input-group input-group-search-form">
                                            <input 
                                            type="text" 
                                            placeholder="Search...." 
                                            className="form-control form-control-lg input-group-search" 
                                            name="search" 
                                            value={this.state.search} 
                                            onChange={this.changeHandler}                                                
                                            />
                                            <div className="input-group-append search-btn">
                                                <input onClick={this.submitHandler} type="submit" className="input-group-text" value="Search"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Menubar/>

            </div>
        );
    }
}

export default Header;
