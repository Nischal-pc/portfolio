import React ,{useRef}from "react";
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from  'framer-motion';
const items =[
    {
        id:1,
        title:"Nick",
        img:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"As a delighted client of Nischal's web development services, I wholeheartedly recommend their work. They've created an impressive website for me, showcasing their talent and dedication. I'm grateful for their exceptional service and highly recommend them to anyone seeking top-notch web development"
    },
    {
        id:2,
        title:"Gracy",
        img:"https://images.pexels.com/photos/774866/pexels-photo-774866.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"As a delighted client of Nischal, I am thrilled to recommend their exceptional services to anyone in need. Their professionalism, expertise, and dedication were evident throughout our collaboration, resulting in outstanding results. I am truly grateful for their excellent service and wouldn't hesitate to work with them again in the future. Highly recommended"
    },
    {
        id:3,
        title:"Luci",
        img:"https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"As a delighted client of Nischal, I am thrilled to recommend their exceptional services to anyone in need. Their professionalism, expertise, and dedication were evident throughout our collaboration, resulting in outstanding results. I am truly grateful for their excellent service and wouldn't hesitate to work with them again in the future. Highly recommended"
    },
    {
        id:4,
        title:"Logan",
        img:"https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"As a delighted client of Nischal, I am thrilled to recommend their exceptional services to anyone in need. Their professionalism, expertise, and dedication were evident throughout our collaboration, resulting in outstanding results. I am truly grateful for their excellent service and wouldn't hesitate to work with them again in the future. Highly recommended"
    }
]
const Single =({item})=>{
    const ref = useRef();
    const {scrollYProgress}=useScroll({target:ref});
    const y=useTransform(scrollYProgress,[0,1],[200,-200]);
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                       <img src={item.img} alt=""/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Contact</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio =()=>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"],});
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });
    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>What Our Customer Has  To Say About Us</h1>
                <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}
export default Portfolio;