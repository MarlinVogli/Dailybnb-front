import "./Properties.css";
import { useState, useEffect } from "react";
import API from "../api";

function Properties() {

 /* const [slideIndex, setSlideIndex] = useState([0, 0, 0]);
  const [dbProperties, setDbProperties] = useState([]);

  // ← fetch properties from database
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await API.get('/auth/property');
        setDbProperties(res.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
    fetchProperties();
  }, []);

  const plusSlides = (n, no) => {
    setSlideIndex(prev => {
      const newIndex = [...prev];
      const slidesLength = no === 0 ? slides1.length : no === 1 ? slides2.length : slides3.length;
      newIndex[no] += n;
      if (newIndex[no] >= slidesLength) newIndex[no] = 0;
      if (newIndex[no] < 0) newIndex[no] = slidesLength - 1;
      return newIndex;
    });
  };

  const slides1 = [ImgD1, ImgD2, ImgD3, ImgD4, ImgD5, ImgD6];
  const slides2 = [ImgB1, ImgB2, ImgB3, ImgB4, ImgB5, ImgB6];
  const slides3 = [Qndr1, Qndr2, Qndr3, Qndr4];

  return (
    <>
      
      <div className="properties-wrapper">

        
        <div className="slide1">
          <div className="slideshow-container">
            {slides1.map((img, index) => (
              <div key={index} className="mySlides1"
                style={{ display: index === slideIndex[0] ? "block" : "none" }}>
                <img src={img} style={{ width: "100%", height: "300px", objectFit: "cover" }} alt="Apartment 1" />
                <a className="prev" onClick={() => plusSlides(-1, 0)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1, 0)}>&#10095;</a>
              </div>
            ))}
          </div>
          <div className="apt-info">
            <p className="apt-name1">New Boulevard Apartment 1</p>
            <p className="p1" style={{ textAlign: "center" }}>Amenities</p>
            <ul className="ul-properties">
              <li style={{ listStyle: "none" }}>Washing Machine</li>
              <li style={{ listStyle: "none" }}>Iron</li>
              <li style={{ listStyle: "none" }}>Hair Dryer</li>
              <li style={{ listStyle: "none" }}>Kettle</li>
            </ul>
            <a href="https://maps.app.goo.gl/gDduacJzQ6Z9jHu6A" target="_blank" rel="noreferrer" className="p2-link">
              <p className="p2">Property Location : Rruga Jordan Misja <i className="bi bi-geo"></i></p>
            </a>
            <p><i className="bi bi-p-square"></i> Paid Parking on site.</p>
          </div>
          <div className="book-price">
            <span className="price-tag">€55 / night</span>
            <button>Book this Property</button>
          </div>
        </div>

        
        <div className="slide2">
          <div className="slideshow-container">
            {slides2.map((img, index) => (
              <div key={index} className="mySlides2"
                style={{ display: index === slideIndex[1] ? "block" : "none" }}>
                <img src={img} style={{ width: "100%", height: "300px", objectFit: "cover" }} alt="Apartment 2" />
                <a className="prev" onClick={() => plusSlides(-1, 1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1, 1)}>&#10095;</a>
              </div>
            ))}
          </div>
          <div className="apt-info">
            <p className="apt-name2">Bright & Spacious Apartment - New Boulevard</p>
            <p className="p1" style={{ textAlign: "center" }}>Amenities</p>
            <ul className="ul-properties">
              <li style={{ listStyle: "none" }}>Washing Machine</li>
              <li style={{ listStyle: "none" }}>Caffe Machine</li>
              <li style={{ listStyle: "none" }}>Dishwasher</li>
              <li style={{ listStyle: "none" }}>Iron</li>
              <li style={{ listStyle: "none" }}>Hair Dryer</li>
              <li style={{ listStyle: "none" }}>Kettle</li>
            </ul>
            <a href="https://maps.app.goo.gl/gDduacJzQ6Z9jHu6A" target="_blank" rel="noreferrer" className="p2-link">
              <p className="p2">Property Location : Rruga Jordan Misja <i className="bi bi-geo"></i></p>
            </a>
            <p><i className="bi bi-p-square"></i> Paid Parking on site.</p>
          </div>
          <div className="book-price">
            <span className="price-tag">€60 / night</span>
            <button>Book this Property</button>
          </div>
        </div>

        <div className="slide3">
          <div className="slideshow-container">
            {slides3.map((img, index) => (
              <div key={index} className="mySlides3"
                style={{ display: index === slideIndex[2] ? "block" : "none" }}>
                <img src={img} style={{ width: "100%", height: "300px", objectFit: "cover" }} alt="Apartment 3" />
                <a className="prev" onClick={() => plusSlides(-1, 2)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1, 2)}>&#10095;</a>
              </div>
            ))}
          </div>
          <div className="apt-info">
            <p className="apt-name3">9-Kateshet Apartment</p>
            <p className="p1" style={{ textAlign: "center" }}>Amenities</p>
            <ul className="ul-properties">
              <li style={{ listStyle: "none" }}>Washing Machine</li>
              <li style={{ listStyle: "none" }}>Caffe Machine</li>
              <li style={{ listStyle: "none" }}>Dishwasher</li>
              <li style={{ listStyle: "none" }}>Iron</li>
              <li style={{ listStyle: "none" }}>Hair Dryer</li>
              <li style={{ listStyle: "none" }}>Kettle</li>
            </ul>
            <a href="https://maps.app.goo.gl/Rg4q638xyuwQ3x8p6" target="_blank" rel="noreferrer" className="p2-link">
              <p className="p2">Property Location : Rruga Jordan Misja <i className="bi bi-geo"></i></p>
            </a>
            <p><i className="bi bi-sign-no-parking"></i> No Parking on site.</p>
          </div>
          <div className="book-price">
            <span className="price-tag">€55 / night</span>
            <button>Book this Property</button>
          </div>
        </div>

      </div>*/

  const [dbProperties, setDbProperties] = useState([]);

  // ← fetch properties from database
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await API.get('/auth/property');
        setDbProperties(res.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
    fetchProperties();
  }, []);

      return(
      <>
      {/* ── DATABASE PROPERTIES ── */}
      {dbProperties.length > 0 && (
        <>
          <h2 className="db-properties-title">Listed Properties</h2>
          <div className="properties-wrapper">
            {dbProperties.map((property) => (
              <div className="slide1" key={property.property_id}>
                <div className="slideshow-container">
                 
                    <img
                      src={`http://localhost:5001/uploads/${property.media[0].path}`}
                      alt={property.name}
                      width={150}
                    />
                  
                </div>
                <div className="apt-info">
                  <p className="apt-name1">{property.propertyName || property.name}</p>
                  <p className="p2">📍 {property.city}</p>
                </div>
                <div className="book-price">
                  <span className="price-tag">€{property.price} / night</span>
                  <button>Book this Property</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Properties;