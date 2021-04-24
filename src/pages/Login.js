import React from "react"
import axios from 'axios'
import { Redirect } from "react-router-dom";

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        
        let user = {
            'email': this.state.email,
            'password': this.state.password
        }
        
        axios.post('http://127.0.0.1:8000/api/login', user)
        .then(response=> {
            localStorage.setItem('_token', response.data.data.token);
            window.location.href="/";
        })
        .catch(error => console.log(error))

    }

    render() {
        return (
            <div>
                <section className="main-login">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 offset-md-3">
                                <div className="my-login">
                                    <h2 className="text-center">Login</h2>
                                    <hr/>
                                    <form action="#" method="POST">
                                        <div className="form-group">
                                            <label for="email">Email</label> <span className="text-danger">*</span>
                                            <input name="email" type="text" onChange={this.changeHandler} className="form-control " placeholder="Enter email" id="membername" value={this.state.email}/>
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Password</label> <span className="text-danger">*</span>
                                            <input name="password" type="password" onChange={this.changeHandler} className="form-control " placeholder="Enter password" id="password" value={this.state.password}/>
                                        </div>
                                        <button type="submit" onClick={this.submitHandler} className="btn btn-success btn-block">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Login;
