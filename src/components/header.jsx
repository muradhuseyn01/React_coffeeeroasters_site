import "./reset.css"
import "./header.css"
import {Link} from 'React-router-dom'

function Header(probs) {
   // let skills = ["HOME", "ABOUT US", "CREATE YOUR PLAN"]; <button className="header-btn"><Link to="/create">CREATE YOUR PLAN</Link></button>
   const {infoText, infoTitle, image} =probs;

    return (
        <div className="container__head">
            <div className="container__head-up">
                <div className="container__head-logo">
                    <img src="/src/assets/images/Group 5.png" alt="image" />
                </div>
                <div className="container__head-pages">
                    <ul>
                            <li> <Link to="/">HOME</Link> </li>
                            <li> <Link to="/about">ABOUT US</Link> </li>
                            <li> <Link to="/create">CREATE YOUR PLAN</Link> </li>
                    </ul>
                </div>
            </div>

            <div className="container__head-down">
            <div className="container__head-img">
            <img src={image} alt="image" />
            </div>
                <div className="container__head-info">
                    <h1>{infoTitle}</h1>
                    <p>{infoText}</p>
                    
                </div>
            </div>
        </div>
    )
}
export default Header;