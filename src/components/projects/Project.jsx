import { useRef } from 'react';
import './project.scss';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "WHISPER WALLS",
        img: "/assets/whisperwalls.png",
        desc: "This website offers you a platform where you can share your secrets or confessions anonymously with the world. It is integrated with Google Authentication.",
        link: "https://github.com/ananyagrwl/whisper_walls_frontend"    
    },
    {
        id: 2,
        title: "SPOTIFY CLONE",
        img: "/assets/spotify.png",
        desc: "Recreation of a very popular, user friendly music platform, Spotify",
        link: "https://ananyagrwl.github.io/Spotify-Clone/"
    },
    // {
    //     id: 3,
    //     title: "FLIGHT ENQUIRY SYSTEM",
    //     img: "/assets/farm-expert.png",
    //     desc: "A platform for flight admins. It has all the features required by an admin to add new flights and update/delete them.",
    //     link: "https://github.com/ananyagrwl/Flight-Enquiry-System"
    // },
    {
        id: 3,
        title: "AYURMEDIC",
        img: "/assets/ayur.png",
        desc: "Focused on prescribing ayuvedic medicines to humans, this project will give the ayurvedic knowledge in a concise way on one single platform.",
        link: "https://github.com/Ayurmedic/ayurmedicFrontend"
    },
    {
        id: 4,
        title: "GEEKS LEARN EASY",
        img: "/assets/gle.png",
        desc: "This project is mainly focused on the students. It provides assistance in the problem of maintain notes during exams. It also provides explanation of topics in Hinglish language",
        link: "https://github.com/Geeks-Learn-Easy/Geeks-Learn-Easy"
    },
    {
        id: 5,
        title: "AUTHO",
        img: "/assets/autho.png",
        desc: "Autho is an authentication tool that facilitates user login through email verification using a One-Time Password (OTP). Upon registering, a verification mail containing the OTP is sent to the user's email address. The user must enter the OTP on the website to complete the login process.",
        link: "https://github.com/ananyagrwl/auth_frontend"    
    },
    {
        id: 6,
        title: "FARM EXPERT",
        img: "/assets/farm-expert.png",
        desc: "This project contains potential to help the farmers in all the ways possible. It was a team project. Our main focus was on helping the farmers to know the crops which can grow on the current soil conditions and the soil condition required for growing a particular crop. I worked as the Front-end Developer and helped with ML parts.",
        link: "https://front2-beta.vercel.app/"    
    },
    {
        id: 7,
        title: "GENERAL STORE",
        img: "/assets/general.png",
        desc: "A general store from the admin side of a company. It has all the features of managing a online store from a website.",
        link: "https://github.com/ananyagrwl/General-Store-FrontEnd"
    }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref});
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    {/* <motion.div className="textContainer" style={{y}}> */}
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target='blank'><button>Visit GitHub</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export const Project = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='project' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}
