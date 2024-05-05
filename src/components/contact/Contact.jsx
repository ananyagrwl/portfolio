import './contact.scss';

export const Contact = () => {
    return (
        <div className="contact">
            <div className="textContainer">
                <h1>Let's work together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <div className='item-mail'>
                        <span>ananya88agrawal@gmail.com</span>
                        <a href="mailto:ananya88agrawal@gmail.com"><button>Send Mail</button></a>
                    </div>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>Gwalior, Madhya Pradesh, India, </span>
                    <span>474001</span>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <span>+91 8878331661</span>
                </div>
                <div className="social">
                    <a href="https://github.com/ananyagrwl" target='blank'><img src="/assets/github.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/ananya-agrawal-65b1b7252/" target='blank'><img src="/assets/linkedin.png" alt="" /></a>
                    <a href="https://www.codingninjas.com/studio/profile/Ananya88" target='blank'><img src="/assets/cn2.png" alt="" /></a>
                    <a href="https://leetcode.com/Ananya88/" target='blank'><img src="/assets/leetcode.png" alt="" /></a>
                </div>
            </div>
            <div className="call">
                <img src="/assets/call.gif" alt="" />
            </div>
        </div>
    )
}
