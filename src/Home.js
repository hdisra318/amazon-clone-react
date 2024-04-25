import './Home.css'
import Product from './components/Product';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

function Home() {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className="home">
            <div className='home__container'>
                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false}
                    interval={6000}
                    
                    style={{height: '500px', margin: '0 0 40px 0'}}
                >
                    <img 
                        data-src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                        className='home__image' 
                        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
                        alt='home image' 
                    />
                    <img 
                        data-src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png"
                        className='home__image' 
                        src='https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png' 
                        alt='home image' 
                    />
                    <img 
                        data-src="https://s2-epocanegocios.glbimg.com/vDjG2ZTIcKvwM5hFZ_EyKBxUeqQ=/0x0:1200x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2023/i/r/5jlgRATXSTHzccAhzjJg/whatsapp-image-2023-06-07-at-15.36.01.jpeg"
                        className='home__image' 
                        src='https://s2-epocanegocios.glbimg.com/vDjG2ZTIcKvwM5hFZ_EyKBxUeqQ=/0x0:1200x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2023/i/r/5jlgRATXSTHzccAhzjJg/whatsapp-image-2023-06-07-at-15.36.01.jpeg' 
                        alt='home image' 
                    />
                    <img 
                        data-src="https://noahcertified.org/wp-content/uploads/2020/07/AMAZON-1200x537-1.png"
                        className='home__image'
                        src='https://noahcertified.org/wp-content/uploads/2020/07/AMAZON-1200x537-1.png'
                        alt='home image' 
                    />
                </AutoplaySlider>

                {/* Products */}
                <div className='home__row'>
                    <Product 
                        title='Apple 2021 MacBook Pro (de 16 Pulgadas, Chip M1 Pro CPU de 10 núcleos y GPU de 16 núcleos, 16 GB RAM, 512 GB SSD) - Plata'
                        image='https://m.media-amazon.com/images/I/41Ais7CR0KL._AC_SL1000_.jpg'
                        price={67825}
                        rating={4}
                    />
                    <Product 
                        title='Apple - iPhone 12 - Negro'
                        image='https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_SL1500_.jpg'
                        price={10349}
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="1"
                        title='Echo Dot 5.ª (generación, modelo de 2022) con reloj | Bocina inteligente con reloj y Alexa | Blanco'
                        image='https://m.media-amazon.com/images/I/31VRXU+BOjL._AC_.jpg'
                        price={1549}
                        rating={4}
                    />
                    <Product
                        id="2"
                        title='Sony Audífonos inalámbricos on-Ear WH-CH520 hasta 50 Horas de duración de batería, Negro (Reacondicionado), WHCH520/B-cr'
                        image='https://m.media-amazon.com/images/I/41lArSiD5hL._AC_SL1200_.jpg'
                        price={587.42}
                        rating={4}
                    />
                    <Product
                        id="3" 
                        title='2020 Apple iPad Pro (11-pulgadas, Wi-Fi, 128GB) - Gris Espacial (Reacondicionado)'
                        image='https://m.media-amazon.com/images/I/81zpCCNnByL._AC_SL1500_.jpg'
                        price={9898.87}
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id="4"
                        title='SAMSUNG Monitor Curvo 27" pulgadas, sin biseles, FHD 1920x1080, Game Mode, FreeSync, Eco Saving Plus, Flicker Free, 1x HDMI 1.4, 1x D-sub, 4ms(GTG), Dark Blue Gray (LC27R500FHLXZX)'
                        image='https://m.media-amazon.com/images/I/81ocT1HEurL._AC_SL1500_.jpg'
                        price={29999}
                        rating={5}
                    />

                </div>



            </div>
        </div>
    );
}

export default Home;