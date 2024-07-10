import "./Home.css";
import Offers from "../../Components/Offers/Offers";
import Quote from "../../Components/Quote/Quote";

const Home = () => {
  return (
    <>
      {/* Home/Hero */}
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <h6>Strength. Stamina. Success.</h6>
              <h5>Unleash Potential.</h5>
              <p>
                Welcome to Gym, your ultimate destination for a seamless fitness experience. <br /><br />
                At Gym, we believe fitness should be effortless and enjoyable. Our mission is to create a welcoming and inclusive environment where achieving your fitness goals is made easy.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Home/Hero */}

      {/* Offers Start */}
      <Offers />
      {/* Offers End */}

      {/* Custom Compo Start */}
      <div className="container-fluid customHome">
        <div className="row">
          <div className="col-sm-6">
            <div className="box">
              <img src="custom1.jpg" className="img-fluid" alt="Custom 1" />
              <div className="boxContent">
                {/* <h6>Click Me</h6> */}
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="box">
              <img src="custom2.jpg" className="img-fluid" alt="Custom 2" />
              <div className="boxContent">
                {/* <h6>Click Me</h6> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Compo End */}

      {/* Quote Compo Start */}
      <Quote />
      {/* Quote Compo End */}

      {/* Second Header Start */}
      <div className="SecondHeader">
        <div>
          <div className="img">
            <img src="secondHeader.jpg" className="img-fluid" alt="Second Header" />
          </div>
          <div className="SecondHeaderContent">
            <div className="box">
              <h6>Shop Now</h6>
              <p>
                Get ready to take your fitness journey to the next level by exploring our shop now section.
                Whether you're in need of workout gear, fitness accessories, or nutritional supplements, we've
                got you covered. Our shop now section offers a wide range of high-quality products carefully
                curated to enhance your fitness experience and support your health goals. <br /><br />
                Browse through our selection of premium workout apparel designed for optimal comfort,
                functionality, and style. From performance-enhancing active wear to supportive footwear, we offer
                everything you need to look and feel great during your workouts.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Second Header End */}

      {/* Blogs Start */}
      {/* <Blogs /> */}
      {/* Blogs End */}
    </>
  );
};
export default Home;
