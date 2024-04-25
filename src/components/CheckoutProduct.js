import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';

import StarIcon from '@mui/icons-material/Star';

export default function CheckoutProduct({id, image, title, price, rating, hiddenButton}) {

    const [{basket}, dispatch] = useStateValue();

    /* Remove the item from the basket */
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
            <img src={image} className='checkoutProduct__image' />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (
                         <StarIcon key={i} style={{color: '#DE7921'}}/>
                    ))}
                </div>

                {!hiddenButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>

        </div>
    )
}
