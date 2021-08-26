import React from 'react';
import Navbar from '../components/snippets/Navbar';
import Footer from '../components/snippets/Footer';
import CardForm from '../components/snippets/CardForm';

const PaymentForm = () => {
    return (
        <div className="user_form_div">
            <Navbar />
            <CardForm />
            <Footer />
        </div>
    )
}

export default PaymentForm;