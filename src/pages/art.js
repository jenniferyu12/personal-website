import containerStyles from '../styles/containers.module.css';
import ArtCard from '../components/artCard.js';

export default function Home() {
    const pathArr = [
        {
            src: "assets/Art/Water Lilies, 1906 (Repaint).jpg",
            title: <h2>My rendition of <i>Water Lilies</i></h2>,
            artist: <h3>Claude Monet</h3>,
            year: <h4>1906</h4>
        },
        {
            src: "assets/Art/Impressionist, Sunrise (Repaint).JPG",
            title: <h2>My rendition of <i>Impressionist, Sunrise</i></h2>,
            artist: <h3>Claude Monet</h3>,
            year: <h4>1872</h4>
        },
        {
            src: "assets/Art/Wheat Path (Repaint).jpg",
            title: <h2>My rendition of <i>Path in the Wheat at Pourville</i></h2>,
            artist: <h3>Claude Monet</h3>,
            year: <h4>1882</h4>
        },
        {
            src: "assets/Art/Woman-parasol (Repaint).jpg",
            title: <h2>My rendition of <i>Woman with a Parasol</i></h2>,
            artist: <h3>Claude Monet</h3>,
            year: <h4>1886</h4>
        },
        {
            src: "assets/Art/Great Wave.jpg",
            title: <h2>My sketch of <i>The Great Wave off Kanagawa</i></h2>,
            artist: <h3>Hokusai</h3>,
            year: <h4>1829</h4>
        },
        {
            src: "assets/Art/Hawaii Shore.jpg",
            title: <h2>Sketch of a photo I took on a trip to Hawaii</h2>,
        },
        {
            src: "assets/Art/Dock in Hammondsport, NY.jpg",
            title: <h2>Painting of a photo I took on a trip to Hammondsport, NY</h2>
        },
    ]
    return (
        <div className={containerStyles.imageGridContainer}>
            { pathArr.map((obj, index) => (
                <ArtCard imgSrc={obj.src} title={obj.title} artist={obj.artist} year={obj.year} key={index}></ArtCard>
            )) }
        </div>
    )
}