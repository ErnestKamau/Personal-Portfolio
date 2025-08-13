import school from '../assets/school.jpg'
import investments from '../assets/investments.jpg'
import commerce from '../assets/e-commerce.jpg'
import laptop from '../assets/Laptop.jpg'
import { Divide } from 'lucide-react'


function Projects() {

    return(
        <div className="py-16 bg-gray-50">
            <div className="max-w-max mx-auto px-6">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">My Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* <!-- Project card --> */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div style={{backgroundImage: `url(${investments})`}} className="w-full h-48 bg-cover bg-center flex items-center justify-center"></div>
                            <div className='p-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Shirikisha chama management system</h3>
                                <p className='px-3 mb-1 font-light text-sm'>Shirikisha is a full-stack web platform that digitizes and streamlines the management of Kenyan chamas (investment groups). The system enables users to create, join, and manage groups, track contributions, schedule meetings, make announcements, and assign roles through a modern React frontend and a secure Python (Flask) backend. </p>
                                <p className='px-3 mb-1 font-light text-sm'>The project utilizes the following backend architecture concepts and development patterns & techniques :</p>
                                <p className='px-3 mb-0.5 font-light text-sm'><b>RESTful API</b>: The backend exposes RESTful endpoints for CRUD operations on resources such as groups, members, meetings, and contributions.<em>Consumed in the frontend via Axios (see utils/axios.js).</em></p>
                                <p className='px-3 mb-0.5 font-light text-sm'><b>ORM-Based Data Modeling (SQLAlchemy)</b>:  <em className='font-bold'>SQLAlchemy</em> was used for data modeling and relationship management, with <em>Alembic</em> handling database migrations. </p>
                                <p className='px-3 mb-0.5 font-light text-sm'><b>JWT Token Authentication</b>: Authentication is handled using JSON Web Tokens (JWT). Users log in and receive a token, which is sent with each <em>API request</em> for authorization.</p>
                                <p className='px-3 mb-0.5 font-light text-sm'><b>Role-Based Access Control</b>: Different user roles (admin, secretary, treasurer, member) have different permissions for actions. <em>Backend: Role checks in API endpoints (e.g., only secretaries can schedule meetings).</em><em>Frontend: UI elements conditionally rendered based on role (see isAdmin, isSecretary, isTreasurer in ChamaDetailPage.jsx).</em></p>
                                <p className='px-3 mb-0.5 font-light text-sm'><b>Data Serialization</b>: Backend uses serialization to convert SQLAlchemy models to JSON for API responses. <em className='font-extralight'><b>SerializerMixin </b></em>in models </p>
                                <p className='px-3 mb-3 font-light text-sm'>The frontend uses React hooks for state management and Tailwind CSS for responsive design, while Axios facilitates seamless communication with the backend. CORS is configured to enable safe cross-origin requests, and error handling is implemented throughout to provide clear feedback to users.</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <span className='px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium'>React Js</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Python (Flask)</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">RESTful API</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">JWT-based token authentication</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Role-Based Access Control</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">SQLAlchemy ORM</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">State Management (React Hooks)</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Axios </span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">CORS</span>
                                </div>
                                <button className='px-2 text-blue-600 hover:text-blue-900 font-medium text-sm' onClick={()=>{window.open(
                                    "https://github.com/ErnestKamau/Shirikisha--chama-management-system/tree/ernest",
                                    "_blank",
                                    "noopener,noreferrer"
                                )}}>
                                    Github repo
                                </button>
                                <button className='px-2 text-blue-600 hover:text-blue-900 font-medium text-sm' onClick={()=>{window.open(
                                    "https://shirikisha-investment-groups-manager.onrender.com/",
                                    "_blank",
                                    "noopener,noreferrer"
                                )}}
                                >
                                    Live Demo
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div style={{backgroundImage: `url(${school})`}} className="w-full h-48 bg-cover bg-center flex items-center justify-center"></div>
                            <div className='p-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Shuleni</h3>
                                <p className='px-3 mb-1 font-light text-sm'>Shuleni is a full-stack school management platform that brings the entire physical school experience online. It enables school owners to create and manage schools, assign students and educators to classes, upload resources, conduct assessments, and track attendance—all through a secure, role-based web interface.</p>
                                <p className='px-3 mb-1 font-light text-sm'>The backend uses a well-structured <em><b>RESTful API</b></em>, where each resource (such as schools, classes, users, assessments, and submissions) is mapped to a dedicated endpoint, supporting standard HTTP methods for CRUD operations.</p>
                                <p className='px-3 mb-1 font-light text-sm'>I worked with a team to develop this web app and i contributed by implementing the following features: </p>
                                <p className='px-3 mb-1 font-light text-sm'><b>Authentication and authorization</b>: Enforced using JWT (JSON Web Tokens), implemented via the <em><b>flask_jwt_extended library.</b></em> Each user receives a signed token upon login, which must be included in subsequent requests to access protected endpoints.</p>
                                <p className='px-3 mb-1 font-light text-sm'><b>Role-based access control</b>: Implemented throughout the API, ensuring that only users with appropriate roles (e.g., owner, educator, student) can perform certain actions, such as grading assessments or managing class memberships.</p>
                                <p className='px-3 mb-1 font-light text-sm'><b>Password security</b>: Hashed all user passwords using <b>Bcrypt</b>(Provided by <em>flask_bcrypt</em> extension) before storage, protecting user credentials even in the event of a data breach.</p>
                                <p className='px-3 mb-3 font-light text-sm'><b>Data serialization and validation</b>: Managed by <em><b>Marshmallow</b></em> and <em>marshmallow_sqlalchemy</em> . Used Custom schemas to serialize <em>ORM model</em> instances into <em>JSON</em> for <em>API responses</em> and validate incoming data for correctness and completeness, reducing the risk of invalid or malicious input.</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>React Js</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Python (Flask)</span>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>Tailwind CSS</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">RESTful API</span>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>JWT-based token authentication</span>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>Bcrypt</span>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>Marshmallow</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">SQL Alchemy ORM</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">State Management (React Hooks)</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Axios</span>
                                </div>
                                <button className='px-2 mt-3 text-blue-600 hover:text-blue-900 font-medium text-sm' onClick={()=>{window.open(
                                    "https://github.com/Samsimion/Shuleni/tree/ernest",
                                    "_blank",
                                    "noopener,noreferrer"
                                )}}>
                                    Github repo
                                </button>
                                <button className='px-2 mt-3 text-blue-600 hover:text-blue-900 font-medium text-sm' onClick={()=>{window.open(
                                    "https://shuleni-zt8u.onrender.com/",
                                    "_blank",
                                    "noopener,noreferrer"
                                )}}>
                                    Live Demo
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div style={{backgroundImage: `url(${commerce})`}} className="w-full h-48 bg-cover bg-center flex items-center justify-center"></div>
                            <div className='p-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>Rixy E-commerce Site</h3>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>React Javascript</span>
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">API Integration</span>
                                </div>
                                <button className='px-2 text-blue-600 hover:text-blue-700 font-medium text-sm' onClick={()=>{window.open(
                                    "https://github.com/ErnestKamau/rixy-e-commerce/tree/ernest",
                                    "_blank",
                                    "noopener,noreferrer"
                                )}}>
                                    Repository Branch
                                </button>
                                <button className='px-2 text-blue-600 hover:text-blue-700 font-medium text-sm'>Live Demo</button>
                            </div>
                        </div>
                        
                        <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                            <div style={{backgroundImage: `url(${laptop})`}} className='w-full h-48 bg-cover bg-center flex items-center justify-center'></div>
                            <div className='p-6'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>CLI-inventory-manager</h3>
                                <p className='px-2 font-light mb-3 text-sm'>This project demonstrates a CLI application design, (SQLAlchemy)ORM-based data modelling, Relationship configuration(defining how tables and their corresponding Python classes are related), services layer abstraction, and database migration management, all within a Python environment.</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium'>Python</span>
                                    <span className='px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium'>Object-Relational Mapping(SQLAlchemy)</span>
                                </div>
                            </div>
                        </div>







                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects