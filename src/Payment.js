import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './components/CheckoutProduct';
import { getBasketTotal } from './Reducer';
import axios from './axios';
import { db } from './firabase';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';

export default function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    const elements = useElements();
    const stripe = useStripe();

    useEffect(() => {
        // To charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    }, [basket]);
    
    console.log(clientSecret)
    
    const handleSubmit = async e => {
        e.preventDefault();

        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            console.log(paymentIntent.id)

            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            // Payment Confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);


            dispatch({
                type: 'EMPTY_BASKET'
            })


            navigate('/orders');

        }).catch(error => {
            // Manejar el error
            console.error("Error al escribir en Firestore:", error);
        });
    }

    // When the card element changes
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message: '');
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                {/* Delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p className='payment__email'>{user?.email}</p>
                        <p>Rue Du Barry 123</p>
                        <p>Ottawa, Canada</p>
                    </div>
                </div>


                {/* Reviewed items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>


                {/* Payment method part */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={value => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy now'}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
