// import styles from './projectList.module.css'

import ProjectItem from "../ProjectItem"

const ProjectList = ({ projects }) => {
    return (
        <div>
            {projects.map((project) => 
                <ProjectItem key={project.id} project={project}  />
            )}
        </div>
    )
    
}

export default ProjectList