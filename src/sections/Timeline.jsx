

function Timeline() {
    
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            My Journey in Web Development
          </h2>

          <div className="relative">
            {/* <!-- Timeline line --> */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300"></div>

            {/* <!-- Timeline item --> */}
            <div className="relative flex items-start mb-8">
              {/* <!-- Timeline dot --> */}
              <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 relative z-10"></div>

              {/* <!-- Content --> */}
              <div className="ml-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-900">2024</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Flutter Development
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Description of achievements...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Timeline