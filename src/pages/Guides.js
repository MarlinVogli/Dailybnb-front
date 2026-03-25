import "./Guides.css";
import ImgBerat from "../assets/berati.jpg";
import ImgGjirokaster from "../assets/gjirokastra.avif";
import ImgKruja from "../assets/kruja.jpg";
import ImgBovilla from "../assets/bovilla.webp";
import ImgANS from "../assets/albaniannightshow.jpg";
import ImgWTT from "../assets/wtt.jpg";

const guides = [
  {
    id: 1,
    title: "Berat",
    description: "The city of a thousand windows, a UNESCO World Heritage Site.",
    image: ImgBerat,
    link: "https://www.tripadvisor.com/AttractionProductReview-g294446-d19957845-Berat_city_UNESCO_tour_the_Castle_Belshi_lake_From_Tirana-Tirana_Tirana_County.html"
  },
  {
    id: 2,
    title: "Gjirokaster",
    description: "A beautifully preserved city nestled in the mountains.",
    image: ImgGjirokaster,
    link: "https://www.tripadvisor.com/AttractionProductReview-g303165-d17524368-Gjirokastra_The_Stone_City_Blue_Eye_The_monument_of_Nature-Saranda_Vlore_County.html"
  },
  {
    id: 3,
    title: "Kruja Tour",
    description: "Explore Kruja castle, the old bazaar and the Sarisalltik forest.",
    image: ImgKruja,
    link: "https://www.tripadvisor.com/AttractionProductReview-g294446-d19684793-Kruja_castle_the_old_Bazaar_Sarisalltik_Departure_from_Tirana-Tirana_Tirana_County.html"
  },
  {
    id: 4,
    title: "Bovilla Reservoir",
    description: "A stunning mountain lake perfect for hiking and canyon views.",
    image: ImgBovilla,
    link: "https://www.tripadvisor.com/AttractionProductReview-g294446-d19074779-Hike_Gamti_Mountain_with_Bovilla_lake_view_canyon_From_Tirana-Tirana_Tirana_County.html"
  },
  {
    id: 5,
    title: "Albanian Night Show",
    description: "Traditional music, dance and dinner experience in Tirana.",
    image: ImgANS,
    link: "https://www.tripadvisor.com/AttractionProductReview-g294446-d32785410-Albanian_Night_Show_Traditional_Music_Dance_Dinner_in_Tirana-Tirana_Tirana_County.html"
  },
  {
    id: 6,
    title: "Walking Tour of Tirana",
    description: "Discover Tirana's history, culture and hidden gems on foot.",
    image: ImgWTT,
    link: "https://www.tripadvisor.com/AttractionProductReview-g294446-d20895183-Walking_Tour_of_Tirana-Tirana_Tirana_County.html"
  },
];

function Guides() {
  return (
    <div className="guides-page">
      <h1 className="guides-title">Explore Albania</h1>
      <p className="guides-subtitle">Discover the best destinations Albania has to offer</p>

      <div className="guides-container">
        {guides.map(guide => (
          <div className="guide-card" key={guide.id}>
            <img src={guide.image} alt={guide.title} className="guide-img" />
            <h3 className="guide-name">{guide.title}</h3>
            <p className="guide-desc">{guide.description}</p>
            <a
              href={guide.link}
              target="_blank"
              rel="noreferrer"
              className="guide-btn"
            >
              View Guide
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guides;