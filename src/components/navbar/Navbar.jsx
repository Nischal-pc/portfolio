import"./navbar.scss"
import Sidebar from "../sidebar/Sidebar";
import {motion} from "framer-motion"
import React from "react";
const Navbar  = () => {
    return (
        <div className="navbar">
            {/*sideebar*/}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0,scale:0.5}}animate={{opacity:1,scale:1}} transition={{duration:0.5}}>निश्चल श्रेष्ठ</motion.span>
                <div className="social">
                    <a href="#"><img src="/linkedin.png" alt="" /></a>
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar