import { FaHeadset } from "react-icons/fa6"
import { MdPerson, MdEmail, MdPhone, MdMessage } from 'react-icons/md';


function Contact(){
    return(
        <div id='contact' className="flex-row-reverse bg-blue-100 py-8 items-center justify-center">
            <div className="text-center flex justify-center gap-2 mb-4">
                <FaHeadset size={34}/>
                <h2 className="text-4xl">Get In <span className="text-purple-700">Touch</span></h2>
            </div>

             <div className="max-w-max mx-auto px-6">
                <div className="w-[90vh] relative flex items-center justify-center rounded-lg shadow-lg bg-white">
                    <div>
                        <form className="flex flex-col gap-4 p-8">
                            <input 
                                type="text" 
                                placeholder="Name"
                                className="w-100 p-2 border bg-blue-100 border-[#2506ad] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                            />
                            <input 
                                type="email" 
                                placeholder="Email"
                                className="p-2 border bg-blue-100 border-[#2506ad] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                            />

                            <input
                                type="text"
                                placeholder="phone number"
                                className="p-2 border bg-blue-100 border-[#2506ad] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                            />

                            <textarea 
                                placeholder="Message"
                                className="p-2 border bg-blue-100 border-[#2506ad] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 h-32"
                            ></textarea>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#2506ad] text-white rounded-md hover:bg-blue-700 hover:shadow-lg font-bold shadow-glow-lg hover:shadow-blue-500/50 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form> 
                    </div>

                </div>
             </div>

                
        </div>

    )
}

export default Contact