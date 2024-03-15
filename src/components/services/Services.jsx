import"./services.scss"
import {color, motion} from "framer-motion";
const Services = () => {
    return(
        <motion.div className="services">
            <div className="textContainer">
                <p>Just learn new Skills <br/> so i can show case  them to you.</p>
            </div>
            <motion.div className="titleContainer">
                <div className="title">
                     <img src="/people.webp" alt="" />
                     <h1><motion.b whileHover={{color:"orange"}}>Cloud Enthuasist</motion.b></h1>
                </div>
                <div className="title">
                     <h1><motion.b whileHover={{color:"orange"}}>Know more</motion.b>about me</h1>
                     <button>WHAT I DO</button>
                </div>
                
            </motion.div>
            <motion.div className="listContainer">
                <div className="box">
                    <h2>Coding</h2>
                    <p>Coding, also known as programming, is the process of designing and building executable computer programs to accomplish a specific task or solve a particular problem. It involves writing a series of instructions, usually in a programming language, that a computer can understand and execute. The goal of coding is to create software applications, websites, or scripts that perform desired functions or automate certain tasks.</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Cloud</h2>
                    <p>
                        In the context of computing, the term "cloud" refers to a network of remote servers that store and manage data and run applications over the internet. This model contrasts with traditional computing, where data and applications are stored on local devices or servers. Cloud computing provides a range of services and resources that can be accessed and managed remotely</p>
                    <button>GO</button>
                </div>
                <div className="box">
                    <h2>AI </h2>
                    <p>I, or Artificial Intelligence, is a branch of computer science that focuses on creating systems that can perform tasks that typically require human intelligence. These tasks include problem-solving, learning, speech recognition, decision-making, and language translation, among others</p>
                    <button>GO</button>
                </div>
            </motion.div>
        </motion.div>
    )

}
export default Services