import React, { useRef,useState } from "react";
import "./contact.scss"
import {animate, motion,useInView} from "framer-motion"
import emailjs from '@emailjs/browser';
const variants ={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}

const Contact=()=>{
    const ref =useRef();
    const formRef=useRef();
    const [error,setError] = useState(false);
    const [success,setSuccess]= useState(false);
    const isInView=useInView(ref,{margin:"-100px"})
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_27ubwkh', 'template_c4ihotp', formRef.current, {
            publicKey: 'sTNornpn-Wbviz97x',
          })
          .then(
            (result) => {
                setSuccess(true);
            },
            (error) => {
                setError(true);
            },
          );
      };
    return(
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's Work together</motion.h1>
                <motion.div className="item">
                    <h2>Mail</h2>
                    <span>nischal.shrestha@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>5 Yorkmill,Scarborough</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>433-555-555</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}}>

                    <svg fill="none" initial={{pathLength:0}} animate={isInView &&{pathLength:1}} transition={{duration:3}} strokeWidth={0.2} width="450px" height="450px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

                           <title/>

                          <g data-name="Layer 39" id="Layer_39">

                               < path d="M21.19,6.52l3.26-1.63a1,1,0,0,0-.9-1.78l-6,3,0,0h0l-.07.07a.93.93,0,0,0-.18.16.76.76,0,0,0-.08.11l-.1.2,0,.14A.82.82,0,0,0,17,7s0,.09,0,.14,0,0,0,.05a.5.5,0,0,0,.09.21.64.64,0,0,0,0,.07l3,5A1,1,0,0,0,21,13a1,1,0,0,0,.51-.14,1,1,0,0,0,.35-1.37L19.91,8.24A8,8,0,0,1,18,24a1,1,0,0,0,0,2A10,10,0,0,0,21.19,6.52Z"/>

                               <path d="M14,8a1,1,0,0,0,0-2,10,10,0,0,0-3.19,19.48L7.55,27.11a1,1,0,0,0-.44,1.34A1,1,0,0,0,8,29a.93.93,0,0,0,.45-.11l6-3s0,0,0,0h0a.46.46,0,0,0,.07-.07.93.93,0,0,0,.18-.16.76.76,0,0,0,.08-.11,1.86,1.86,0,0,0,.1-.2l0-.14A.78.78,0,0,0,15,25a.66.66,0,0,1,0-.14s0,0,0-.05a.78.78,0,0,0-.09-.21.64.64,0,0,0,0-.07l-3-5a1,1,0,0,0-1.72,1l1.95,3.25A8,8,0,0,1,14,8Z"/>

                           </g>

                    </svg>
                    
                </motion.div>
                <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4,duration:1}}>
                       <input type="text" required placeholder="Name" name="name"/>
                      <input type="email" required placeholder="Email" name="email"/>
                      <textarea rows={6} cols={60} placeholder="Message" name="message"/>
                      <button>Send Message</button>
                      {error &&"Error"}
                      {success && "Success"}
              </motion.form>
            </div>
        </motion.div>
    )
}
export default Contact
