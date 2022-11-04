import photoStyles from "../styles/photos.module.css";

const PhotoCard = ({imgSrc, caption}) => {

    return (
        <div>
            <img src={imgSrc} alt={caption} className={photoStyles.xlImage}></img>
            <p>{caption}</p>
        </div>
    )
}

export default PhotoCard;