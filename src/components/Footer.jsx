import { FaRocket } from "react-icons/fa6";
import { handleScroll } from "../hooks/handleScroll";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-max mx-auto py-2 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-2">
                   <h3 className="mb-2 font-bold text-lg ">Ernest's Portfolio</h3>
                   <p className="text-sm mb-4">Thank you for visiting my personal portfolio website. Feel free to reach out for any inquiries or collaborations.</p>
                   <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm">Keep Rising </p>
                    <FaRocket className="inline-block text-yellow-400" />
                   </div>
                   
                </div>

                <div className="p-2 ml-40 w-40">
                    <h3 className="mb-2 font-bold text-lg">Quick Links</h3>
                    <ul className="list-none space-y-2">
                        <li onClick={()=>handleScroll('home')} className="text-gray-300 hover:text-white">Home</li>
                        <li onClick={()=>handleScroll('services')} className="text-gray-300 hover:text-white">Services</li>
                        <li onClick={()=>handleScroll('skills')} className="text-gray-300 hover:text-white"> skills </li>
                        <li onClick={()=>handleScroll('projects')} className="text-gray-300 hover:text-white">Projects</li>
                        <li onClick={()=>handleScroll('contact')} className="text-gray-300 hover:text-white">Contact</li>
                    </ul>
                </div>

                <div className="p-2">
                    <h3 className="mb-2 font-bold text-lg">Contact Info</h3>
                    <p className="text-sm mb-2">Email: <a href="mailto:1.kamauernest@gmail.com" className="text-blue-400 hover:underline">1.kamauernest@gmail.com</a></p>
                    <p className="text-sm mb-2">Phone: <a href="tel:+254745890498" className="text-blue-400 hover:underline">+254712345678</a></p>
                    <p className="text-sm">Location: Nairobi, Kenya</p>
                </div>  
            </div>

      <div className="border border-gray-600 mt-2"></div>

      <div className="text-center mt-2 ">
        <p> Designed with <span className="text-red-500">❤</span> by Ernest Kamau</p>
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Ernest Kamau. All rights reserved.</p> 
      </div>

      </div>
    </footer>
  );
}
export default Footer;