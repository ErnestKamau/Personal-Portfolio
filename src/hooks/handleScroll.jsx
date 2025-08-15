
export const handleScroll = (SectionId) => {
    const section = document.getElementById(SectionId)
    if (section) {
        section.scrollIntoView({behavior: "smooth"})
    }
}