import { useRef } from "react";
import "./parallax.scss";
import {motion,useScroll,useTransform} from "framer-motion";

const backgrounds = {
  services: "linear-gradient(180deg,#111132,#0c0c1d)",
  portfolio: "linear-gradient(180deg,#111132,#505064)",
};

const Parallax = (type) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start start","end start"]
    });
    const yBg=useTransform(scrollYProgress,[0,1],["0%","500%"])
  return (
    <div className="parallax" ref={ref} style={{ background: backgrounds[type] }}>
      <motion.h1 style={{"y":yBg}}>{type === "services" ? "What i Do?" : "What i did?"}</motion.h1>
      <motion.div  className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div  style={{"x":yBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;