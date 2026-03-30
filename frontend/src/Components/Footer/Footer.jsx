import './Footer.css'
import Footer_logo from '../../assets/logo_big.png'
import IG_icon from '../../assets/instagram_icon.png'
import Pinterest_icon from '../../assets/pintester_icon.png'
import Whatsapp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Footer_logo} alt="" />
            <p>TRADEZY</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icon-container">
                <img src={IG_icon} alt="" />
                <img src={Pinterest_icon} alt="" />
                <img src={Whatsapp_icon} alt="" />
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @2026 - All rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer