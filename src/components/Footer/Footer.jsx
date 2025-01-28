import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
const Footer = () => {
    return (
        <div className="" >
            <div className="w-full bg-[url('../../../images/more/13.jpg')] ranch text-[#331A15] ">
                <div className="flex flex-col-reverse lg:flex-row lg:justify-between p-5 lg:px-[200px] lg:pt-[100px] lg:pb-7">
                    <div className="w-full lg:w-2/5">
                        <div className="w-10 h-10"><img src="../../../images/more/logo1.png" alt="" /></div><br />
                        <h1 className="font-bold text-lg lg:text-4xl">Espresso Emporium</h1><br />
                        <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p><br />
                        <div className="flex space-x-2">
                            <div className="w-5 h-5 lg:w-10 lg:h-10"><img src="../../../images/icons/Group 24.png" alt="" /></div>
                            <div className="w-5 h-5 lg:w-10 lg:h-10"><img src="../../../images/icons/Group 25.png" alt="" /></div>
                            <div className="w-5 h-5 lg:w-10 lg:h-10"><img src="../../../images/icons/Group 26.png" alt="" /></div>
                            <div className="w-5 h-5 lg:w-10 lg:h-10"><img src="../../../images/icons/facebook-3-2 1.png" alt="" /></div>
                        </div><br />
                        <h1 className="font-bold text-lg lg:text-4xl">Get in Touch</h1><br />
                        <div className="flex items-center space-x-1"><FaPhoneAlt/> <p>+88 01533 333 333</p></div>
                        <div className="flex items-center space-x-1"><IoMail /><p>info@gmail.com</p></div>
                        <div className="flex items-center space-x-1"><IoLocation /><p>72, Wall street, King Road, Dhaka</p></div>
                    </div>
                    <div className="w-full lg:w-2/5 py-4 lg:pt-[55px]">
                        <h1 className="font-bold text-lg lg:text-4xl">Connect with Us</h1><br />
                        <form action="">
                            <input className="w-11/12 p-2 mb-2  border-0 bg-white text-gray-400" type="text" name="name" placeholder="Your Name" id="" /><br />
                            <input className="w-11/12 p-2 mb-2 border-0 bg-white text-gray-400" type="email" name="email" placeholder="Your Email" id="" /><br />
                            <textarea className="w-11/12 p-2 mb-2 border-0 bg-white text-gray-400" name="message" placeholder="Your Message" id="" cols="60" rows="5"></textarea>
                            <button className="p-3 rounded-3xl text-[#331A15] border-2 border-[#331A15]" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full h-[30px] bg-[url('../../../images/more/24.jpg')] "></div>

        </div>
    );
};

export default Footer;