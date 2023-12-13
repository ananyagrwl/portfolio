import './skills.scss'

export const Skills = () => {
    return (
        <div className='skills'>
            <div className='textContainer'>
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </div>
            <div className="titleContainer">
                <div className="title">
                    {/* <img src="/assets/people.webp" alt="" /> */}
                    <h1>Unique <b style={{ color: "orange" }}>SKILLS</b></h1>
                </div>
                <div className="title">
                    <h1>To Grow Your <b style={{ color: "orange" }}>BUSINESS</b></h1>
                    <img src="/assets/people.webp" alt="" />
                </div>
            </div>
            <div className="skillContainer">
                <div class="imgS">
                    <div data-aos="fade-right" data-tilt data-tilt-reverse="true" class="cont"><img src="./assets/react.png"
                        alt="" srcset="" /><span>React</span></div>
                    <div data-aos="fade-right" data-tilt data-tilt-reverse="true" class="cont"><img src="./assets/html.png"
                        alt="" /><span>HTML</span></div>
                    <div data-aos="fade-left" data-tilt data-tilt-reverse="true" class="cont"><img src="./assets/css.png"
                        alt="" /><span>CSS</span></div>
                    <div data-aos="fade-left" data-tilt data-tilt-reverse="true" class="cont"><img src="./assets/js.png"
                        alt="" /><span>JS</span></div>
                </div>
                <div class="imgS">
                    <div data-aos="fade-right" data-tilt data-tilt-reverse="true" class="cont"><img src="./assets/node-js.png"
                        alt="" /><span>Node</span></div>
                    <div data-aos="fade-right" data-tilt data-tilt-reverse="true" class="cont"><img src="./assets/cpp.png"
                        alt="" /><span>C++</span></div>
                    <div data-aos="fade-left" data-tilt data-tilt-reverse="true" class="cont"><img src="./assets/python.png"
                        alt="" /><span>Python</span></div>
                    <div data-aos="fade-left" data-tilt data-tilt-reverse="true" class="cont"><img src="./assets/mui.png"
                        alt="" /><span>MUI</span></div>
                </div>
            </div>
        </div>
    )
}
