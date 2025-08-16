import { AppWindow } from "lucide-react"

function Services(){

   return(
        <div id="services" className="bg-gray-150 py-16">
            <div className="max-w-max mx-auto px-6">
                <div className="bg-gray-50 shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-9 ">Services I offer to my clients</h2>
                    <div className="grid grid-col-1 md:grid-cols-3 gap-8">
                        
                        <div className="shadow-md hover:shadow-lg transition-shadow p-6 w-60">
                            <div className="mb-4">
                                <AppWindow/>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-700 text-wrap mb-4">Web Development</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                                <span>I create responsive and modern websites tailored to your needs.</span>
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

                        



                    </div>

                </div>

            </div>

        </div>
    )
}

export default Services