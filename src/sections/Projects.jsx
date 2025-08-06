import school from '../assets/school.jpg'
import investments from '../assets/investments.jpg'
import commerce from '../assets/e-commerce.jpg'


function Projects() {

    return(
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="border-4 border-blue-600 rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">My Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* <!-- Project card --> */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div style={{backgroundImage: `url(${commerce})`}} className="w-full h-48 bg-cover bg-center flex items-center justify-center"></div>
                            <div className='p-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Rixy E-commerce Site</h3>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>React Javascript</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">API Integration</span>
                                </div>
                                <button className='px-2 text-blue-600 hover:text-blue-700 font-medium text-sm'>Github repo</button>
                                <button className='px-2 text-blue-600 hover:text-blue-700 font-medium text-sm'>Live Demo</button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div style={{backgroundImage: `url(${investments})`}} className="w-full h-48 bg-cover bg-center flex items-center justify-center"></div>
                            <div className='p-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Shirikisha chama management system</h3>
                                <p>Shirikisha is a full-stack web platform that simplifies and digitizes the management of Kenyan chamas (investment groups). Members can create, join, and manage chama groups, track contributions and finances, schedule meetings, make announcements, and assign roles — all in one platform.</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>React Javascript</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Python (Flask)</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">API Integration</span>
                                </div>
                                <button className='px-2 text-blue-600 hover:text-blue-700 font-medium text-sm'>Github repo</button>
                                <button className='px-2 text-blue-600 hover:text-blue-700 font-medium text-sm'>Live Demo</button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div style={{backgroundImage: `url(${school})`}} className="w-full h-48 bg-cover bg-center flex items-center justify-center"></div>
                            <div className='p-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Shuleni</h3>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>React Javascript</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Python (Flask)</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">API Integration</span>
                                </div>
                                <button className='px-2 text-blue-600 hover:text-blue-700 font-medium text-sm'>Github repo</button>
                                <button className='px-2 text-blue-600 hover:text-blue-700 font-medium text-sm'>Live Demo</button>
                            </div>
                        </div>







                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects