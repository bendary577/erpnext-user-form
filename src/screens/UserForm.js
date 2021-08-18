import React from 'react';
import Navbar from '../components/snippets/Navbar';
import Footer from '../components/snippets/Footer';
import Form from '../components/snippets/Form';

const UserForm = () => {
    return (
        <div className="user_form_div">
            <Navbar />
            <Form />
            <Footer />
        </div>
    )
}

export default UserForm;