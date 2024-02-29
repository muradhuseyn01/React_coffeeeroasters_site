import React from 'react'
import "../components/reset.css"
import "../components/header.css"
import "./home.css"
import Article from "../components/article"
import Header from '../components/header'
import {Link} from "React-router-dom"

export default function Home() {
    return (
        <div className='home__cont'>
            <Header
                image="/src/assets/images/Bitmap-tt.png"
                infoText="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
                infoTitle="Great coffee made simple."
            />
            <button className='header-btn'><Link to="/create">CREATE YOUR PLAN</Link></button>
            <div className='home__cont-coffees'>
                <div className='home__cont-coffees-backImg'>
                    <h1>OUR COLLECTION</h1>
                </div>
                <div className='home__cont-coffees-cards'>

                    <div className='home__coffees-cards-card'>
                        <div className='home__coffees-card-img'>
                            <img src="src/assets/images/kopi1 copy.png" alt="image" />
                        </div>
                        <div className='home__coffees-card-info'>
                            <h3>Gran Espresso</h3>
                            <p>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                        </div>
                    </div>

                    <div className='home__coffees-cards-card'>
                        <div className='home__coffees-card-img'>
                            <img src="src/assets/images/kopi1 copy.png" alt="image" />
                        </div>
                        <div className='home__coffees-card-info'>
                            <h3>Planalto</h3>
                            <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
                        </div>
                    </div>

                    <div className='home__coffees-cards-card'>
                        <div className='home__coffees-card-img'>
                            <img src="src/assets/images/kopi1 copy.png" alt="image" />
                        </div>
                        <div className='home__coffees-card-info'>
                            <h3>Piccollo</h3>
                            <p>Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
                        </div>
                    </div>

                    <div className='home__coffees-cards-card'>
                        <div className='home__coffees-card-img'>
                            <img src="src/assets/images/kopi1 copy.png" alt="image" />
                        </div>
                        <div className='home__coffees-card-info'>
                            <h3>Danche</h3>
                            <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='home__cont-features'>
                <div className='home__cont-features-main'>
                    <div className='home__cont-features-detail'>
                        <h2>Why choose us?</h2>
                        <p>A large part of our role is choosing which particular coffees will be featured
                            in our range. This means working closely with the best coffee growers to give
                            you a more impactful experience on every level.</p>
                    </div>
                </div>
                <div className='home__cont-features-cards'>
                    <div className='home__cont-features-card'>
                        <div className='home__cont-features-card-img'>
                            <img src="src/assets/images/coffee-bean.png" alt="img" />
                        </div>
                        <div className='home__cont-features-card-info'>
                            <h3>Best quality</h3>
                            <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </div>
                    </div>

                    <div className='home__cont-features-card'>
                        <div className='home__cont-features-card-img'>
                            <img src="src/assets/images/Combined Shape.png" alt="img" />
                        </div>
                        <div className='home__cont-features-card-info'>
                            <h3>Exclusive benefits</h3>
                            <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                        </div>
                    </div>

                    <div className='home__cont-features-card'>
                        <div className='home__cont-features-card-img'>
                            <img src="src/assets/images/Combined Shape (1).png" alt="img" />
                        </div>
                        <div className='home__cont-features-card-info'>
                            <h3>Free shipping</h3>
                            <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home__cont-works'>
            <h4>How it works</h4>
            <Article />
            <button className="home__cont-btn"><Link to="/create">CREATE YOUR PLAN</Link></button>
            </div>
        </div>
    )
}
