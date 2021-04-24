import React from "react"

class Register extends React.Component {
    
    state = {
        name:'',
        email:'',
        phone:'',
        username:'',
        password:'',
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
                <section class="main-login">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 offset-md-3">
                                <div class="my-login">
                                    <h2 class="text-center">Register</h2>
                                    <hr/>
                                    <form action="#" method="post" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <label>Name</label> <span class="text-danger">*</span>
                                            <input type="text" class="form-control " onChange={this.changeHandler} name="name" value={this.state.name} />
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label> <span class="text-danger">*</span>
                                            <input type="text" class="form-control " onChange={this.changeHandler} name="email" value={this.state.email} />
                                        </div>
                                        <div class="form-group">
                                            <label>Phone</label> <span class="text-danger">*</span>
                                            <input type="text" class="form-control " onChange={this.changeHandler} name="phone" value={this.state.phone} />
                                        </div>
                                        <div class="form-group">
                                            <label>Photo</label> <span class="text-danger">*</span>
                                            <div class="custom-file">
                                                <input type="file" name="photo" class="custom-file-input" id="photo"/>
                                                <label class="custom-file-label" for="photo">Choose File...</label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Username</label> <span class="text-danger">*</span>
                                            <input type="text" class="form-control " onChange={this.changeHandler} name="username" value={this.state.username} />
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label> <span class="text-danger">*</span>
                                            <input type="text" class="form-control " onChange={this.changeHandler} name="password" value={this.state.password} />
                                        </div>
                                        <div class="form-group">
                                            <button onClick={this.submitHandler} type="submit" class="btn btn-success btn-block">Register</button>
                                        </div>
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

export default Register;
