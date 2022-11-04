import containerStyles from "../styles/containers.module.css";

const ProjectCard = ({title, body}) => {

    return ( 
        <div className={containerStyles.projectContainer}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )

}

export default ProjectCard;