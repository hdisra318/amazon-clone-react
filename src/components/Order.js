import CheckoutProduct from './CheckoutProduct';
import '../Orders.css'
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

export default function Order({order}) {
    
    const hiddenButton = true;

    return (
        <div className="order">
            <h2>Order</h2>

            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map(item => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hiddenButton={hiddenButton}
                />
            ))}

            <CurrencyFormat
                renderText={value => (
                    <h3 className='order__total'>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}
