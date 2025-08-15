function Navbar() {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({behavior: "smooth"})
        }
    }

    return(
        <nav className="fixed top-0 left-0 w-full bg-white shadow p-4 z-50 flex gap-6">
            <button onClick={()=>handleScroll('home')}> Home </button>
            <button onClick={()=>handleScroll('')}> About-me </button>
            <button onClick={()=>handleScroll('skills')}> skills </button>
            <button onClick={()=>handleScroll('projects')}> projects </button>
        </nav>
    )

}

export default Navbar

