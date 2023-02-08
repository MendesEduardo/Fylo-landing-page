import logo from './logo.svg'
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import './styles.scss'

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt='Logo' />
            <div className='footerText'>
                <div className='location'>
                    <i><HiLocationMarker /></i>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                    </p>
                </div>
                <div className='contact'>
                    <p>
                        <i><FiPhoneCall /></i>
                        +1-543-123-4567
                    </p>
                    <p>
                        <i><MdEmail /></i>
                        example@fylo.com
                    </p>
                </div>
                <ul>
                    <li>
                        <a href='#'>About Us</a>
                    </li>
                    <li>
                        <a href='#'>Jobs</a>
                    </li>
                    <li>
                        <a href='#'>Press</a>
                    </li>
                    <li>
                        <a href='#'>Blog</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                    <li>
                        <a href='#'>Terms</a>
                    </li>
                    <li>
                        <a href='#'>Privacy</a>
                    </li>
                </ul>
                <ul className='socialMidia'>
                    <li>
                        <i><BsFacebook /></i>
                    </li> <li>
                        <i><AiFillTwitterCircle /></i>
                    </li> <li>
                        <i><BsInstagram /></i>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer