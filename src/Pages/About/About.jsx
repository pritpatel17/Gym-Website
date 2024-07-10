import './About.css';
import Offers from "../../Components/Offers/Offers";
import Quote from "../../Components/Quote/Quote";
const About = () => {
    return (
        <>
            {/* About Home Start */}
            <div className="AboutHome">
                <div className="AboutContent">
                    <h6>Power. Progress. Perform.</h6>
                    <h5>About Us</h5>
                </div>
            </div>
            {/* About Home End */}

            {/* Offers */}
            <Offers />

            {/* Quote */}
            <Quote />

            {/* Why Choose us Section Start */}
            <div className="WhyChooseUs container">
                <div className="row justify-content-center">

                    <div className="col-sm-5">

                        {/*  */}
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="box">
                                        <h6>Free Trial Week</h6>
                                        <p>
                                            Experience the Easy Gym difference with our exclusive free trial week. Get
                                            full
                                            access to our state-of-the-art facilities...
                                        </p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div class="box">
                                        <h6>Personal Training Package</h6>
                                        <p>
                                            Take your fitness to the next level with our personalized training package. Our
                                            experienced trainers will work closely...
                                        </p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div class="box">
                                        <h6>Buddy Membership</h6>
                                        <p>Get fit together and save with our Buddy Membership offer. Bring a friend or
                                            family member and enjoy discounted rates on our membership...</p>
                                    </div>
                                </div>


                                <div className="col-sm-6">
                                    <div class="box">
                                        <h6>Wellness Package</h6>
                                        <p>Prioritize your overall well-being with our Wellness Package. This comprehensive
                                            package includes access to our gym facilities, group classes..</p>
                                    </div>
                                </div>



                            </div>
                        </div>
                        {/*  */}

                    </div>

                    <div className="col-sm-5">
                        <img src="custom2.jpg" className='img-fluid' alt="" />
                    </div>


                </div>
            </div>
            {/* Why Choose us Section End */}





        </>
    )
}
export default About