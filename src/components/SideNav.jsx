import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { IoMdClose } from "react-icons/io";
import Links from "./Links";


function SideBar({ onClose }) {
    const [isClosing, setIsClosing] = useState(false); 

    const handleClose = () => {
        setIsClosing(true); 
        setTimeout(() => {
            onClose(); 
        }, 100); 
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div
            className={`fixed inset-0 sideBar ${isClosing ? 'fade-out' : ''} bg-footer`}
            data-aos="fade-right"
            data-aos-duration="600"
        >
            <IoMdClose size={32} onClick={handleClose} className='mb-7' />
            <ul className='nav-list flex flex-col gap-3 mb-3'>
            <Links to="home" onClick={onClose}>Home</Links>
            <Links to="about" onClick={onClose}>About</Links>
            <Links to="courses" onClick={onClose}>Courses</Links>
            <Links to="reviews" onClick={onClose}>Reviews</Links>
            <Links to="contact" onClick={onClose}>Contact</Links>
            </ul>
        </div>
    );
}

export default SideBar;
