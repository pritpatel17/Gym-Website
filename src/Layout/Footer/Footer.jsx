import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <p className="FooterLink">&copy; Prit Patel</p>
                <div className="footerDetails">
                    <p>3rd Floor, MY FITNESS ZONE GYM, DR WORLD MALL, Aai Mata Rd, opp. SMC Community Hall, Parvat Patiya, Surat, Gujarat 395010</p>
                    <p>Mobile: <a href="tel:+918780370532">+91 8780370532</a></p>
                    <p>Timing: 5:30 am to 10 pm</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
