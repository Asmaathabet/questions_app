import './style.css'

const Footer = () =>{
    return(
        <div className="footer">   
        <div className="first"> 
        <ul>
            <li>عن بليغ</li>
            <li>الأسئلة الشائعة</li>
            <li>الخصوصية</li>
            <li>المدونة</li>
            <li>أصدقاء بليغ</li>
        </ul>
            </div>  
        <div className="second"> 
        <div class="copyright">
            جميع الحقوق محفوظة &copy; شركة فصيح لتقنية المعلومات 2020
        </div>
        <div className="socialMedia">
            <i class="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
        </div>
        </div>    
        </div>
    ) 
}

export default Footer;
