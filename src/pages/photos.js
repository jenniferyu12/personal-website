import { useEffect } from "react";
import PhotoSlideCard from "../components/photoSlideCard";
import containerStyles from "../styles/containers.module.css";

const Photos = () => {
    const imgArr = [
        {
            location: "Hawaii",
            year: 2016,
            photoArr: [
                {
                    src: "assets/Hawaii/Diamond Head State Monument, HI.JPG",
                    caption: "Diamond Head State Monument in Honolulu"
                },
                {
                    src: "assets/Hawaii/Honolulu, HI 2.JPG",
                    caption: "Waikiki Beach in Honolulu"
                },
                {
                    src: "assets/Hawaii/Honolulu, HI.JPG",
                    caption: "One of my favourites - I have a sketch uploaded to my website"
                },
                {
                    src: "assets/Hawaii/hawaii rainbow.JPG",
                    caption: "Rainbow seen by Waikoloa Beach on the Big Island"
                },
                {
                    src: "assets/Hawaii/Black Sand.JPG",
                    caption: "Black Sand Beach"
                },
            ]
        }, 
        {
            location: "Las Vegas",
            year: 2017,
            photoArr: [
                {
                    src: "assets/Las Vegas/RedRock.jpeg",
                    caption: "Red Rock Canyon National Conservation Area"
                },
                {
                    src: "assets/Las Vegas/Las Vegas Street.jpeg",
                    caption: "Night view of the Vegas Strip"
                },
                {
                    src: "assets/Las Vegas/Grand Canyon.jpeg",
                    caption: "The Grand Canyon"
                },
                {
                    src: "assets/Las Vegas/Grand Canyon 2.jpeg",
                    caption: "The Grand Canyon"
                },
                {
                    src: "assets/Las Vegas/Plant.jpeg",
                    caption: "Unique desert plant"
                },
                {
                    src: "assets/Las Vegas/RedRock2.jpeg",
                    caption: "Red Rock Canyon National Conservation Area"
                },
            ]
        },
        {
            location: "China",
            year: 2018,
            photoArr: [
                {
                    src: "assets/China/Summer Palace, Beijing.jpeg",
                    caption: "Summer Palace in Beijing"
                },
                {
                    src: "assets/China/Wenzhou 2.jpeg",
                    caption: "Wenzhou, my grandmother's hometown"
                },
                {
                    src: "assets/China/Wenzhou 1.jpeg",
                    caption: "Wenzhou, my grandmother's hometown"
                },
            ]
        },
        {
            location: "New York",
            year: 2019,
            photoArr: [
                {
                    src: "assets/New York 2019/23rd Street, NY.JPG",
                    caption: "23rd Street and 10th Avenue, NY"
                },
                {
                    src: "assets/New York 2019/79th Street, NY.JPG",
                    caption: "Building on 79th Street, NY"
                },
                {
                    src: "assets/New York 2019/24th Street and 6th Avenue, NY.JPG",
                    caption: "24th Street and 6th Avenue, NY"
                },
                {
                    src: "assets/New York 2019/NY subway.JPG",
                    caption: "Subway in NYC"
                },
                {
                    src: "assets/New York 2019/MET monet 2.JPG",
                    caption: "Monet painting at the MET"
                },
                {
                    src: "assets/New York 2019/MET sculptures.JPG",
                    caption: "Sculpture hall at the MET"
                },
                {
                    src: "assets/New York 2019/Letchworth State Park, NY - Lower Falls.JPG",
                    caption: "Letchworth State Park, NY - Lower Falls"
                },
                {
                    src: "assets/New York 2019/Hammondsport dock.JPG",
                    caption: "Dock in Hammondsport, NY"
                },
            ]
        },
        {
            location: "France",
            year: 2019,
            photoArr: [
                {
                    src: "assets/Paris/L_Arc de Triomphe, Paris, France.JPG",
                    caption: "L'arc de Triomphe, Paris"
                },
                {
                    src: "assets/Paris/Eiffel Tower (full), Paris, France.JPG",
                    caption: "Eiffel Tower, Paris"
                },
                {
                    src: "assets/Paris/Paris.JPG",
                    caption: "Jardin des Tuileries, Paris"
                },
                {
                    src: "assets/Paris/The Seine, Paris, France.JPG",
                    caption: "View from the Seine, Paris"
                },
                {
                    src: "assets/Paris/THe Louvre 2.JPG",
                    caption: "The Louvre, Paris"
                },
                {
                    src: "assets/Paris/Palace de Versailles.JPG",
                    caption: "Palace des Versailles, France"
                },
                {
                    src: "assets/Paris/Palace de Versailles Garden.JPG",
                    caption: "Palace de Versailles Gardens, France"
                },
                {
                    src: "assets/Paris/Monet_s Water Lilies, Giverny.JPG",
                    caption: "Monet's water lilies at his Giverny home"
                },
                {
                    src: "assets/Paris/Monet_s Water Lilies 2, Giverny.JPG",
                    caption: "Monet's water lilies at his Giverny home"
                },
                {
                    src: "assets/Paris/Monet_s Kitchen, Giverny.JPG",
                    caption: "Monet's kitchen in Giverny"
                },
            ]
        },
        {
            location: "Key West",
            year: 2019,
            photoArr: [
                {
                    src: "assets/Florida/Mallory Square 2.jpeg",
                    caption: "Mallory Square, Key West"
                },
                {
                    src: "assets/Florida/Mallory Square Sunset.JPG",
                    caption: "Mallory Square sunset, Key West"
                },
                {
                    src: "assets/Florida/DJ_s Clam Shack Lobster Roll.JPG",
                    caption: "Lobster Roll at DJ's Clam Shack - a must!"
                },
                {
                    src: "assets/Florida/Key West Fish and Chips.jpeg",
                    caption: "Key West Fesh and Chips, right next door to DJ's Clam Shack"
                },
                {
                    src: "assets/Florida/Key West Street.JPG",
                    caption: "Evening street view"
                },
                {
                    src: "assets/Florida/Ernest Hemingway House copy.JPG",
                    caption: "Ernest Hemingway's Key West home"
                },
            ]
        }
    ]

    return (
        <div className={containerStyles.verticalFlexContainer}>
            {imgArr.map((slide, index) => (
                <PhotoSlideCard location={slide.location} year={slide.year} photoArr={slide.photoArr} key={index}/>
            ))}
        </div>
    )
}

export default Photos;