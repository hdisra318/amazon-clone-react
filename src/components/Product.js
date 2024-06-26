import { useStateValue } from '../StateProvider';
import './Product.css';

import StarIcon from '@mui/icons-material/Star';

export default function Product({id, title, image, price, rating}) {
  
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} style={{color: '#DE7921'}}/>
                    ))}
                </div>
            </div>

            <img
                src={image}
                alt='product'
            />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );

}
