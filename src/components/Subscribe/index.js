import start from '../../assets/startplaying.svg'

import './style.css'
const Subscribe = () =>{

    return(
        <div className="subscribe">  
            <div className="text">
                 !اشترك في تحدي بليغ الآن لفرصة ربح العديد من الجوائز
            </div>
            <div className="image">
                <img src={start} alt="start icon" className="start-icon" />
            </div>
        </div>
    )
    
}

export default Subscribe;
