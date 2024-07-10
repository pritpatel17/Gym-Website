import './Offers.css'
import { Link } from 'react-router-dom'
const Offers = () => {
    return (
        <>
            <div className="Offers container">
                <div className="row justify-content-center">
                    
                    <div className="col-sm-5">
                         <h5>Explore our Services </h5>
                    </div>

                    <div className="col-sm-5">

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <Link to='/'>
                                    <div className="box">
                                        <h6>Free Trial Week</h6>
                                        <p>
                                        Experience the Easy Gym difference with our exclusive free trial week. Get
                                            full
                                            access to our state-of-the-art facilities...
                                        </p>
                                     </div>
                                    </Link>
                                </div>

                                <div className="col-sm-6">
                                    <Link to="/Offer2">
                                    <div className="box">
                                        <h6>Personal Training Package</h6>
                                        <p>
                                        Take your fitness to the next level with our personalized training package.
                                            Our
                                            experienced trainers will work closely...
                                        </p>
                                     </div>
                                   </Link>
                                </div>

                                <div className="col-sm-6">
                                    <Link to="/Offer3">
                                    <div className="box">
                                        <h6>Buddy Membership</h6>
                                        <p>
                                        Get fit together and save with our Buddy Membership offer. Bring a friend or
                                            family member and enjoy discounted rates on our membership...
                                        </p>
                                     </div>
                                    </Link>
                                </div>

                                <div className="col-sm-6">
                                    
                                    <Link to="/Offer4">
                                    <div className="box">
                                        <h6>Wellness Package</h6>
                                        <p>
                                        Prioritize your overall well-being with our Wellness Package. This
                                            comprehensive
                                            package includes access to our gym facilities, group classes..
                                        </p>
                                     </div>
                                    </Link>
                                    
                                </div>



                             </div>
                        </div>
                        
                    </div>


                 </div>
            </div>
        </>
  )
}

export default Offers