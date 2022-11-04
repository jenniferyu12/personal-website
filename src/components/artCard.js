import { useEffect } from 'react';
import containerStyles from '../styles/containers.module.css';
import photoStyles from '../styles/photos.module.css';

const ArtCard = ({imgSrc, title, artist, year}) => {
    return (
        <div className={containerStyles.cardContainer}>
            <img src={imgSrc} alt={title} className={photoStyles.smallImage}/>
            <div className={containerStyles.cardTextContainer}>
            {title}
            {artist}
            {year}
            </div>
        </div>
    )
}

export default ArtCard;