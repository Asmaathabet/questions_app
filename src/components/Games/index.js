import brain from '../../assets/brain.svg'
import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.svg'
import card3 from '../../assets/card3.svg'
import card4 from '../../assets/card4.svg'
import card5 from '../../assets/card5.svg'
import card6 from '../../assets/card6.svg'

import {Link } from 'react-router-dom';


import './style.css'
const Games = () =>{

    return(
        <div className="Games"> 
            <div className="title">
                <div className="image"><img src={brain} alt="brain icon" className="brain-icon" /></div>
                 <div className="text"><p>ألعاب بليغ</p></div>     
            </div>
            <ul className="cards">
                <li><Link to="/question"><img src={card1}/></Link></li>
                <li><a href="#"><img src={card2}/></a></li>
                <li><a href="#"><img src={card3}/></a></li>
                <li><a href="#"><img src={card4}/></a></li>
                <li><a href="#"><img src={card5}/></a></li>
                <li><a href="#"><img src={card6}/></a></li>
            </ul> 
        </div>
    )
    
}

export default Games;
