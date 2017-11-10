import React from 'react';
import { Link } from 'react-router-dom';

// Since this component is simple and static, there's no parent container for it.
const ContactUs = () => {
    return (
        <div>
            <h2 className="alt-header">About</h2>
            <p>
                Contact Us page ...
            </p>
            <p>
                <Link to="/badlink">Click this bad link</Link> to see the 404 page.
            </p>
        </div>
    );
};

export default ContactUs;