import logo from '../../assets/logo.svg'
import girl from '../../assets/girl.svg'
import bar from '../../assets/bar.svg'
import money from '../../assets/money.svg'
import learn from '../../assets/learn.svg'
import test from '../../assets/test.svg'

import './style.css'

const Header = () =>{
    return(      
        <div class="header">
            <div class="header-right">
                <a target="_blank" href="#">
                    <img src={logo} alt="Baleegh logo" className="logo" />
                </a>
                <ul class="menu">
                    <li>
                        <img src={learn} alt="learn icon"  />
                        <a href="#">تعلم  </a>
                    </li>
                    <li>
                        <img src={test} alt="test icon"  />
                        <a href="#">اختبر</a>    
                    </li>
                </ul>
            </div>

            <div class="header-left">
                    <img src={money} alt="money icon" className="money"  />
                    <img src={bar} alt="bar icon" className="bar" />
                    <img src={girl} alt="girl icon" className="girl" />
            </div>    
        </div>      
        
    )
    
}

export default Header;
