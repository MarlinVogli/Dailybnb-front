import Img9kt1 from '/Users/marlinvogli/Desktop/React JS/dailybnb/FrontEnd/src/assets/IMG_2242_edited_Original.jpg';
import ImgB1 from '/Users/marlinvogli/Desktop/React JS/dailybnb/FrontEnd/src/assets/DSC_6524_Original.jpg';
import ImgD1 from '/Users/marlinvogli/Desktop/React JS/dailybnb/FrontEnd/src/assets/DSC_1349-HDR_Original.jpg';
import ImgWTT from "/Users/marlinvogli/Desktop/React JS/dailybnb/FrontEnd/src/assets/wtt.jpg";
import ImgANS from "/Users/marlinvogli/Desktop/React JS/dailybnb/FrontEnd/src/assets/albaniannightshow.jpg";
import ImgBovilla from "/Users/marlinvogli/Desktop/React JS/dailybnb/FrontEnd/src/assets/bovilla.webp";
import "./Home.css";
import { useNavigate } from "react-router-dom"; // ← add this

function Home(){
  const navigate = useNavigate();

  return(
    <>
      <h2 className="titull1">Properties for You !</h2>

      <section className="section1">
        <div className="Card1">
          <img src={Img9kt1} alt="Heart of the City" />
          <h3 className="hdng1">Heart of the City</h3>
          <p className="p1">Apartment located in the city Center.</p>
          <button className="primary-button" onClick={() => navigate('/properties')}>View Property</button>
        </div>

        <div className="Card2">
          <img src={ImgB1} alt="Bright Apartment" />
          <h3 className="hdng1">Bright Apartment</h3>
          <p className="p1">Spacious apartment just 15 minute walk from city center.</p>
          <button className="primary-button" onClick={() => navigate('/properties')}>View Property</button>
        </div>

        <div className="Card3">
          <img src={ImgD1} alt="Unbeatable Location" />
          <h3 className="hdng1">Unbeatable Location</h3>
          <p className="p1">Apartment located in a quite neighborhood.</p>
          <button className="primary-button" onClick={() => navigate('/properties')}>View Property</button>
        </div>
      </section>

      <h2 className="titull2">Places to Visit !</h2>

      <section className="section2">
        <div className="Card1">
          <img src={ImgWTT} alt="Tirana Sights" />
          <h3 className="hdng1">Tirana Sights</h3>
          <p className="p1">A walking tour visiting Tirana sights.</p>
          <button className="primary-button" onClick={() => navigate('/guides')}>View Guide</button>
        </div>

        <div className="Card2">
          <img src={ImgANS} alt="Albanian Night Show" />
          <h3 className="hdng1">Albanian Night Show</h3>
          <p className="p1">A nightly show that empowers Albanian tradition.</p>
          <button className="primary-button" onClick={() => navigate('/guides')}>View Guide</button>
        </div>

        <div className="Card3">
          <img src={ImgBovilla} alt="Bovilla Lake" />
          <h3 className="hdng1">Bovilla Lake</h3>
          <p className="p1">Breathtaking views near Tirana City.</p>
          <button className="primary-button" onClick={() => navigate('/guides')}>View Guide</button>
        </div>
      </section>
    </>
  )
}

export default Home;