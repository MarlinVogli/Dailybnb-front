import Img from '../assets/Staycation copy.svg';
import "./About.css";

const facts = [
    {
        id: 1,
        title: "3000+",
        description: "Rezervime qe nga fillimi i sherbimit.",
    },
    {
        id: 2,
        title: "700+",
        description: "Kliente kane zgjedhur apartamentet tona.",
    },
    {
        id: 3,
        title: "Tirana",
        description: "Vendi aktual i operimit te sherbimit, me plan ne zgjerim ne qytete te tjera.",
    },
    {
        id: 4,
        title: "MIA",
        description: "Sherbim Made in Albania",
    },
    {
        id: 5,
        title: "Qellimi",
        description: "Per te mbledhur te gjithe pronaret ne Shqiperi per te ofruar pronat e tyre per Qira Ditore.",
    },
    {
        id: 6,
        title: "Sherbimi",
        description: "Fokusi kryesor ne ofrimin e nje eksperience cilesore.",
    },
]

function About(){
    return (
        <>
            <main>
                <section className="Section-top">
                    <div className="main-about">
                        <div className="about-left">
                            {/* Removed inline height/width — controlled by CSS instead */}
                            <img className="logo-about" src={Img} alt="STAYcation Logo" />
                        </div>

                        <div className="about-right">
                            <h3>STAYcation</h3>
                            <p>
                                Established in 2021, <span>STAYcation</span> was born from a simple belief —
                                that every guest deserves more than just a place to sleep. Our motto,
                                <q><i> A home away from Home</i></q>, is not just a phrase — it is the
                                standard we hold ourselves to every single day.
                            </p>
                            <p>
                                We carefully select and manage short-term rental apartments in Tirana,
                                ensuring each property is fully equipped, thoughtfully designed, and
                                strategically located within walking distance of the city center. Whether
                                you are visiting for business or leisure, we make sure your stay feels
                                comfortable, personal, and effortless.
                            </p>
                            <p>
                                At STAYcation, we are more than a rental service — we are your local host,
                                your trusted guide, and your home in Albania.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="Section-middle">
                    <h3 className="facts-title">Staycation Insights</h3>
                    <div className="facts-container">
                        {facts.map(facts => (
                            <div className="facts-card" key={facts.id}>
                                <h3 className="facts-name">{facts.title}</h3>
                                <p className="facts-desc">{facts.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="Section-bottom">
                    <div className="main-locations">
                        <h3 className="locations-title">Our Locations</h3>
                        <div className="maps-wrapper">
                            <div className="map-container">
                                <p className="map-label">New Boulevard Apartments</p>
                                <iframe
                                    title="Location 1"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.760059186988!2d19.811793210925664!3d41.33649019903203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031322ff70b01%3A0x26417d9eecfc82a6!2sStaycation%20-%20New%20Boulevard%20-%20AM!5e1!3m2!1sen!2s!4v1771493292393!5m2!1sen!2s"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                            <div className="map-container">
                                <p className="map-label">City Center Apartment</p>
                                <iframe
                                    title="Location 2"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.034042414872!2d19.819547010925362!3d41.32963059945714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031e864724c5f%3A0x8ac0df81b254a11a!2sSTAYcation%209-Kateshet%20by%20AM!5e1!3m2!1sen!2s!4v1771493538427!5m2!1sen!2s"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;