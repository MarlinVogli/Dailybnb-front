import { useState, useEffect } from "react";
import API from '../api';
import { Link } from 'react-router-dom';

const GetProperty = () => {
    const [property, setProperty] = useState([]);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await API.get("/auth/property");
                setProperty(res.data);
            } catch(err) {
                console.error("Error fetching property: ", err);
            }
        };
        fetchProperty();
    }, []);
    return (
        <div>
            <h2>Property List:</h2>
            <ul>
                {property.map((property) => (
                    <li key={property.property_id}> 
                        {property.host_id} - {property.propertyName} - {property.city} - €{property.price} - {property.media_id && (
                            <img
                            src={`http://localhost:5001/uploads/${property.media[0].path}`}
                            alt={property.name}
                            width={150}
                            />
                        )}
                    </li>
                ))}
            </ul>

            <Link to="/list">Add new Property</Link> 
        </div>
    );
};

export default GetProperty;