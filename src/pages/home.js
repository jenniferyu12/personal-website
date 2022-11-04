import { useEffect, useState } from 'react';
import containerStyles from '../styles/containers.module.css';
import photoStyles from '../styles/photos.module.css';

const Home = () => {
    const hobbyArray = [" visual arts", " watching hockey", " following the NBA", " ballet", " travelling"]
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [typing, setTyping] = useState(true);

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (typing && !hobbyArray.includes(text)) {
                setText(hobbyArray[index].slice(0, text.length + 1));
            } else if (typing && hobbyArray.includes(text)) {
                sleep(2000).then(() => {
                    setTyping(false);
                })
            } else if (!typing || hobbyArray.includes(text)) {
                setText(hobbyArray[index].slice(0, text.length - 1));
                if (text.length <= 2) {
                    if (index == 4) {
                        setIndex(0);
                    } else {
                        setIndex(index + 1);
                    }
                    setTyping(true);
                }
            }
        }, 100);
        return () => {
            clearTimeout(timeout);
            
        };
    }, [text, typing]);

    return (
            <div className={containerStyles.horizontalFlexContainer}>
                <div>
                    <img src={'/assets/Jennifer Photo.JPG'} alt="Jennifer" className={photoStyles.largeImage}/>
                </div>
                <div className={containerStyles.textContainer}>
                    <p>
                        Hey there!<br/><br/>
                        My name is Jennifer Yu and
                        I am currently a third-year computer science
                        student at the University of Waterloo.<br/><br/>
                        I love
                        <span className="italic-text">{text}</span><br/><br/>
                        Here on my website you can find
                        some of my paintings and drawings, photos I've taken, and my resume. 
                        Enjoy!
                    </p>
                </div>
            </div>
        
    )
}

export default Home;

/*
<p>
                        Hi!<br/><br/>
                        My name is Jennifer Yu and
                        I am currently a third-year computer science
                        student at the University of Waterloo. Some of my hobbies and
                        interests include visual arts, travelling, and watching the NBA and NHL. Here on my website you can find
                        some of my paintings and drawings, photos I've taken, and my resume. 
                        Enjoy!
                    </p>
*/ 