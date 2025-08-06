import image from '../assets/Dark.jpg'

function Hero() {
   
    return(
        <div style={{ backgroundImage: `url(${image})` }} className="bg-cover bg-center text-white h-[500px] flex items-center justify-center">
            <div className='max-w-4xl mx-auto px-6 text-center'>
                <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                    Crafting Innovative Solutions in Web Development
                </h1>
                <p className='text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
                    As a full-stack web developer, I specialize in creating dynamic and responsive web applications using ReactJS, Python, and PostgreSQL. My passion for design and functionality ensures that every project I undertake is both visually appealing and user-friendly.
                </p>
            </div>
        </div>
    )
}

export default Hero