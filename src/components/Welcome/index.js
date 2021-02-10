import start from '../../assets/startplaying.svg'
import plant from '../../assets/plant.svg'
import ability from '../../assets/ability.svg'

import './style.css'

const Welcome = () =>{

    return(
        <div className="Welcome">  
            <div className="images">
                <img src={plant} alt="plant icon" className="plant-icon" />
                <img src={ability} alt="ability icon" className="ability-icon" />
            </div> 
            <div className="texts">
                <h3>مرحباً ميس</h3>
                <p>ابدأ بتدريبك اليومي لتقوية مهاراتك، أو اختر مهارة معينة من ألعاب بليغ</p>
                <div className="buttons">
                    <button className="training">التدريب اليومي </button>
                    <button className="share">اشترك الآن </button>
                </div>
            </div>   
        </div>
    )
    
}

export default Welcome;
