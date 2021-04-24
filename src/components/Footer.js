import React from "react"

class Footer extends React.Component {
    
    submitHandler = (event) => {
        event.preventDefault();
        alert('This feature is now under construction.');
    }

    render() {
        return (
            <div>
                <section className="main-newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="newsletter-content">
                                    <h3>Sign Up For Newsletters</h3>
                                    <p>Be the First to Know. Sign up for newsletter today</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="newsletter-box">
                                    <form action="#" method="POST">
                                        <div className="input-group input-group-search-form">
                                            <input type="text" name="email" placeholder="Subscribe Now...." className="form-control form-control-lg input-group-search"/>
                                            <div className="input-group-append search-btn">
                                                <input onClick={this.submitHandler} type="submit" className="input-group-text" value="Subscribe"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p>This site was developed by the team GREENSOFTBD</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;
