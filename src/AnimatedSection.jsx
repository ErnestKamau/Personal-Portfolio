import { useInViewAnimation } from "./hooks/useInViewAnimation";
import PropTypes from "prop-types";

function AnimatedSection({children}) {
    const [viewRef, isVisible] = useInViewAnimation()

    return (
        <section 
        ref={viewRef}
        className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} `}
        >
            {children}
            
        </section>
    )
}

AnimatedSection.propTypes = {
    children: PropTypes.node.isRequired
}

export default AnimatedSection