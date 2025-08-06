import { Database } from "lucide-react"

function Skills() {

    return(
        <div className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Explore My Key Development Skills
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        As a full-stack web developer, I specialize in creating dynamic and responsive web applications. My expertise spans across various technologies, ensuring robust and efficient solutions. Let's dive into my core skills that empower me to build exceptional digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* <!-- Skill cards --> */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            {/* <!-- Icon --> */}
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">React JS</h3>
                        <p className="text-gray-600 text-sm mb-4">Building Interactive User Interfaces</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">JSX</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Hooks</span>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                            <Database />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">PostgreSQL</h3>
                        <p className="text-gray-600 text-sm mb-4">PostgreSQL ensures data integrity and performance for my applications.</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Migrations</span>
                            <span>Migrations</span>
                        </div>
                    </div>




                </div>


            </div>
        </div>
    )
}

export default Skills