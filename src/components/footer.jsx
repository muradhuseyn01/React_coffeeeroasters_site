import React from 'react'
import "./reset.css"
import "./footer.css"
import { Link } from 'React-router-dom'

export default function footer() {
    return (
        <div className='container__foot'>
            <div className="container__foot-up">
                <div className="container__foot-logo">
                    <img src="/src/assets/images/white.png" alt="image" />
                </div>
                <div className="container__foot-pages">
                    <ul>
                        <li> <Link to="/">HOME</Link> </li>
                        <li> <Link to="/about">ABOUT US</Link> </li>
                        <li> <Link to="/create">CREATE YOUR PLAN</Link> </li>
                    </ul>
                </div>

                <div className="container__foot-sosial">
                    <ul>
                        <li> <Link to="#"><img src="/src/assets/icons/Path.png" alt="image" /></Link> </li>
                        <li> <Link to="#"><img src="/src/assets/icons/Path (1).png" alt="image" /></Link> </li>
                        <li> <Link to="#"><img src="/src/assets/icons/Shape.png" alt="image" /></Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
