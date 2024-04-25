import { useStateValue } from '../StateProvider';
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Reducer';
import { useNavigate } from 'react-router-dom';

export default function Subtotal() {
  
    const [{basket}, dispatch] = useStateValue();

    const navigate = useNavigate();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):
                            <strong> {value} </strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button className='subtotal__button'
                onClick={e => navigate('/payment')}
            >
                Proceed to Checkout
            </button>
        </div>
    );
}
