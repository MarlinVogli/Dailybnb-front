import { useState } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AddProperty.css";

const AddProperty = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [form, setForm] = useState({
        propertyName: '',
        city: '',
        price: '',
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("User object:", user); 
        const formData = new FormData();
        formData.append("propertyName", form.propertyName);
        formData.append("city", form.city);
        formData.append("price", form.price);
        formData.append("host_id", user.id);
        if (image) {
            formData.append("image", image);
        }

        try {
            const res = await API.post('/auth/addProperty', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert(res.data?.msg || "Property listed successfully!");
            navigate('/properties');
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.msg || "Failed to add property.");
        }
    };

    return (
        <div className="add-property-page">
            <div className="add-property-card">
                <h2 className="add-property-title">List Your Property</h2>
                <p className="add-property-subtitle">Fill in the details below to add your property to STAYcation</p>

                <form className="add-property-form" onSubmit={handleSubmit}>

                    <div className="form-group full-width">
                        <label htmlFor="propertyName">Property Name</label>
                        <input
                            id="propertyName"
                            type="text"
                            name="propertyName"
                            placeholder="Your Property Name"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="image">Photos</label>
                        <input
                            id="image"
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImage}
                            className="file-input"
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            placeholder="e.g. Tirana"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group full-width">
                        <label htmlFor="price">Price per Night (€)</label>
                        <input
                            id="price"
                            type="number"
                            name="price"
                            placeholder="e.g. 60"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-btn">List Property</button>
                        <Link to="/properties" className="cancel-btn">Cancel</Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProperty;