function Contact() {
  return (
    <div>
        <section className="main-contactus">
            <div className="container">
                <div className="contact-form">
                    <div className="contact-image">
                        <img src="http://demo.greensoftbd.xyz/greenlms/v2.2/uploads/images/contact.png" alt="rocket_contact" />
                    </div>
                    <form method="POST">
                        <h3>Drop Us a Message</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control " placeholder="Your Name *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control " placeholder="Your Email *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" className="form-control " placeholder="Your Subject *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea name="message" className="form-control " rows="6" placeholder="Your Message *"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Contact;
