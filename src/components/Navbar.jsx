import { handleScroll } from "../hooks/handleScroll"

function Navbar() {

    return(
        <nav className="fixed top-0 left-0 w-full bg-white shadow p-4 z-50 flex gap-6">
            <button onClick={()=>handleScroll('home')}> Home </button>
            <button onClick={()=>handleScroll('services')}>Services</button>
            {/* <button onClick={()=>handleScroll('about-me')}> About-me </button> */}
            <button onClick={()=>handleScroll('skills')}> skills </button>
            <button onClick={()=>handleScroll('projects')}> projects </button>
            <button onClick={()=>handleScroll('contact')}>Contact</button>
        </nav>
    )

}

export default Navbar

