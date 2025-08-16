import { AppWindow } from "lucide-react"
import { FaServer } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"
import { MdOutlineWeb } from "react-icons/md"
import { RiLayoutMasonryLine } from "react-icons/ri"


function Services(){

   return(
        <div id="services" className="bg-gray-150 py-16">
            <div className="max-w-max mx-auto px-6">
                <div className="bg-gray-50 shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-9 ">Services I offer to my clients</h2>
                    <div className="grid grid-col-1 md:grid-cols-3 gap-8">
                        
                        <div className="shadow-md hover:shadow-lg hover:bg-blue-50 transition-all p-6 w-60">
                            <div className="mb-4">
                                <CgWebsite size={24}/>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-700 text-wrap mb-4">Web Development</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                                <span>I create responsive and modern websites tailored to your needs. </span>
                            </div>
                            <div className="px-3 text-sm ">
                                <ul className="list-disc list-inside">
                                    <li>Landing Page</li>
                                    <li>Company Website</li>
                                    <li>Management Systems</li>
                                    <li>E-commerce Websites</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className="shadow-md hover:shadow-lg hover:bg-blue-50 transition-all p-6 w-60">
                            <div className="mb-4">
                                <FaServer/>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-700 text-wrap mb-4">Backend Development</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                                <span>I build robust backend systems to support your web applications.</span>
                            </div>
                            <div className="px-3 text-sm ">
                                <ul className="list-disc list-inside">
                                    <li>Python, Django and Flask</li>
                                    <li>API Development</li>
                                    <li>Server Management</li>
                                    <li>Database Management</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className="shadow-md hover:shadow-lg hover:bg-blue-50 transition-all p-6 w-60">
                            <div className="mb-4">
                                <RiLayoutMasonryLine size={24}/>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-700 text-wrap mb-4">Frontend Development</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                                <span>I create user-friendly interfaces that bring your ideas to life. </span>
                            </div>
                            <div className="px-3 text-sm ">
                                <ul className="list-disc list-inside">
                                    <li>Custom website design</li>
                                    <li>Interactive UI</li>
                                    <li>Modern styling.</li>
                                    <li>API integration for dynamic content</li>
                                </ul>
                            </div>
                            
                        </div>



                    </div>

                </div>

            </div>

        </div>
    )
}

export default Services