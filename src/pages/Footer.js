import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">

            <ul className="bottom-link">

                <li className="ftr">
                    <Link to="#">Contact Support</Link>
                </li>

                <li className="ftr">
                    <Link to="#">My Properties</Link>
                </li>

                <li className="ftr">
                    <Link to="#">Car Hire</Link>
                </li>

                <li className="ftr">
                    <Link to="/about">About Us</Link>
                </li>

            </ul>

            <p className="copy-right">&copy; 2026 STAYcation. All rights reserved.</p>
        
        </div>
    );
}

export default Footer;