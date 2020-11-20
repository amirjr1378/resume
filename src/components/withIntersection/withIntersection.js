import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

/**
 * animate when we see the component on the screen
 * @param {RC} Component
 * @param {object} from
 * @param {object} to
 * @param {object} config
 * @param {boolean} loop
 */
function useIntersection(Component, from, to, config, loop = false) {
  const NewComponent = ({ wrapperProps = {}, ...props }) => {
    const [isIntersected, setIsIntersected] = useState(false);
    const options = isIntersected ? to : from;
    if (config) {
      options.config = config;
    }

    const animationStyles = useSpring(options);

    const ref = useRef();
    useEffect(() => {
      const options = {
        margin: "100px",
      };
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("intersect");
            setIsIntersected(true);
          } else {
            loop && setIsIntersected(false);
          }
        });
      };
      const observer = new window.IntersectionObserver(callback, options);
      ref.current && observer.observe(ref.current);
    }, []);
    return (
      <animated.div style={animationStyles} ref={ref} {...wrapperProps}>
        <Component {...props} />
      </animated.div>
    );
  };

  return NewComponent;
}

export default useIntersection;
