import PhotoCard from "./photoCard.js";
import {useState} from 'react';
import containerStyles from "../styles/containers.module.css";
import photoStyles from "../styles/photos.module.css";

const PhotoSlideCard = ({location, year, photoArr}) => {
    const [index, setIndex] = useState(0);

    const prevIndex = () => {
        if (index === 0) {
            setIndex(photoArr.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    const nextIndex = () => {
        if (index === photoArr.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <div className={containerStyles.slideContainer}>
            <div className={containerStyles.titleContainer}>
                <h2>{location}</h2>
                <h3>{year}</h3>
            </div>
            <div className={photoStyles.imageContainer}>
                <button onClick={prevIndex}>&#8249;</button>
                <PhotoCard imgSrc={photoArr[index].src} caption={photoArr[index].caption} key={index}/>
                <button onClick={nextIndex}>&#8250;</button>
            </div>
        </div>
    )
}

export default PhotoSlideCard;